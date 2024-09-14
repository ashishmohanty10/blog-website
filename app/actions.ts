"use server";

import { redirect } from "next/navigation";
import { postSchema, SiteCreationSchema } from "./utils/zodSchemas";
import prisma from "./utils/db";
import { parseWithZod } from "@conform-to/zod";
import { requireuser } from "./utils/requireUser";

export async function CreateSiteAction(prevState: unknown, formData: FormData) {
  const user = await requireuser();

  const submission = await parseWithZod(formData, {
    schema: SiteCreationSchema({
      async isSubdirectoryUnique() {
        const existingSubdirectory = await prisma.site.findUnique({
          where: {
            subdirectory: formData.get("subdirectory") as string,
          },
        });

        return !existingSubdirectory;
      },
    }),

    async: true,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }
  const response = await prisma.site.create({
    data: {
      name: submission.value.name,
      description: submission.value.description,
      subdirectory: submission.value.subdirectory,
      userId: user.id,
    },
  });

  return redirect("/dashboard/sites");
}

export async function CreateArticleAction(
  prevState: unknown,
  formData: FormData
) {
  const user = await requireuser();

  const submission = parseWithZod(formData, {
    schema: postSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  const respose = await prisma.post.create({
    data: {
      title: submission.value.title,
      smallDescription: submission.value.smallDescription,
      slug: submission.value.slug,
      articleContent: JSON.parse(submission.value.articleContent),
      image: submission.value.coverimage,
      userId: user.id,
      siteId: formData.get("siteId") as string,
    },
  });

  return redirect(`/dashboard/sites/${formData.get("siteId")}`);
}

export async function EditPostAction(prevState: any, formData: FormData) {
  const user = await requireuser();

  const submission = parseWithZod(formData, {
    schema: postSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  const data = await prisma.post.update({
    where: {
      userId: user.id,
      id: formData.get("articleId") as string,
    },
    data: {
      title: submission.value.title,
      smallDescription: submission.value.smallDescription,
      slug: submission.value.slug,
      articleContent: JSON.parse(submission.value.articleContent),
      image: submission.value.coverimage,
    },
  });

  return redirect(`/dashboard/sites/${formData.get("siteId")}`);
}

export async function DeleteArtcle(formData: FormData) {
  const user = await requireuser();

  const data = await prisma.post.delete({
    where: {
      userId: user.id,
      id: formData.get("articleId") as string,
    },
  });

  return redirect(`/dashboard/sites/${formData.get("siteId")}`);
}

export async function UpdateSiteImage(formData: FormData) {
  const user = await requireuser();

  const data = await prisma.site.update({
    where: {
      userId: user.id,
      id: formData.get("siteId") as string,
    },
    data: {
      imageUrl: formData.get("imageUrl") as string,
    },
  });

  return redirect(`/dashboard/sites/${formData.get("siteId") as string}`);
}

export async function DeleteSite(formData: FormData) {
  const user = await requireuser();

  const data = await prisma.site.delete({
    where: {
      userId: user.id,
      id: formData.get("siteId") as string,
    },
  });

  return redirect(`/dashboard/sites`);
}
