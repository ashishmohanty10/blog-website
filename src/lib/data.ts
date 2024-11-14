import { prisma } from "./db";

export async function getAllBlogs() {
  const blogs = await prisma.blogs.findMany({
    take: 2,
    select: {
      image: true,
      title: true,
      smalldescription: true,
      slug: true,
      createdAt: true,
      updatedAt: true,
      id: true,
    },
  });

  return blogs;
}

export async function getRecentBlogs() {
  const recent = await prisma.blogs.findMany({
    orderBy: {
      createdAt: "asc",
    },
  });

  return recent;
}

export async function getSingleBlog(blog: string) {
  const singleBog = await prisma.blogs.findFirst({
    where: {
      id: blog,
    },
    select: {
      articleContent: true,
      createdAt: true,
      image: true,
      slug: true,
      smalldescription: true,
      updatedAt: true,
      title: true,
    },
  });

  return singleBog;
}
