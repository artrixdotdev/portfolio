"use client";
import React, { memo, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Link2, LucideIcon, PenLine } from "lucide-react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { usePathname } from "next/navigation";
import useHash from "@/hooks/useHash";

type NavLink = {
  url: string;
  Icon: LucideIcon;
  name: string;
};

const navItems: NavLink[] = [
  { Icon: Home, name: "Home", url: "/" },
  { Icon: Link2, name: "Links", url: "/socials" },
  { Icon: PenLine, name: "Works", url: "/#works" },
];

export const BottomNav = memo(() => {
  const [isBottom, setIsBottom] = useState(false);

  // Function to check if the user has scrolled to the bottom of the page
  const checkIfBottom = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 200) {
      setIsBottom(true);
    } else {
      setIsBottom(false);
    }
  };

  // Effect to add and remove the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", checkIfBottom);
    return () => {
      window.removeEventListener("scroll", checkIfBottom);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      <TooltipProvider>
        <motion.nav
          className="fixed bottom-5 flex w-full justify-center self-center"
          initial={{ opacity: 0, y: 0 }}
          animate={
            isBottom
              ? { x: "25%", opacity: 1, y: 0 }
              : { x: 0, opacity: 1, y: 0 }
          }
          transition={{ delay: 0.2, staggerChildren: 0.1, ease: "circInOut" }}
        >
          <motion.ul
            className="flex gap-4 rounded-lg bg-foreground px-4 text-background shadow-2xl shadow-black"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, x: 0, opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{
              duration: 0.3,
              delay: 0.2,
              type: "spring",
              damping: 20,
              stiffness: 200,
            }}
          >
            {navItems.map((props) => (
              <NavLinkItem key={props.name} {...props} />
            ))}
          </motion.ul>
        </motion.nav>
      </TooltipProvider>
    </AnimatePresence>
  );
});

const NavLinkItem = memo((props: NavLink) => {
  const MotionNextLink = motion(Link);
  const path = usePathname();
  const hash = useHash();
  const isCurrent = props.url === path;

  return (
    <Tooltip delayDuration={300}>
      <TooltipTrigger asChild>
        <MotionNextLink
          className={`relative h-full w-full bg-clip-border py-3 transition hover:text-background/80 ${
            isCurrent ? "text-secondary" : ""
          }`}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{
            duration: 0.3,
            type: "spring",
            damping: 20,
            stiffness: 200,
          }}
          href={props.url}
          aria-label={props.name}
          prefetch
        >
          <motion.div
            initial={{ rotate: 0 }}
            whileHover={{ rotate: 5 }}
            transition={{ duration: 0.2 }}
          >
            <props.Icon />
          </motion.div>
          {isCurrent && (
            <motion.span
              layoutId="active-indicator"
              className="absolute bottom-0 mb-0.5 h-1 w-full rounded-sm bg-secondary"
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              whileHover={{
                width: "100%",
                // animationDelay: 3,
              }}
              transition={{
                duration: 0.3,
                type: "spring",
                damping: 20,
                stiffness: 200,
              }}
            />
          )}
        </MotionNextLink>
      </TooltipTrigger>
      <TooltipContent className="mb-3 flex self-center px-3 py-2 text-center">
        {props.name}
      </TooltipContent>
    </Tooltip>
  );
});
