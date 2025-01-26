import {
  AboutSection,
  BlogSection,
  ContactSection,
  IntroSection,
  ProjectsSection,
} from "@/components/home/sections";
import { GradiantBackground } from "@/components/radial-gradient";

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
      <GradiantBackground />
      <IntroSection />
      <AboutSection />
      <ProjectsSection />
      <BlogSection />
      <ContactSection />
    </>
  );
}
