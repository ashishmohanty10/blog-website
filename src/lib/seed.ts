import { title } from "process";
import { prisma } from "./db";
import { randomUUID } from "crypto";

const blogsContent = [
  {
    title:
      "Getting Started with Next.js: A Comprehensive Guide for Modern Web Development",
    slug: "getting-started-with-nextjs",
    smalldescription:
      "Master the fundamentals of Next.js and learn how to build scalable, production-ready web applications with this comprehensive guide",
    image: "https://utfs.io/f/rDy7g7X4aS6tncs9RlSKOPRB4SejtypEbDW2ukr1VoiNACql",
    articleContent: [
      {
        type: "paragraph",
        content:
          "Next.js has revolutionized the way developers build React applications by providing a powerful framework that combines the best of both server-side and client-side rendering. In this comprehensive guide, we'll explore everything you need to know to get started with Next.js and build professional-grade web applications.",
      },
      {
        type: "heading",
        level: 2,
        content: "Understanding the Next.js Architecture",
      },
      {
        type: "paragraph",
        content:
          "Next.js is built on top of React and introduces several architectural concepts that make it unique. At its core, Next.js leverages a hybrid approach to rendering, allowing developers to choose between Server-Side Rendering (SSR), Static Site Generation (SSG), and Client-Side Rendering (CSR) on a per-page basis. This flexibility ensures optimal performance and user experience for different types of content and use cases.",
      },
      {
        type: "heading",
        level: 3,
        content: "Key Features That Set Next.js Apart",
      },
      {
        type: "list",
        items: [
          "File-system based routing",
          "Automatic code splitting",
          "Built-in API routes",
          "Image optimization",
          "Incremental Static Regeneration (ISR)",
          "Zero-config TypeScript support",
        ],
      },
      {
        type: "paragraph",
        content:
          "The file-system based routing in Next.js simplifies the development process by automatically creating routes based on your file structure. This intuitive approach allows developers to focus on building features rather than configuring complex routing systems.",
      },
      {
        type: "heading",
        level: 2,
        content: "Setting Up Your First Next.js Project",
      },
      {
        type: "paragraph",
        content:
          "Getting started with Next.js is straightforward. The framework provides a powerful CLI tool that sets up everything you need to begin development. Let's walk through the initial setup process and explore the project structure.",
      },
      {
        type: "code",
        language: "bash",
        content:
          "npx create-next-app@latest my-nextjs-app\ncd my-nextjs-app\nnpm run dev",
      },
      {
        type: "heading",
        level: 3,
        content: "Project Structure and Organization",
      },
      {
        type: "paragraph",
        content:
          "A typical Next.js project follows a conventional structure that promotes organization and scalability. Understanding this structure is crucial for maintaining large applications and collaborating with other developers.",
      },
      {
        type: "heading",
        level: 2,
        content: "Data Fetching Strategies",
      },
      {
        type: "paragraph",
        content:
          "Next.js provides multiple ways to fetch data for your pages, each suited for different use cases. Understanding these methods is crucial for building efficient applications that provide an optimal user experience.",
      },
      {
        type: "list",
        items: [
          "getStaticProps for static data fetching at build time",
          "getServerSideProps for server-side rendering with fresh data",
          "getStaticPaths for dynamic routes with static generation",
          "Client-side data fetching with SWR or React Query",
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "Optimizing Performance",
      },
      {
        type: "paragraph",
        content:
          "Performance optimization is a crucial aspect of modern web development, and Next.js provides several built-in features to help you achieve optimal performance. From automatic image optimization to intelligent code splitting, Next.js handles many optimization tasks out of the box.",
      },
      {
        type: "heading",
        level: 3,
        content: "Image Optimization",
      },
      {
        type: "paragraph",
        content:
          "The Next.js Image component automatically optimizes images for different device sizes and formats, ensuring fast loading times while maintaining visual quality. This feature alone can significantly improve your application's performance and user experience.",
      },
      {
        type: "code",
        language: "jsx",
        content:
          'import Image from \'next/image\'\n\nexport default function Hero() {\n  return (\n    <Image\n      src="/hero.jpg"\n      alt="Hero image"\n      width={1200}\n      height={600}\n      priority\n    />\n  )\n}',
      },
      {
        type: "heading",
        level: 2,
        content: "Deployment and Production Considerations",
      },
      {
        type: "paragraph",
        content:
          "When it comes to deploying Next.js applications, you have several options available. Vercel, the company behind Next.js, provides a seamless deployment experience, but you can also deploy to other platforms like Netlify, AWS, or your own infrastructure.",
      },
      {
        type: "heading",
        level: 3,
        content: "Environment Configuration",
      },
      {
        type: "paragraph",
        content:
          "Managing environment variables and configuration across different deployment environments is crucial for maintaining a secure and reliable application. Next.js provides built-in support for environment variables with different scopes for server-side and client-side code.",
      },
      {
        type: "heading",
        level: 2,
        content: "Conclusion and Next Steps",
      },
      {
        type: "paragraph",
        content:
          "Next.js continues to evolve and improve with each release, introducing new features and optimizations that make it easier to build modern web applications. As you continue your journey with Next.js, explore the official documentation, join the community, and experiment with different features to build increasingly sophisticated applications.",
      },
    ],
  },
  {
    title: "Understanding TypeScript: From Basics to Advanced Concepts",
    slug: "understanding-typescript",
    smalldescription:
      "Dive deep into TypeScript's powerful type system and learn how it enhances JavaScript development",
    image: "https://utfs.io/f/rDy7g7X4aS6t8Z2tqJVI4f0dW8kgPMU2o9ZNE6lHv3OpR7se",
    articleContent: [
      {
        type: "paragraph",
        content:
          "TypeScript has become an indispensable tool in modern JavaScript development, offering a robust type system that catches errors before they reach production. In this comprehensive guide, we'll explore TypeScript's features from basic to advanced concepts.",
      },
      {
        type: "heading",
        level: 2,
        content: "The Foundation of TypeScript",
      },
      {
        type: "paragraph",
        content:
          "At its core, TypeScript is a superset of JavaScript that adds static typing capabilities. This means that any valid JavaScript code is also valid TypeScript code, but TypeScript adds additional features that make large-scale JavaScript development more manageable and less error-prone.",
      },
      {
        type: "heading",
        level: 3,
        content: "Basic Types and Type Annotations",
      },
      {
        type: "code",
        language: "typescript",
        content:
          "// Basic type annotations\nlet name: string = 'John';\nlet age: number = 30;\nlet isActive: boolean = true;\nlet numbers: number[] = [1, 2, 3];\nlet tuple: [string, number] = ['hello', 42];",
      },
      {
        type: "heading",
        level: 2,
        content: "Advanced Type System Features",
      },
      {
        type: "paragraph",
        content:
          "TypeScript's type system goes far beyond simple type annotations, offering powerful features like interfaces, generics, and utility types that enable you to create complex type-safe applications.",
      },
      {
        type: "code",
        language: "typescript",
        content:
          "interface User {\n  id: number;\n  name: string;\n  email: string;\n  preferences?: UserPreferences;\n}\n\ntype UserPreferences = {\n  theme: 'light' | 'dark';\n  notifications: boolean;\n};",
      },
      {
        type: "heading",
        level: 2,
        content: "Working with Generics",
      },
      {
        type: "paragraph",
        content:
          "Generics are one of TypeScript's most powerful features, allowing you to write flexible, reusable code while maintaining type safety. They enable you to create components and functions that can work with multiple types while preserving type information.",
      },
      {
        type: "heading",
        level: 2,
        content: "Type Inference and Type Guards",
      },
      {
        type: "paragraph",
        content:
          "TypeScript's type inference system is sophisticated enough to understand types in many situations without explicit annotations. This, combined with type guards, makes it easier to write type-safe code that's still readable and maintainable.",
      },
      {
        type: "heading",
        level: 2,
        content: "Conclusion",
      },
      {
        type: "paragraph",
        content:
          "TypeScript has become an essential tool in modern web development, providing type safety and enhanced developer experience. As you continue to work with TypeScript, you'll discover more advanced features and patterns that will help you write better, more maintainable code.",
      },
    ],
  },

  {
    title: "Mastering Prisma ORM: Building Type-Safe Database Applications",
    slug: "mastering-prisma-orm",
    smalldescription:
      "Learn how to leverage Prisma ORM to build scalable, type-safe database applications with ease",
    image: "https://utfs.io/f/rDy7g7X4aS6t6pvgtDoqkOTb2soi7Yn1GvwtmWJIeDhgQ0UK",
    articleContent: [
      {
        type: "paragraph",
        content:
          "Prisma has emerged as a game-changing ORM (Object-Relational Mapping) tool that simplifies database operations while providing complete type safety. This comprehensive guide will walk you through everything you need to know about using Prisma effectively in your applications.",
      },
      {
        type: "heading",
        level: 2,
        content: "Understanding Prisma's Architecture",
      },
      {
        type: "paragraph",
        content:
          "Prisma consists of several key components that work together to provide a seamless database integration experience. The Prisma schema serves as the single source of truth for your database model, while the Prisma Client provides a type-safe API for database operations.",
      },
      {
        type: "heading",
        level: 2,
        content: "Schema Design and Modeling",
      },
      {
        type: "code",
        language: "prisma",
        content:
          "model User {\n  id        Int      @id @default(autoincrement())\n  email     String   @unique\n  name      String?\n  posts     Post[]\n  profile   Profile?\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n}\n\nmodel Post {\n  id        Int      @id @default(autoincrement())\n  title     String\n  content   String?\n  published Boolean  @default(false)\n  author    User     @relation(fields: [authorId], references: [id])\n  authorId  Int\n}",
      },
      {
        type: "heading",
        level: 2,
        content: "Working with Migrations",
      },
      {
        type: "paragraph",
        content:
          "Database migrations are a critical aspect of application development, and Prisma provides powerful tools for managing schema changes throughout your application's lifecycle.",
      },
      {
        type: "heading",
        level: 2,
        content: "Advanced Query Patterns",
      },
      {
        type: "paragraph",
        content:
          "Prisma offers a rich query API that allows you to perform complex database operations while maintaining type safety. Understanding these patterns is crucial for building efficient applications.",
      },
      {
        type: "heading",
        level: 2,
        content: "Conclusion",
      },
      {
        type: "paragraph",
        content:
          "Prisma represents a significant step forward in database tooling, offering a powerful combination of type safety, developer experience, and performance. As you continue to work with Prisma, you'll discover more advanced features that will help you build better database-driven applications.",
      },
    ],
  },
];

async function seedFunction() {
  const admin = await prisma.user.upsert({
    where: { email: "admin@gmail.com" },
    update: {},
    create: {
      email: "admin@gmail.com",
      name: "Admin",
    },
  });

  const blogs = blogsContent.map(
    async (items) =>
      await prisma.blogs.upsert({
        where: { id: "blogs" },
        update: {},
        create: {
          id: randomUUID(),
          title: items.title,
          slug: items.slug,
          smalldescription: items.smalldescription,
          image: items.image,
          articleContent: items.articleContent,
        },
      })
  );

  console.log(admin, blogs);
}

seedFunction()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
