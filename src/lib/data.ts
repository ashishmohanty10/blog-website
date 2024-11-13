import { prisma } from "./db";

export async function getAllBlogs() {
  const blogs = await prisma.blogs.findMany();

  return blogs;
}
