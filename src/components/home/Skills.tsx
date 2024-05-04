"use client";
import {
  Express,
  Firebase,
  MySQL,
  Nextjs,
  Postgres,
  Prisma,
  Reactjs,
  Scss,
  Tailwind,
} from "@/components/icons/skills";
import * as SkillIcons from "@/components/icons/skills";
import projects from "@/data/projects.json";
import Saturn from "@/components/app/Saturn";
import React, { useEffect, useRef, useState } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { PinContainer } from "../ui/3d-pin";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { HeroParallax } from "../ui/hero-parallax";
import { motion, useAnimation } from "framer-motion";

type Skill = {
  name: string;
  Icon: (props?: React.SVGProps<SVGSVGElement>) => React.JSX.Element;
  startedUsingAt: Date;
  projectIds: number[];
  confidence: number;
  link?: string;
};

const skills: Skill[] = [
  {
    name: "Next.js",
    Icon: Nextjs,
    startedUsingAt: new Date("2021"),
    projectIds: [0, 1],
    confidence: 10,
    link: "https://nextjs.org",
  },
  {
    name: "React",
    Icon: Reactjs,
    startedUsingAt: new Date("2020"),
    projectIds: [0],
    confidence: 10,
    link: "https://react.dev",
  },
  {
    name: "Tailwind",
    Icon: Tailwind,
    startedUsingAt: new Date("2021"),
    projectIds: [0],
    confidence: 10,
    link: "https://tailwindcss.com",
  },
  {
    name: "Express",
    Icon: Express,
    startedUsingAt: new Date("2019"),
    projectIds: [],
    confidence: 10,
    link: "https://expressjs.com",
  },
  {
    name: "SCSS",
    Icon: Scss,
    startedUsingAt: new Date("2019"),
    projectIds: [],
    confidence: 10,
    link: "https://sass-lang.com",
  },
  {
    name: "Firebase",
    Icon: Firebase,
    startedUsingAt: new Date("2019"),
    projectIds: [],
    confidence: 6,
    link: "https://firebase.google.com",
  },
  {
    name: "MySQL",
    Icon: MySQL,
    startedUsingAt: new Date("2022"),
    projectIds: [],
    confidence: 8,
    link: "https://www.mysql.com",
  },
  {
    name: "Postgres",
    Icon: Postgres,
    startedUsingAt: new Date("2022"),
    projectIds: [0],
    confidence: 8,
    link: "https://www.postgresql.org",
  },
  {
    name: "Prisma",
    Icon: Prisma,
    startedUsingAt: new Date("2022"),
    projectIds: [0],
    confidence: 9,
    link: "https://www.prisma.io",
  },
];

export const Skills = () => {
  return (
    <section
      id="skills"
      className="relative h-max min-h-[calc(200vh+28px)] bg-grid-neutral-300/5 md:flex-row"
    >
      <div className="sticky left-0 top-32 z-[500] m-20 flex  w-min flex-col items-start justify-center gap-3 opacity-100">
        <motion.div className="z-[500]">
          <h4>Technologies</h4>
          <ScrollArea
            className="z-50  h-min w-[80vw] min-w-48 rounded-md border bg-background p-4 !opacity-90 sm:w-[50vw]"
            style={{ maxWidth: "500px" }}
          >
            <div className="mx-auto grid w-max grid-flow-col-dense gap-3 md:grid-flow-row-dense md:auto-rows-max md:grid-cols-6">
              {skills.map((skill, i) => (
                <div key={i} className="h-min w-min">
                  <Framework skill={skill} />
                </div>
              ))}
            </div>
            <ScrollBar
              className="m-0.5 p-0.5 md:hidden"
              orientation="horizontal"
            />
          </ScrollArea>
        </motion.div>
      </div>
      <HeroParallax
        products={projects.map((p) => ({
          link: p.url,
          thumbnail: p.preview,
          title: p.name,
        }))}
      />
    </section>
  );
};
export const Framework: React.FC<{ skill: Skill }> = ({ skill }) => {
  const yearsOfExperience =
    new Date().getFullYear() - skill.startedUsingAt.getFullYear() - 1;

  return (
    <div className="h-min w-min">
      <TooltipProvider>
        <Tooltip>
          <Drawer>
            {/* <TooltipTrigger asChild> */}
            <DrawerTrigger asChild>
              <Button variant="outline" className="h-16 w-16" size="icon">
                <skill.Icon className="h-full w-full p-2" />
              </Button>
            </DrawerTrigger>
            {/* </TooltipTrigger> */}
            <TooltipContent>
              <p>{skill.name}</p>
            </TooltipContent>
            <DrawerContent className="gap-3">
              <div
                className={`mx-auto grid ${skill.projectIds.length <= 1 ? "my-6" : ""} min-h-[50vh] grid-flow-row items-center justify-center sm:gap-4 md:grid-flow-col`}
              >
                <DrawerHeader className="mx-auto flex flex-col items-center justify-center sm:col-span-1 sm:row-span-1 sm:text-center">
                  <a href={skill.link} target="_blank" className="h-min w-min">
                    <skill.Icon className="mb-4 h-32 w-32" />
                  </a>
                  <DrawerTitle>{skill.name}</DrawerTitle>
                  <DrawerDescription className="italic">
                    {yearsOfExperience}* years of experience
                  </DrawerDescription>
                </DrawerHeader>
                <div className="w-[90vw] max-w-[520px]">
                  <h3
                    className={`bold ${skill.projectIds.length > 1 ? "-mb-10 ml-12 mt-5" : " my-4"} text-3xl ${skill.projectIds.length === 0 ? "hidden" : ""}`}
                  >
                    Project showcase
                  </h3>
                  {skill.projectIds.length !== 0 ? (
                    skill.projectIds.length > 1 ? (
                      <Carousel>
                        <CarouselContent className="-ml-6">
                          {skill.projectIds.map((id) => (
                            <CarouselItem className="pl-6" key={id}>
                              <Project id={id} />
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                      </Carousel>
                    ) : (
                      skill.projectIds.map((id, i) => (
                        <Project key={i} id={id} />
                      ))
                    )
                  ) : (
                    <div className="grid h-[20vh] w-full place-items-center rounded border border-dashed md:h-[30vh]">
                      <h2 className="bold text-2xl">
                        No production ready apps yet :-(
                      </h2>
                    </div>
                  )}
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

const Project: React.FC<{ id: number }> = ({ id }) => {
  const project = projects[id]!;

  const stackIcons = project.stack
    .filter((v) => Object.keys(SkillIcons).includes(v))
    .map(
      (v) =>
        (
          SkillIcons as Record<
            string,
            (props?: React.SVGProps<SVGSVGElement>) => React.JSX.Element
          >
        )[v]!,
    );

  return (
    <div className="my-10 w-full rounded border p-4 md:my-0 md:w-max">
      <div className="flex flex-col ">
        <h3 className="bold text-3xl" title="Name">
          {project.name}
        </h3>
        <span className="bold text-muted-foreground">Stack: </span>
        <div className="flex items-center gap-3">
          {stackIcons.map((Icon, index) => (
            <Icon key={index} className="h-8 w-8" />
          ))}
        </div>
      </div>
      <PinContainer
        containerClassName="flex-1 !m-0 !p-0 w-full h-full"
        className="h-full w-full"
        href={project.url}
        title={project.name}
      >
        <img
          src={project.preview}
          alt={`Preview of ${project.name}`}
          className="aspect-video h-auto w-full max-w-[470px] rounded object-cover outline outline-8 outline-border"
          style={{ maxWidth: "100%" }}
        />
      </PinContainer>
    </div>
  );
};
