import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { EmptyState } from "../components/dashboard/emptyState";
import prisma from "../utils/db";
import { requireuser } from "../utils/requireUser";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import DefaultImg from "@/public/default.png";

async function getData(userId: string) {
  const [site, articles] = await Promise.all([
    prisma.site.findMany({
      where: {
        userId: userId,
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 3,
    }),
    prisma.post.findMany({
      where: {
        userId: userId,
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 3,
    }),
  ]);

  return { site, articles };
}

export default async function DashboardPage() {
  const user = await requireuser();

  const { articles, site } = await getData(user.id);

  return (
    <div>
      <h1 className="texxttext-2xl font-semibold mb-5">
        This is from dashboard
      </h1>

      {site.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {site.map((item) => (
            <Card key={item.id}>
              <Image
                src={item.imageUrl ?? DefaultImg}
                alt="blog img"
                className="rounded-t-lg object-cover w-full h-[200px]"
                width={400}
                height={200}
              />

              <CardHeader>
                <CardTitle className="truncate">{item.name}</CardTitle>
                <CardDescription className="line-clamp-3">
                  {item.description}
                </CardDescription>
              </CardHeader>

              <CardFooter>
                <Button asChild className="w-full">
                  <Link href={`/dashboard/sites/${item.id}`}>
                    View Articles
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <EmptyState
          title="You dont have any sites created"
          description="You currently dont have any sites . Please create some so that you can see them right here"
          href="/dasboard/sites/new"
          buttonText="Create Site"
        />
      )}

      <h1 className="text-2xl mt-10 font-semibold">Recent Articles</h1>

      {articles.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {articles.map((item) => (
            <Card key={item.id}>
              <Image
                src={item.image ?? DefaultImg}
                alt={item.title}
                className="rounded-t-lg object-cover w-full h-[200px]"
                width={400}
                height={200}
              />

              <CardHeader>
                <CardTitle className="truncate">{item.title}</CardTitle>
                <CardDescription className="line-clamp-3">
                  {item.smallDescription}
                </CardDescription>
              </CardHeader>

              <CardFooter>
                <Button asChild className="w-full">
                  <Link href={`/dashboard/sites/${item.siteId}/${item.id}`}>
                    Edit Article
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <EmptyState
          title="You dont have any articles created"
          description="You currently dont have any article . Please create some so that you can see them right here"
          href="/dasboard/sites/new"
          buttonText="Create Article"
        />
      )}
    </div>
  );
}
