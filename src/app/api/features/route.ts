import { NextResponse } from "next/server";

const features = [
  {
    title: "Latest Next.js + React Version",
    description: "Using Nextjs 15, React 19, Eslint 9 and Prettier.",
  },
  {
    title: "Shadcn ui components",
    description: "Beautifully designed components that you can copy and paste into your app.",
  },
  {
    title: "Nodejs 22 environment",
    description:
      "Node.js® is a free, open-source, cross-platform JavaScript runtime environment that lets developers create servers, web apps, command line tools and scripts.",
  },
  {
    title: "Production-ready Dockerfile",
    description: "Deploy this application in the cloud.",
  },
];

export async function GET() {
  return NextResponse.json(features);
}
