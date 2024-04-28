"use client";
import { cn } from "@/util/styles";
import {
  useMotionValue,
  motion,
  useMotionTemplate,
  useSpring,
} from "framer-motion";
import React, { useState } from "react";

export const HeroHighlight = ({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  const rawMouseX = useMotionValue(0);
  const rawMouseY = useMotionValue(0);
  const mouseSettings = {
    stiffness: 60,
    damping: 15,
    mass: 0.1,
  };
  const mouseX = useSpring(rawMouseX, mouseSettings);
  const mouseY = useSpring(rawMouseY, mouseSettings);
  const [hue, setHue] = useState(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    if (!currentTarget) return;
    const { left, top } = currentTarget.getBoundingClientRect();

    rawMouseX.set(clientX - left);
    rawMouseY.set(clientY - top);

    // Dynamically calculate hue based on mouse position
    const newHue = Math.round(
      ((clientX - left) / currentTarget.offsetWidth) * 360,
    );
    setHue(newHue);
  }

  const bg = useMotionTemplate`
      radial-gradient(
        500px circle at ${mouseX}px ${mouseY}px,
        hsl(${hue}, 40%, 15%) 0%,
        transparent 100%
      )
    `;

  return (
    <div
      className={cn(
        "group relative flex h-[40rem] w-full items-center justify-center bg-white dark:bg-black",
        containerClassName,
      )}
      onMouseMove={handleMouseMove}
    >
      <div className="bg-dot-thick-neutral-300 dark:bg-dot-thick-neutral-800 pointer-events-none absolute  inset-0" />

      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: bg,
          WebkitMaskImage: bg,
          maskImage: bg,
        }}
      />

      <div className={cn("relative z-20", className)}>{children}</div>
    </div>
  );
};
