"use client";
import { LogoOutline } from "@/components/icons";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="flex h-screen pb-48 items-center justify-center"
    >
      <LogoOutline className="h-48 w-48 animate-hue-rotate" />
    </motion.div>
  );
}
