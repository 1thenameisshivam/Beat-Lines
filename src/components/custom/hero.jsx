"use client";
import { Button } from "@/components/ui/button";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { ArrowRight, Music2 } from "lucide-react";
import { useRouter } from "next/navigation";

export function HeroSection() {
  const navigate = useRouter();
  const { user } = useKindeBrowserClient();
  return (
    <div className="relative overflow-hidden pt-7">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-emerald-500 opacity-10 blur-[100px]"></div>

      <div className="absolute inset-0 " />
      <div className="container relative">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center rounded-full border border-border/40 bg-muted/20 px-3 py-1 text-sm">
            <span className="flex items-center gap-2">
              <Music2 className="h-3 w-3" />
              Now in Public Beta
            </span>
          </div>

          <h1 className="mt-8 max-w-4xl bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-7xl">
            Transform Music Playlists into Shared Experiences
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            BeatLine lets you create collaborative music queues, sync playback
            across users, and let the crowd decide what plays next!
          </p>

          <div className="mt-10 flex items-center gap-4">
            <Button
              onClick={() => navigate.push("/dashboard/" + user?.id)}
              size="lg"
              className="h-12 px-6"
            >
              Get Started for Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-6">
              Learn More
            </Button>
          </div>

          <div className="mt-16 animate-fade-in">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80"
                alt="Music Queue Interface"
                className="rounded-lg shadow-2xl"
                width={1200}
                height={400}
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-background/20 via-background/5 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
