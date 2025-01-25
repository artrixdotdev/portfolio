"use client";
import { Section } from "@/components/section";
import { ShootingStars } from "../ui/shooting-stars";
import { StarsBackground } from "../ui/star-background";
import { Spotlight } from "../ui/spotlight";
import { FlipWords } from "../ui/flip-words";

export const IntroSection = () => (
  <Section
    id="intro"
    title="Opening"
    icon="Signature"
    className="flex flex-col items-center justify-center md:flex-row min-h-screen gap-0 w-full mt-32 md:mt-0"
  >
    <ShootingStars />
    <StarsBackground />
    <Spotlight />
    <div className="flex flex-col items-center justify-center gap-4 w-full">
      <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
        Hi, I'm <FlipWords words={["Artrix", "Sefu"]} />
      </h1>
    </div>
  </Section>
);

export const AboutSection = () => (
  <Section
    id="about"
    title="About"
    icon="Heart"
    className="flex flex-col items-center justify-center md:flex-row min-h-screen gap-0 w-full mt-32 md:mt-0"
  >
    <div className="flex flex-col items-center justify-center gap-4 w-full">
      <h1 className="text-4xl lg:text-5xl font-bold text-foreground"></h1>
    </div>
  </Section>
);

export const ProjectsSection = () => (
  <Section
    id="projects"
    title="Projects"
    icon="Code"
    className="flex flex-col items-center justify-center md:flex-row min-h-screen gap-0 w-full mt-32 md:mt-0"
  >
    Soon
  </Section>
);

export const BlogSection = () => (
  <Section
    id="blog"
    title="Blog"
    icon="Pen"
    className="flex flex-col items-center justify-center md:flex-row min-h-screen gap-0 w-full mt-32 md:mt-0"
  >
    <div className="flex flex-col items-center justify-center gap-4 w-full">
      <h1 className="text-4xl lg:text-5xl font-bold text-foreground"></h1>
    </div>
  </Section>
);

export const ContactSection = () => (
  <Section
    id="contact"
    title="Contact"
    icon="Mail"
    className="flex flex-col items-center justify-center md:flex-row min-h-screen gap-0 w-full mt-32 md:mt-0"
  >
    <div className="flex flex-col items-center justify-center gap-4 w-full">
      <h1 className="text-4xl lg:text-5xl font-bold text-foreground"></h1>
    </div>
  </Section>
);
