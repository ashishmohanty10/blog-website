import { GetAllBlogs } from "@/components/blogs/all-blogs";
import { RecentBlogs } from "@/components/blogs/recent-blogs";

export default async function Blogs() {
  return (
    <div className="grid grid-cols-4 gap-5 max-w-7xl mx-auto my-5">
      <GetAllBlogs />
      <RecentBlogs />
    </div>
  );
}
