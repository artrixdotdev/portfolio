import "@/styles/globals.css";
import { type Metadata } from "next";
import { baseMetadata } from "@/metadata";
import { BottomNav } from "@/components/app/BottomNav";
import { Josefin_Sans } from "next/font/google";
import { Ring } from "@/components/app/Ring";
import { Footer } from "@/components/app/Footer";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin-sans",
  display: "swap",
});

export const metadata: Metadata = {
  ...baseMetadata,

  description: "Gamer, producer, astronomy enthusiast, and developer all in 1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="scrollbar-track-rounded-full scrollbar-track-rounded-full scrollbar-thin scrollbar-track-transparent scrollbar-thumb-background"
    >
      <body className={`dark font-josefin-sans ${josefinSans.variable}`}>
        {children}
        <Ring />
        <BottomNav />
        <Footer />
      </body>
    </html>
  );
}
