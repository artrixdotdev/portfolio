import Link from "next/link";
import { HeroHighlight } from "../ui/hero-highlight";
import { socials } from "@/metadata";
import React from "react";
import { Logo, LogoOutline } from "../icons/logo";
export const Hero = () => {
  return (
    <section
      id="home"
      className="flex h-screen min-h-screen flex-col items-center justify-center bg-dot-accent/15"
    >
      {/* <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-accent [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] "></div> */}
      <div className="flex min-w-full flex-col items-center justify-center px-[25%] sm:items-start">
        <h1 className="flex flex-1 flex-col text-[64px]">
          <LogoOutline className="!h-44 !w-44 text-transparent" />
          <Link href={`https://github.com/${socials.GITHUB_TAG}`}>Artrix</Link>
          <small className="text-[8px]">My Real name is Sefu</small>
        </h1>
      </div>
    </section>
  );
};
