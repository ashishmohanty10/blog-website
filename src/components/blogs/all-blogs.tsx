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

export async function GetAllBlogs() {
  const data = await getAllBlogs();
  return (
    <>
      {data.map((items) => (
        <Card className="col-span-3 w-2/3 h-full">
          <CardHeader>
            <Image
              src={items.image}
              alt={items.title}
              className="w-full h-fit object-contain"
              width={200}
              height={200}
            />

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
    </>
  );
}
