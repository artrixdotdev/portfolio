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

  description: "Gamer, producer, and developer all in 1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="scrollbar-thin scrollbar-thumb-background scrollbar-track-foreground scrollbar-thumb-rounded-full scrollbar-track-rounded-full"
    >
      <body className={`dark font-josefin-sans ${josefinSans.variable}`}>
        <main className="z-10 flex min-h-screen w-full flex-col overflow-hidden overflow-x-hidden bg-background">
          {children}
        </main>
        <Ring />
        <BottomNav />
        <Footer />
      </body>
    </html>
  );
}
