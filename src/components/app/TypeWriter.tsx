import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import React, { useEffect } from "react";

export const CursorBlinker = () => (
  <motion.div
    variants={{
      blinking: {
        opacity: [0, 0, 1, 1],
        transition: {
          duration: 1,
          repeat: Infinity,
          repeatDelay: 0,
          ease: "linear",
          times: [0, 0.5, 0.5, 1],
        },
      },
    }}
    animate="blinking"
    className="ml-1 inline-block h-5 w-2 translate-y-1 bg-foreground"
  />
);

export const TypeWriter = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  const count = useMotionValue(0);

  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) => text.slice(0, latest));

  useEffect(() => {
    const controls = animate(count, text.length, {
      type: "tween",
      duration: 5,
      ease: "easeInOut",
    });
    return controls.stop;
  }, []);

  return (
    <span className={className}>
      <motion.span>{displayText}</motion.span>
      <CursorBlinker />
    </span>
  );
};
