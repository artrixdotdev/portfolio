import { LogoOutline } from "@/components/icons";
import { OrbitingSpheres } from "@/components/sphere";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { Spotlight } from "@/components/ui/spotlight";
import { StarsBackground } from "@/components/ui/star-background";
import { FlipWords } from "@/components/ui/flip-words";
import {
  AboutSection,
  BlogSection,
  ContactSection,
  IntroSection,
  ProjectsSection,
} from "@/components/home/sections";

export default function Home() {
  const objects = [
    7,
    Math.random() * Math.random() * (Math.random() > 0.5 ? 7 : 2),
  ]
    .map(Math.round)
    .map((m) => (m < 2 ? 1 : m))
    .map((m) => ({ mass: m, volume: m }));

  return (
    <>
      <IntroSection />
      <AboutSection />
      <ProjectsSection />
      <BlogSection />
      <ContactSection />
    </>
  );
}
