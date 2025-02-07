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
import {
   Logo,
   LogoOutline,
   SVGGradientDef,
   SVGGradientDefDiagonal,
} from "../icons";
import NextLink from "next/link";
import { useRef } from "react";
import { gradientColors } from "@/config/site";
import { cn } from "@heroui/react";
import { CodeBlock } from "../codeblock";
import { Suspense } from "react";
const smoothAnimation = {
   initial: {
      opacity: 0,
      y: 20,
   },
   animate: {
      opacity: 1,
      y: 0,
      transition: {
         duration: 0.8,
         ease: [0.6, 0.05, 0.01, 0.9],
      },
   },
   exit: {
      opacity: 0,
      y: -20,
      transition: {
         duration: 0.6,
         ease: [0.6, 0.05, 0.01, 0.9],
      },
   },
};

const sectionStyles = cn(
   "relative flex min-h-screen w-full mt-32 md:mt-0",
   "flex-col items-center justify-center gap-0",
);

const contentWrapperStyles = cn(
   "relative flex flex-col z-10 w-full max-w-7xl gap-2 mb-[50vh]",
   "items-center sm:items-start sm:ml-32 sm:mb-0",
);

export const IntroSection = () => {
   const { theme } = useTheme();
   const sphereObjects = [7, 3].map((m) => ({ mass: m, volume: m }));

   return (
      <Section
         id="intro"
         title="Opening"
         icon="Signature"
         className={sectionStyles}
      >
         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
         >
            <ShootingStars />
         </motion.div>

         {theme !== "light" && (
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 1.5, delay: 0.3 }}
            >
               <StarsBackground />
               <Spotlight />
            </motion.div>
         )}

         <motion.div
            className="absolute w-full h-full opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 1.2, delay: 0.2 }}
         >
            <OrbitingSpheres objects={sphereObjects} />
         </motion.div>

         <motion.div
            variants={smoothAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            layout
            className={contentWrapperStyles}
         >
            <motion.h4
               variants={smoothAnimation}
               className={cn(
                  "text-sm font-mono font-bold text-default-500",
                  "hover:text-default-400 transition-colors duration-300",
               )}
            >
               👋 Hi, I'm
            </motion.h4>

            <motion.h1
               variants={smoothAnimation}
               className="text-6xl font-bold inline-flex items-end gap-2 text-foreground text-center"
            >
               <FlipWords words={["Artrix", "Sefu"]} />
            </motion.h1>

            <motion.p
               variants={smoothAnimation}
               className={cn(
                  "text-xl text-muted-foreground text-center max-w-[85vw]",
                  "hover:text-muted-foreground/80 transition-colors duration-300",
               )}
            >
               Exploring the digital universe through code and creativity
            </motion.p>
         </motion.div>
      </Section>
   );
};

export const AboutSection = () => {
   const { theme } = useTheme();
   return (
      <Section id="about" title="About" icon="Heart" className={sectionStyles}>
         <motion.div
            variants={smoothAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            layout
            className={cn(
               contentWrapperStyles,
               "items-center sm:items-center",
               "sm:ml-0",
            )}
         >
            <motion.div
               initial={{ scale: 0.9, opacity: 0 }}
               whileInView={{ scale: 1, opacity: 1 }}
               transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
               viewport={{ once: true }}
            >
               <Logo className="h-32 w-32" />
            </motion.div>

            <motion.h3
               variants={smoothAnimation}
               className={cn(
                  "text-2xl font-mono font-bold text-default-500",
                  "hover:text-default-400 transition-colors duration-300",
               )}
            >
               About me
            </motion.h3>

            <motion.p
               variants={smoothAnimation}
               className={cn(
                  "text-xl text-muted-foreground text-center sm:text-left max-w-[85vw]",
                  "hover:text-muted-foreground/80 transition-colors duration-300",
               )}
            >
               I'm a Full Stack Software Engineer who is not here to waste your
               time.
            </motion.p>
            <div></div>
         </motion.div>
      </Section>
   );
};

export const ProjectsSection = () => (
   <Section id="projects" title="Projects" icon="CodeXml">
      <CodeBlock code={`<React />`} lang="tsx" />
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
         <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
            WASSUP
         </h1>
      </div>
   </Section>
);
