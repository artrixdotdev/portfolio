import {
  Hash,
  FileText,
  GithubIcon,
  TwitterIcon,
  LinkIcon,
  ArrowRight,
  UserIcon,
} from "lucide-react";
import React, { JSX } from "react";
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
  description?: string;
  endContent?: JSX.Element | React.FC;
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
        description: "@artrixdotdev",
        icon: <GithubIcon />,
        endContent() {
          const [user, setUser] = React.useState<any | null>(null);

          React.useEffect(() => {
            fetch("https://api.github.com/users/artrixdotdev")
              .then((r) => r.json())
              .then(setUser);
          });

          if (!user) return null;
          return (
            <a
              href="https://github.com/artrixdotdev?tab=followers"
              target="_blank"
              className="inline-flex hover:bg-content2 transition-colors rounded-lg items-center p-2 gap-0.5"
            >
              <UserIcon className="w-4 h-4" />
              <span>{user.followers}</span>
            </a>
          );
        },
      },
      {
        label: "Twitter",
        href: links.twitter,
        description: "@artrix909",
        icon: <TwitterIcon />,
      },
      {
        label: "View all",
        href: "/socials",
        icon: <LinkIcon />,
        endContent: <ArrowRight />,
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
