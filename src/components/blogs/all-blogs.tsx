import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getAllBlogs } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export async function GetAllBlogs() {
  const data = await getAllBlogs();
  return (
    <div className="col-span-4 xl:col-span-3 gap-4 items-start flex flex-col space-y-2">
      {data.map((items) => (
        <Card className="col-span-3 w-full h-fit" key={items.id}>
          <CardHeader className="overflow-hidden">
            <Link href={`/blogs/${items.id}`}>
              <Image
                src={items.image}
                alt={items.title}
                className="w-full h-1/2 object-contain cursor-pointer"
                priority
                width={500}
                height={500}
              />
            </Link>

            <CardContent className="flex flex-col space-y-5 h-1/2">
              <p className="text-xs text-end">
                {new Date(items.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <CardTitle className="text-xl">{items.title}</CardTitle>

              <CardDescription>{items.smalldescription}</CardDescription>
            </CardContent>
            <CardFooter>
              <Button>View Blog</Button>
            </CardFooter>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}
