import { heroui } from "@heroui/theme";
import svgToDataUri from "mini-svg-data-uri";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      keyframes: {
        hueRotate: {
          "0%": {
            filter: "hue-rotate(0deg)",
          },
          "100%": {
            filter: "hue-rotate(-360deg)",
          },
        },
      },
      anmation: {
        "hue-rotate": "hueRotate 10s linear infinite",
      },

      colors: {
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
    },
  },
  darkMode: ["selector", '[data-mode="dark"]', "class"],
  plugins: [
    heroui({
      layout: {
        radius: {
          small: "0.125rem",
          medium: "0.4rem",
          large: "0.6rem",
        },
      },
    }),
    require("tailwindcss-animate"),
  ],
};
