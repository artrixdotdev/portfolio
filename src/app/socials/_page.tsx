"use client";
import React, { Suspense } from "react";
import { socials } from "@/metadata";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { TypeWriter } from "@/components/app/TypeWriter";
import { GithubIcon } from "lucide-react";
import { cn } from "@/util/styles";

const links = [
  {
    name: "Github",
    link: `https://github.com/${socials.GITHUB_TAG}`,
    className: "dark:bg-white bg-black text-white dark:text-black",
    icon: <GithubIcon className="h-8 w-8 stroke-white dark:stroke-black" />,
  },
  {
    name: "Discord",
    link: `https://discord.com/users/${socials.DISCORD_ID}`,
    className: "bg-[#5865F2] text-foreground fill-text hover:bg-[#404bc4]",
    icon: (
      <svg
        className="h-8 w-8 fill-foreground"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 127.14 96.36"
      >
        <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
      </svg>
    ),
  },
  {
    name: "osu!",
    link: `https://osu.ppy.sh/u/${socials.OSU_ID}`,
    icon: (
      <svg
        className="h-8 w-8"
        width="300"
        height="300"
        version="1.1"
        viewBox="0 0 300 300"
      >
        <path d="m75.1 181.4c-4.7 0-8.8-0.8-12.3-2.3s-6.4-3.7-8.6-6.4c-2.3-2.7-4-5.9-5.2-9.6s-1.7-7.6-1.7-11.9 0.6-8.3 1.7-12c1.2-3.7 2.9-7 5.2-9.7s5.2-4.9 8.6-6.5 7.6-2.4 12.3-2.4 8.8 0.8 12.3 2.4 6.4 3.7 8.8 6.5c2.3 2.7 4 6 5.2 9.7 1.1 3.7 1.7 7.7 1.7 12s-0.6 8.2-1.7 11.9-2.8 6.9-5.2 9.6c-2.3 2.7-5.2 4.9-8.8 6.4-3.4 1.6-7.6 2.3-12.3 2.3zm0-12.1c4.2 0 7.2-1.6 9-4.7s2.7-7.6 2.7-13.4-0.9-10.3-2.7-13.4-4.8-4.7-9-4.7c-4.1 0-7.1 1.6-8.9 4.7s-2.7 7.6-2.7 13.4 0.9 10.3 2.7 13.4c1.8 3.2 4.8 4.7 8.9 4.7zm51.8-14.5c-4.2-1.2-7.5-3-9.8-5.3-2.4-2.4-3.5-5.9-3.5-10.6 0-5.7 2-10.1 6.1-13.4 4.1-3.2 9.6-4.8 16.7-4.8 2.9 0 5.8 0.3 8.6 0.8s5.7 1.3 8.6 2.4c-0.2 1.9-0.5 4-1.1 6.1s-1.3 3.9-2.1 5.5c-1.8-0.7-3.8-1.4-5.9-2-2.2-0.6-4.5-0.8-6.8-0.8-2.5 0-4.5 0.4-5.9 1.2s-2.1 2-2.1 3.8c0 1.6 0.5 2.8 1.5 3.5s2.4 1.3 4.3 1.9l6.4 1.9c2.1 0.6 4 1.3 5.7 2.2s3.1 1.9 4.3 3.2 2.1 2.8 2.8 4.7 1 4.2 1 6.8c0 2.8-0.6 5.3-1.7 7.7-1.2 2.4-2.8 4.5-5 6.2-2.2 1.8-4.9 3.1-8 4.2-3.1 1-6.7 1.5-10.7 1.5-1.8 0-3.4-0.1-4.9-0.2s-2.9-0.3-4.3-0.6-2.7-0.6-4.1-1c-1.3-0.4-2.8-0.9-4.4-1.5 0.1-2 0.5-4.1 1.1-6.1 0.6-2.1 1.3-4.1 2.2-6 2.5 1 4.8 1.7 7 2.2s4.5 0.7 6.9 0.7c1 0 2.2-0.1 3.4-0.3s2.4-0.5 3.4-1 1.9-1.1 2.6-1.9 1.1-1.8 1.1-3.1c0-1.8-0.5-3.1-1.6-3.9s-2.6-1.5-4.5-2.1zm39.3-32.7c2.7-0.4 5.3-0.7 8-0.7 2.6 0 5.3 0.2 8 0.7v30.7c0 3.1 0.2 5.6 0.7 7.6s1.2 3.6 2.2 4.7c1 1.2 2.3 2 3.8 2.5s3.3 0.7 5.3 0.7c2.8 0 5.1-0.3 7-0.8v-45.4c2.7-0.4 5.3-0.7 7.9-0.7s5.3 0.2 8 0.7v55.8c-2.4 0.8-5.6 1.6-9.5 2.4s-8 1.2-12.3 1.2c-3.8 0-7.5-0.3-11-0.9s-6.6-1.9-9.3-3.8-4.8-4.8-6.3-8.5c-1.6-3.7-2.4-8.7-2.4-14.9v-31.3zm65.9 58c-0.4-2.8-0.7-5.5-0.7-8.2s0.2-5.5 0.7-8.3c2.8-0.4 5.5-0.7 8.2-0.7s5.5 0.2 8.3 0.7c0.4 2.8 0.7 5.6 0.7 8.2 0 2.8-0.2 5.5-0.7 8.3-2.8 0.4-5.6 0.7-8.2 0.7-2.8-0.1-5.5-0.3-8.3-0.7zm-0.4-80.7c2.9-0.4 5.8-0.7 8.6-0.7 2.9 0 5.8 0.2 8.8 0.7l-1.1 54.9c-2.6 0.4-5.1 0.7-7.5 0.7-2.5 0-5.1-0.2-7.6-0.7z" />
        <path d="m150 0c-82.8 0-150 67.2-150 150s67.2 150 150 150 150-67.2 150-150-67.2-150-150-150zm0 285c-74.6 0-135-60.4-135-135s60.4-135 135-135 135 60.4 135 135-60.4 135-135 135z" />
      </svg>
    ),
    className:
      "text-foreground fill-foreground bg-[#ff79b8] hover:bg-[#f668a7]",
  },
  {
    name: "Anilist",
    link: `https://anilist.co/user/${socials.ANILIST_USERNAME}`,
    icon: (
      <svg
        className="h-8 w-8"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid"
        width="172"
        height="172"
        viewBox="0 0 172 172"
      >
        <path
          fill="#02a9ff"
          fillRule="evenodd"
          d="M111.322,111.157 L111.322,41.029 C111.322,37.010 109.105,34.792 105.086,34.792 L91.365,34.792 C87.346,34.792 85.128,37.010 85.128,41.029 C85.128,41.029 85.128,56.337 85.128,74.333 C85.128,75.271 94.165,79.626 94.401,80.547 C101.286,107.449 95.897,128.980 89.370,129.985 C100.042,130.513 101.216,135.644 93.267,132.138 C94.483,117.784 99.228,117.812 112.869,131.610 C112.986,131.729 115.666,137.351 115.833,137.351 C131.170,137.351 148.050,137.351 148.050,137.351 C152.069,137.351 154.286,135.134 154.286,131.115 L154.286,117.394 C154.286,113.375 152.069,111.157 148.050,111.157 L111.322,111.157 Z"
        />
        <path
          d="M54.365,34.792 L18.331,137.351 L46.327,137.351 L52.425,119.611 L82.915,119.611 L88.875,137.351 L116.732,137.351 L80.836,34.792 L54.365,34.792 ZM58.800,96.882 L67.531,68.470 L77.094,96.882 L58.800,96.882 Z"
          fill="#fff"
        />
      </svg>
    ),
    className:
      "text-foreground fill-foreground bg-[#152232] hover:bg-[#0b1622]",
  },
] as const;

export default function Github() {
  return (
    <section
      className="m-7 flex h-screen flex-col items-center gap-6 sm:flex-row sm:justify-around sm:gap-0"
      id="socals"
    >
      <h1 className="text-bold absolute top-0 mt-10 text-4xl opacity-0 sm:opacity-100">
        I KNOW THIS LOOKS SHIT IDK HOW TO DESIGN BRO
      </h1>
      {/* <div className="absolute min-h-screen w-full bg-gradient-to-b from-white via-violet-300"></div> */}
      <Suspense fallback={"Loading"}>
        <GithubProfile />
      </Suspense>
      <ul id="links" className="grid w-full auto-rows-min gap-4 ">
        {links.map(({ link, className, icon, name }) => (
          <Button key={name} asChild className={cn("gap-2", className)}>
            <a href={link}>
              {icon} <span>{name}</span>
            </a>
          </Button>
        ))}
      </ul>
    </section>
  );
}

const GithubProfile = async () => {
  const ghProfile = await fetchGithubProfile();
  return (
    <section id="github" className=" min-w-[60%]">
      <div className=" flex w-full flex-col items-center gap-10 sm:flex-row">
        <motion.img
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "circOut" }}
          alt="Github profile picture"
          src={ghProfile.avatar_url}
          className="h-40 w-40 rounded-full shadow-2xl shadow-black"
        />
        <TypeWriter className="max-w-sm " text={ghProfile.bio} />
      </div>
    </section>
  );
};

const fetchGithubProfile = (): Promise<{ avatar_url: string; bio: string }> =>
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  fetch(`https://api.github.com/users/${socials.GITHUB_TAG}`).then((r) =>
    r.json(),
  );
