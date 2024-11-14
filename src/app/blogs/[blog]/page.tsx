import { getSingleBlog } from "@/lib/data";
import { requireUser } from "@/lib/requireUser";

interface SingleBlogRouteProps {
  params: {
    blog: string;
  };
}

export default async function SingleBlogRoute({
  params,
}: SingleBlogRouteProps) {
  await requireUser();
  const blog = params.blog;
  const data = await getSingleBlog(blog);

  return (
    <div>
      <h1 className="text-white">{data?.title}</h1>
    </div>
  );
}
