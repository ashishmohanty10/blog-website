"use server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
// import { parseWithZod } from "@conform-to/zod";
import { siteSchema } from "./utils/zodSchemas";
import prisma from "./utils/db";

export async function CreateSiteAction(prevState: any, formdata: FormData) {
  const { getUser } = getKindeServerSession();

  const user = await getUser();

  if (!user) {
    redirect("/api/auth/login");
  }

  // const submission = parseWithZod(formdata, {
  //   schema: siteSchema,
  // });

  // if (submission.status !== "success") {
  //   return submission.reply;
  // }

  // const response = await prisma.site.create({
  //   data: {
  //     name: submission.value.name,
  //     description: submission.value.description,
  //     subdirectory: submission.value.subdirectory,
  //     userId: user.id,
  //   },
  // });

  return redirect("/dashboard/sites");
}
