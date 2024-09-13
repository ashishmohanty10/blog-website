import prisma from "@/app/utils/db";
import { Button } from "@/components/ui/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import {
  Book,
  FileIcon,
  MoreHorizontal,
  Pencil,
  PlusCircle,
  SettingsIcon,
  Trash,
} from "lucide-react";
import { redirect } from "next/navigation";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
          <Link href={`/dashboard/sites/${params.siteId}/settings`}>
            <SettingsIcon className="size-4 mr-2" />
            Settings
          </Link>
        </Button>

        <Button asChild>
          <Link href={`/dashboard/sites/${params.siteId}/create`}>
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
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Articles</CardTitle>
              <CardDescription>Manage Your Articles </CardDescription>
            </CardHeader>

            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Image</TableHead>

                    <TableHead>Title</TableHead>

                    <TableHead>Status</TableHead>

                    <TableHead>Created At</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {data.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>
                        <Image
                          src={item.image}
                          alt="article img"
                          width={64}
                          height={64}
                          className="size-16 rounded-md object-cover"
                        />
                      </TableCell>

                      <TableCell className="font-medium">
                        {item.title}
                      </TableCell>

                      <TableCell>
                        <Badge
                          variant={"outline"}
                          className="bg-green-500/10 text-green-500"
                        >
                          Published
                        </Badge>
                      </TableCell>

                      <TableCell>
                        {new Intl.DateTimeFormat("en-US", {
                          dateStyle: "medium",
                        }).format(item.createdAt)}
                      </TableCell>

                      <TableCell className="text-end">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button size={"icon"} variant={"ghost"}>
                              <MoreHorizontal className="size-4" />
                            </Button>
                          </DropdownMenuTrigger>

                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem asChild>
                              <Link
                                className="flex items-center gap-2"
                                href={`/dashboard/sites/${params.siteId}/${item.id}`}
                              >
                                <Pencil className="size-4 text-primary" />
                                Edit
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="flex gap-2" asChild>
                              <Link
                                className="flex items-center gap-2"
                                href={`/dashboard/sites/${params.siteId}/${item.id}/delete`}
                              >
                                <Trash className="size-4 text-red-500" />
                                Delete
                              </Link>
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
}
