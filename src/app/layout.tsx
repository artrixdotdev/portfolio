import "@/styles/globals.css";
import { type Metadata } from "next";
import { baseMetadata } from "@/metadata";
import { BottomNav } from "@/components/app/BottomNav";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
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
    <html lang="en">
      <body className={`dark font-sans ${inter.variable}`}>
        <main className="flex min-h-screen w-full flex-col overflow-x-hidden bg-background ">
          {children}
        </main>
        <BottomNav />
      </body>
    </html>
  );
}
