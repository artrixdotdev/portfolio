import "@/styles/globals.css";
import { Viewport, type Metadata } from "next";
import { baseMetadata, baseViewport } from "@/metadata";
import { BottomNav } from "@/components/app/BottomNav";
import { Josefin_Sans } from "next/font/google";
import { Ring } from "@/components/app/Ring";
import { Footer } from "@/components/app/Footer";
import { ThemeProvider } from "@/components/app/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin-sans",
  display: "swap",
});

export const metadata: Metadata = {
  ...baseMetadata,

  description: "Gamer, producer, astronomy enthusiast, and developer all in 1",
};

export const viewport: Viewport = { ...baseViewport };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="scrollbar-track-rounded-full scrollbar-track-rounded-full bg-background delay-500 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-background *:transition-colors"
      suppressHydrationWarning
    >
      <body className={`font-josefin-sans ${josefinSans.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Ring />
          <BottomNav />
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
