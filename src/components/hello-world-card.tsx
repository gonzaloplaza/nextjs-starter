"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

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

type CardProps = React.ComponentProps<typeof Card>;

export function HelloWorldCard({ className, ...props }: CardProps) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Card className={cn("w-[380px]", className)} {...props}>
      <CardHeader>
        <CardTitle>Nextjs Starter</CardTitle>
        <CardDescription>
          An starter point for building your next frontend application.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div>
          {features.map((feature, index) => (
            <div
              key={index}
              className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
            >
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">{feature.title}</p>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className=" flex items-center space-x-4 rounded-md border p-4">
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">Theme switcher</p>
            <p className="text-sm text-muted-foreground">Enable or disable dark mode.</p>
          </div>
          <Switch
            defaultChecked={theme === "dark"}
            onCheckedChange={(checked) => (checked ? setTheme("dark") : setTheme("light"))}
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full"
          onClick={() => {
            location.href = "https://github.com/gonzaloplaza/nextjs-starter";
          }}
        >
          Start building
        </Button>
      </CardFooter>
    </Card>
  );
}
