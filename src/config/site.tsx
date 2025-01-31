import { Hash, FileText, GithubIcon, TwitterIcon } from "lucide-react";
import { JSX } from "react";

export type SiteConfig = typeof siteConfig;

const links = {
  github: "https://github.com/artrixdotdev",
  twitter: "https://twitter.com/artrix909",
  discord: "artrix_",
} as const;

export type NavItem = {
  label: string;
  href: string;
  icon: JSX.Element;
  children?: NavItem[];
};

const navItems = [
  {
    label: "Socials",
    href: "/socials",
    icon: <Hash />,
    children: [
      {
        label: "Github",
        href: links.github,
        icon: <GithubIcon />,
      },
      {
        label: "Twitter",
        href: links.twitter,
        icon: <TwitterIcon />,
      },
    ],
  },
  {
    label: "Resume",
    href: "/resume",
    icon: <FileText />,
  },
] as NavItem[];

export const siteConfig = {
  name: "Artrix",
  description:
    "🪐 A space enthusiast that just happens to be a developer; or the other way around...",
  navItems,
  links,
} as const;

export const gradientColors = [
  // Reds
  "#FF0000",
  "#FF1A1A",
  "#FF4050",
  "#FF6666",

  // Oranges
  "#FF8533",
  "#FF851B",
  "#FFA366",

  // Yellows
  "#FFD700",
  "#FFE44D",
  "#FFEB99",

  // Yellow-Greens
  "#BFFF00",
  "#CCFF33",

  // Greens
  "#32CD32",
  "#00FF00",
  "#00FF66",

  // Blue-Greens
  "#00FA9A",
  "#00FFB3",
  "#40E0D0",

  // Light Blues
  "#00BFFF",
  "#33CCFF",

  // Blues
  "#1E90FF",
  "#0066FF",
  "#0000FF",

  // Purples
  "#6600FF",
  "#9370DB",
  "#9933FF",

  // Pinks
  "#FF69B4",
  "#FF1493",
  "#FF00FF",

  // Back to Red (to complete the wheel)
  "#FF0066",
  "#FF0033",
];
