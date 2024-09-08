import prisma from "@/app/utils/db";
import { Button } from "@/components/ui/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Book, PlusCircle, SettingsIcon } from "lucide-react";
import { redirect } from "next/navigation";
import Link from "next/link";

async function getData(userId: string, siteId: string) {
  const data = await prisma.post.findMany({
    where: {
      userId: userId,
      siteId: siteId,
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
    siteId: string;
  };
}) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    return redirect("/api/auth/login");
  }

  const data = await getData(user.id, params.siteId);

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
          <Link href={"#"}>
            <PlusCircle className="size-4 mr-2" />
            Create Article{" "}
          </Link>
        </Button>
      </div>

      {data === undefined || data.length === 0 ? (
        <h1>Empty</h1>
      ) : (
        <h1>Here is your data</h1>
      )}
    </>
  );
}
