import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig, gradientColors } from "@/config/site";
import { fontMono, fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Divider } from "@heroui/divider";
import { NavigationPill } from "@/components/navpill";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: [{ rel: "icon", url: "/favicon.svg", type: "image/svg+xml" }],
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

const Ring = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[500]">
      <svg
        className="h-1 w-full" // Ensure the SVG fills the width and has a fixed height
        viewBox="0 0 100 1" // Adjust viewBox to maintain line aspect
        preserveAspectRatio="none"
        style={{
          animation: "hueRotate 4s linear infinite",
        }}
      >
        <rect
          x="0"
          y="0"
          width="100"
          height="1"
          fill="none"
          stroke="url(#vibrantGradient)"
          strokeWidth="6"
          vectorEffect="non-scaling-stroke"
        />
        <defs>
          <linearGradient
            id="vibrantGradient"
            x1="0%"
            y1="50%"
            x2="100%"
            y2="50%"
          >
            {gradientColors.map((color, index) => (
              <stop
                key={index}
                offset={`${(index * 100) / (gradientColors.length - 1)}%`}
                stopColor={color}
                stopOpacity="1"
              />
            ))}
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontMono.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              {children}
            </main>
            <NavigationPill />
            <Divider className="max-w-[90%] mx-auto" />
            <Footer />
          </div>
          <Ring />
        </Providers>
      </body>
    </html>
  );
}
