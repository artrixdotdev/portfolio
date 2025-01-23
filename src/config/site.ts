export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Artrix",
  description:
    "🪐 A space enthusiast that just happens to be a developer; or the other way around...",
  menuItems: [
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  navItems: [
    {
      label: "Socials",
      href: "/socials",
    },
    {
      label: "Resume",
      href: "/resume",
    },
  ],
  links: {
    github: "https://github.com/artrixdotdev",
    twitter: "https://twitter.com/artrix909",
    discord: "artrix_",
  },
};

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
