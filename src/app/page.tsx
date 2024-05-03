// import { AuroraBackground } from "@/components/ui/aurora-background";

import { type Metadata } from "next";
import { Nav } from "@/components/home/Nav";
import { Hero } from "@/components/home/Hero";
import { Skills } from "@/components/home/Skills";

export const metadata: Metadata = { title: "Home | Artrix" };

export default function Home() {
  return (
    <main className="z-10 flex w-full flex-col overflow-hidden overflow-x-hidden ">
      <Nav />
      <Hero />
      <Skills />
    </main>
  );
}
