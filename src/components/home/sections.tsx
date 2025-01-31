"use client";
import { Section } from "@/components/section";
import { ShootingStars } from "../ui/shooting-stars";
import { StarsBackground } from "../ui/star-background";
import { Spotlight } from "../ui/spotlight";
import { FlipWords } from "../ui/flip-words";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useTheme } from "next-themes";
import { OrbitingSpheres } from "../sphere";
import { ChevronDown } from "lucide-react";
import { LogoOutline, SVGGradientDef, SVGGradientDefDiagonal } from "../icons";
import NextLink from "next/link";
import { useRef } from "react";
import { gradientColors } from "@/config/site";

export const IntroSection = () => {
  const { theme } = useTheme();
  const sphereObjects = [7, 3].map((m) => ({ mass: m, volume: m }));
  return (
    <Section
      id="intro"
      title="Opening"
      icon="Signature"
      className="relative flex flex-col items-center justify-center min-h-screen gap-0 w-full mt-32 md:mt-0"
    >
      <ShootingStars />
      {theme !== "light" && (
        <>
          <StarsBackground />
          <Spotlight />
        </>
      )}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0,
        }}
        animate={{
          opacity: 0.5,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          scale: 0,
        }}
        transition={{
          duration: 0.5,
          type: "spring",
        }}
        className="absolute w-full h-full opacity-50"
      >
        <OrbitingSpheres objects={sphereObjects} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5, type: "spring" }}
        layout
        className="relative flex flex-col items-center sm:ml-32 sm:mb-0 max-w-7xl sm:items-start gap-2 w-full z-10  mb-[50vh]"
      >
        <h4 className="text-sm text-default-500">👋 Hi, I'm </h4>{" "}
        <h1 className="text-6xl font-bold inline-flex items-end gap-2 text-foreground text-center">
          <FlipWords words={["Artrix", "Sefu"]} />
        </h1>
        <p className="text-xl text-muted-foreground text-center max-w-[85vw]">
          Exploring the digital universe through code and creativity
        </p>
      </motion.div>
    </Section>
  );
};

export const AboutSection = () => {
  return (
    <Section
      id="about"
      title="About"
      icon="Heart"
      className="relative flex items-center justify-start md:flex-row min-h-screen gap-0 w-full mt-32 md:mt-0"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, type: "spring", delay: 1 }}
        className="flex flex-col items-center justify-start gap-4 w-full"
      >
        <LogoOutline className="h-32 w-32" />
        <h3 className="text-2xl font-mono font-bold text-default-500">
          About me
        </h3>
      </motion.div>
      <OrbitingSpheres objects={[7, 3].map((m) => ({ mass: m, volume: m }))} />
    </Section>
  );
};

export const ProjectsSection = () => (
  <Section
    id="projects"
    title="Projects"
    icon="CodeXml"
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
      <h1 className="text-4xl lg:text-5xl font-bold text-foreground">WASSUP</h1>
    </div>
  </Section>
);
