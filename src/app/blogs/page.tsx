import { GetAllBlogs } from "@/components/blogs/all-blogs";

export default async function Blogs() {
  return (
    <div className="max-w-7xl mx-auto my-5 grid grid-cols-4 gap-10">
      <GetAllBlogs />
    </div>
  );
}
