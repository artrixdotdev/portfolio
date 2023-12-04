"use client";
import React, { Suspense } from "react";
import { socials } from "@/metadata";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Github() {
  return (
    <>
      <Suspense fallback={"Loading"}>
        <GithubProfile />
      </Suspense>
    </>
  );
}

const GithubProfile = async () => {
  const ghProfile = await fetchGithubProfile();
  return (
    <section className="grid-col grid w-full">
      <motion.img
        initial={{ y: -10 }}
        animate={{ y: 10 }}
        transition={{
          type: "smooth",
          repeatType: "mirror",
          duration: 2,
          repeat: Infinity,
        }}
        alt="github profile"
        src={ghProfile.avatar_url}
        className="rounded-full shadow-2xl shadow-black"
      />
      <ul className="h-full w-full">
        <Button asChild>
          <a href={`https://discord.com/users/${socials.DISCORD_ID}`}>
            Discord
          </a>
        </Button>
      </ul>
    </section>
  );
};

const fetchGithubProfile = async () =>
  fetch(`https://api.github.com/users/${socials.GITHUB_TAG}`).then((r) =>
    r.json(),
  );
