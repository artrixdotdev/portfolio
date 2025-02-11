import { GithubFollowerCount } from "@/components/follower-pill";
import {
   Hash,
   FileText,
   GithubIcon,
   TwitterIcon,
   LinkIcon,
   ArrowRight,
   UserIcon,
   Pencil,
} from "lucide-react";

// Define constant links with better typing

export const SOCIAL_HANDLES = {
   github: "artrixdotdev",
   twitter: "artrix909",
   discord: "artrix_",
} as const;

export const SOCIAL_LINKS = {
   github: `https://github.com/${SOCIAL_HANDLES.github}`,
   twitter: `https://twitter.com/${SOCIAL_HANDLES.twitter}`,
} as const;

// Improved type definitions with more explicit typing

interface NavItem {
   label: string;
   href: string;
   icon: React.ReactElement;
   description?: string;
   endContent?: React.FC | React.ReactElement;
   children?: NavItem[];
   hide?: boolean;
}

// Centralized navigation items configuration
const NAV_ITEMS: NavItem[] = [
   {
      label: "Resume",
      href: "/resume",
      icon: <FileText />,
   },
   {
      label: "Blog",
      href: "/blog",
      icon: <Pencil />,
   },

   {
      label: "Socials",
      href: "/socials",
      icon: <Hash />,
      children: [
         {
            label: "Github",
            href: SOCIAL_LINKS.github,
            description: `@${SOCIAL_HANDLES.github}`,
            icon: <GithubIcon className="w-min h-min min-w-5 min-h-5" />,
            endContent: GithubFollowerCount,
         },
         {
            label: "Twitter",
            href: SOCIAL_LINKS.twitter,
            description: `@${SOCIAL_HANDLES.twitter}`,
            icon: <TwitterIcon className="w-min h-min min-w-5 min-h-5" />,
         },
         {
            label: "View all",
            href: "/socials",
            icon: <LinkIcon className="w-5 h-5 min-w-5 min-h-5" />,
            endContent: <ArrowRight />,
         },
      ],
   },
];

// Site configuration with improved typing
export const SITE_CONFIG = {
   name: "Artrix",
   description:
      "🪐 A space enthusiast that just happens to be a developer; or the other way around...",
   navItems: NAV_ITEMS,
   links: SOCIAL_LINKS,
   handles: SOCIAL_HANDLES,
} as const;

// Export type for better type inference
export type SiteConfig = typeof SITE_CONFIG;

// Color gradient with semantic variable name
export const GRADIENT_COLORS = {
   reds: ["#FF0000", "#FF1A1A", "#FF4050", "#FF6666"],
   oranges: ["#FF8533", "#FF851B", "#FFA366"],
   yellows: ["#FFD700", "#FFE44D", "#FFEB99"],
   yellowGreens: ["#BFFF00", "#CCFF33"],
   greens: ["#32CD32", "#00FF00", "#00FF66"],
   blueGreens: ["#00FA9A", "#00FFB3", "#40E0D0"],
   lightBlues: ["#00BFFF", "#33CCFF"],
   blues: ["#1E90FF", "#0066FF", "#0000FF"],
   purples: ["#6600FF", "#9370DB", "#9933FF"],
   pinks: ["#FF69B4", "#FF1493", "#FF00FF"],
   redTransition: ["#FF0066", "#FF0033"],
} as const;

export const gradientColors = Object.entries(GRADIENT_COLORS)
   .flat(2)
   .filter((a) => a.startsWith("#"));
