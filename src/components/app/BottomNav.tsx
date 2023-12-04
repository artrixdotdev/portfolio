"use client";

import React from "react";
import { motion } from "framer-motion";
import { Home, Link2, LucideIcon, PenLine } from "lucide-react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { usePathname, useSearchParams } from "next/navigation";

type PNavLink = { url: string; Icon: LucideIcon; name: string };

const NavItems: PNavLink[] = [
  {
    Icon: Home,
    name: "Home",
    url: "/",
  },
  {
    Icon: Link2,
    name: "Links",
    url: "/socials",
  },
  {
    Icon: PenLine,
    name: "Works",
    url: "/#works",
  },
];

export const BottomNav = () => {
  return (
    <motion.nav className="fixed bottom-3 flex w-full justify-center self-center">
      <motion.ul
        variants={{
          hidden: { opacity: 0, scale: 0 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              delayChildren: 0.1,
              staggerChildren: 0.2,
            },
          },
        }}
        initial="hidden"
        animate="visible"
        className="flex gap-4 rounded-lg bg-foreground px-4 text-background shadow-2xl"
      >
        {NavItems.map((props) => (
          <NavLink key={props.name} {...props} />
        ))}
      </motion.ul>
    </motion.nav>
  );
};

const NavLink = (props: PNavLink) => {
  const MotionNextLink = motion(Link);
  const path = usePathname();
  const isCurrent = props.url === path;
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <MotionNextLink
            className="relative h-full w-full bg-clip-border py-3 transition hover:text-background/80"
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
              },
            }}
            href={props.url}
            about={props.name}
            prefetch
          >
            <props.Icon />
            {isCurrent && (
              <motion.span
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { x: 20, scale: 0 },
                  visible: {
                    x: 0,
                    opacity: 1,
                    scale: 1,
                  },
                }}
                aria-hidden
                className="absolute bottom-0 mb-0.5 h-1 w-full rounded-sm bg-secondary"
              ></motion.span>
            )}
          </MotionNextLink>
        </TooltipTrigger>
        <TooltipContent className="mb-5">{props.name}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
