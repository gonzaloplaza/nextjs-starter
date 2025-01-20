"use client";

import axios from "axios";
import { useTheme } from "next-themes";
import { useCallback, useEffect, useState } from "react";

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
import { cn } from "@/lib/utils";

type CardProps = React.ComponentProps<typeof Card>;
type FeaturesResponse = { title: string; description: string }[];

export function HomeCard({ className, ...props }: CardProps) {
  const [mounted, setMounted] = useState(false);
  const [features, setFeatures] = useState<FeaturesResponse>([]);
  const { theme, setTheme } = useTheme();

  const getFeatures = useCallback(async () => {
    const uri = "/api/features";
    const { data } = await axios<FeaturesResponse>(uri);

    setFeatures(data);
  }, []);

  useEffect(() => {
    getFeatures().catch(console.error);
    setMounted(true);
  }, [getFeatures]);

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
        <div className="flex items-center space-x-4 rounded-md border p-4">
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
