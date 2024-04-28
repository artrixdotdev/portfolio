"use client";

import React from "react";
import { motion } from "framer-motion";

export default (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="200"
    height="100"
    viewBox="0 0 200 100"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <motion.path
      initial={{ pathLength: 0, fill: "transparent" }}
      animate={{ pathLength: 1, fill: "currentColor" }}
      transition={{ duration: 2 }}
      d="M10 75 L30 25 L50 75 M55 75 L75 25 L95 75 M100 25 L100 75 M105 75 L125 25 L145 75 M150 25 L150 75 M155 75 L165 55 L175 75 L185 25 L195 75"
    />
  </svg>
);
