import { getRecentBlogs } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";
import Link from "next/link";

export async function RecentBlogs() {
  const recentBlogs = await getRecentBlogs();
  return (
    <div className="hidden col-span-1 xl:flex flex-col gap-5">
      {recentBlogs.map((items) => (
        <Link href="#" className="hover:shadow-md">
          <Card>
            <CardHeader className="flex justify-center items-start">
              <Image
                src={items.image}
                alt="Blog Profile"
                className="w-full"
                width={500}
                height={500}
              />

              <CardTitle className="text-base">{items.title}</CardTitle>
            </CardHeader>
            <CardContent className="line-clamp-1 text-sm text-slate-400">
              {items.smalldescription}
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
