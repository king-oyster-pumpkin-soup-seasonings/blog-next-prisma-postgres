export type Post = {
  id: string;
  title: string;
  content: string;
  published: boolean;
  author: {
    name: string;
    email: string;
  } | null;
};

export const posts: Post[] = [
  {
    id: "1",
    title: "Prisma is the perfect ORM for Next.js",
    content:
      "[Prisma](https://github.com/prisma/prisma) and Next.js go ***great*** together!",
    published: true,
    author: {
      name: "Nikolas Burk",
      email: "burk@prisma.io",
    },
  },
  {
    id: "2",
    title: "Why Next.js is the best React framework",
    content:
      "Next.js is the best React framework because it provides a great developer experience and a lot of useful features out of the box.",
    published: true,
    author: null,
  },
];
