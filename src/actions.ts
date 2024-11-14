"use server";

import { requireUser } from "./lib/requireUser";
import { parseWithZod } from "@conform-to/zod";
import { postSchema } from "./lib/zodSchema";
import { redirect } from "next/navigation";
import { prisma } from "./lib/db";

export async function createBlog(prevState: unknown, formData: FormData) {
  const user = await requireUser();
  if (!user) {
    redirect("/");
  }

  const submission = parseWithZod(formData, {
    schema: postSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  await prisma.blogs.create({
    data: {
      title: submission.value.title,
      slug: submission.value.slug,
      smalldescription: submission.value.smallDescription,
      image: submission.value.coverImage,
      articleContent: JSON.parse(submission.value.articleContent),
      userId: user.id,
    },
  });

  redirect("/blogs");
}
