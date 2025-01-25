"use client";
import { LogoOutline } from "@/components/icons";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6, ease: "circInOut" }}
      className="flex h-screen pb-48 items-center justify-center"
    >
      <LogoOutline className="h-32 w-32 animate-hue-rotate" />
    </motion.div>
  );
}
