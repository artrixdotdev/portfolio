import Link from "next/link";
import { HeroHighlight } from "../ui/hero-highlight";
import { socials } from "@/metadata";
import React from "react";
export const Hero = () => {
  return (
    <section id="home" className="min-h-screen">
      <HeroHighlight
        className="w-full"
        containerClassName="h-screen !bg-transparent"
      >
        <div className="flex min-w-full flex-col items-center justify-center px-[25%] sm:items-start">
          <h1 className="flex flex-1 flex-col text-[64px]">
            <Link href={`https://github.com/${socials.GITHUB_TAG}`}>
              Artrix
            </Link>
            <small className="text-[8px]">My Real name is Sefu</small>
          </h1>
        </div>
      </HeroHighlight>
    </section>
  );
};
