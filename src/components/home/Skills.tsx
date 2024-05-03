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
import React, { useRef } from "react";
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
    projectIds: [0],
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
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref);
  return (
    <section id="skills" className="mx-auto min-h-screen bg-card">
      <TooltipProvider delayDuration={300}>
        <ScrollArea
          {...events}
          ref={ref}
          className="m-8 h-min w-[800px] rounded-md border p-4 sm:max-w-[500px]"
        >
          <div className="scrollbar-track-rounded-full scrollbar-track-rounded-full mx-auto grid w-max grid-flow-col-dense gap-3 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-background sm:overflow-x-scroll md:grid-flow-row-dense md:auto-rows-max md:grid-cols-6">
            {skills.map((skill, i) => (
              <div key={i} {...events} ref={ref} className="h-min w-min">
                <Framework skill={skill} />
              </div>
            ))}
          </div>
          <ScrollBar className="m-0.5 p-0.5" orientation="horizontal" />
        </ScrollArea>
      </TooltipProvider>
    </section>
  );
};
export const Framework: React.FC<{ skill: Skill }> = ({ skill }) => {
  const yearsOfExperience =
    new Date().getFullYear() - skill.startedUsingAt.getFullYear() - 1;

  return (
    <div className="h-min w-min">
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
            <div className="mx-auto flex min-h-[50vh] w-full max-w-sm flex-col items-center justify-evenly gap-3 sm:flex-row">
              <DrawerHeader className="mx-auto flex flex-col items-center justify-center sm:text-center">
                <a href={skill.link} target="_blank" className="h-min w-min">
                  <skill.Icon className="mb-4 h-32 w-32" />
                </a>
                <DrawerTitle>{skill.name}</DrawerTitle>
                <DrawerDescription className="italic">
                  {yearsOfExperience}* years of experience
                </DrawerDescription>
              </DrawerHeader>
              {skill.projectIds.length !== 0 &&
                skill.projectIds.map((id) => <Project id={id} />)}
            </div>
          </DrawerContent>
        </Drawer>
      </Tooltip>
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
    <div>
      <PinContainer href={project.url} title={project.name}>
        <img
          src={project.preview}
          className="aspect-video min-w-[70vw] sm:min-w-[20vw]"
        />
      </PinContainer>
      <span className="bold">Stack: </span>
      <div className="flex items-center gap-3">
        {stackIcons.map((Icon) => (
          <Icon className="h-8 w-8" />
        ))}
      </div>
    </div>
  );
};
