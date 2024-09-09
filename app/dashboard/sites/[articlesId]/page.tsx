import prisma from "@/app/utils/db";
import { Button } from "@/components/ui/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Book, FileIcon, PlusCircle, SettingsIcon } from "lucide-react";
import { redirect } from "next/navigation";
import Link from "next/link";

async function getData(userId: string, articlesId: string) {
  const data = await prisma.post.findMany({
    where: {
      userId: userId,
      siteId: articlesId,
    },
    select: {
      image: true,
      title: true,
      createdAt: true,
      id: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
}

export default async function ArticlesRoute({
  params,
}: {
  params: {
    articlesId: string;
  };
}) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    return redirect("/api/auth/login");
  }

  const data = await getData(user.id, params.articlesId);

  return (
    <>
      <div className="flex w-full justify-end gap-x-4">
        <Button asChild variant={"secondary"}>
          <Link href={"#"}>
            <Book className="size-4 mr-2" />
            View Blog
          </Link>
        </Button>

        <Button asChild variant={"secondary"}>
          <Link href={"#"}>
            <SettingsIcon className="size-4 mr-2" />
            Settings
          </Link>
        </Button>

        <Button asChild>
          <Link href={`/dashboard/sites/${params.articlesId}/create`}>
            <PlusCircle className="size-4 mr-2" />
            Create Article
          </Link>
        </Button>
      </div>

      {data === undefined || data.length === 0 ? (
        <>
          <div className="flex flex-col items-center justify-center rounded-md border border-dashed p-8 text-center animate-in fade-in-10 ">
            <div className="flex size-20 items-center justify-center rounded-full bg-primary/10 ">
              <FileIcon className="size-10 text-primary " />
            </div>
            <h2 className="mt-6 text-xl fotn-semibold">
              You dont have any site created!!
            </h2>

            <p className="mb-8 mt-2 text-center text-sm leading-tight text-muted-foreground max-w-sm  mx-auto">
              You currently dont have any sites created. Please create some so
              that you can see them here!
            </p>

            <Button asChild>
              <Link href="/dashboard/sites/new">
                <PlusCircle className="m-2 size-4" />
                Create Site
              </Link>
            </Button>
          </div>
        </>
      ) : (
        <h1>Here is your data</h1>
      )}
    </>
  );
}
