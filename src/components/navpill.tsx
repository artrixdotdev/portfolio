"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { Link } from "@heroui/link";
import { Card } from "@heroui/card";
import { Breadcrumbs, BreadcrumbItem } from "@heroui/breadcrumbs";
import { Divider } from "@heroui/divider";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "@/components/icons";
import { useCurrentSection } from "@/hooks/useCurrentSection";
import { Section } from "@/hooks/useSections";

// PillSection component with animation
export const PillSection = ({
  id,
  title,
  SectionIcon,
  isActive,
}: Section & {
  isActive: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 50 }}
    exit={{ opacity: 0, y: -50 }}
    transition={{ duration: 0.5, type: "spring" }}
    className={`flex items-center  ${isActive ? "visible" : "invisible absolute"}`}
  >
    <Link
      href={`#${id}`}
      color="foreground"
      className="flex items-center gap-2"
    >
      <SectionIcon className="h-5 w-5" />
      <span>{title}</span>
    </Link>
  </motion.div>
);

export function NavigationPill() {
  const pathname = usePathname();
  const { currentSectionIndex, sections } = useCurrentSection();

  const pathParts = pathname.split("/").filter(Boolean);

  if (pathParts.length === 0 && sections.length === 0) {
    return null;
  }

  return (
    <Card
      as="nav"
      className="fixed bottom-5 flex-row left-1/2 transform -translate-x-1/2 p-2 z-50"
    >
      {sections.length > 0 && (
        <>
          <div className="flex items-center justify-center relative">
            <AnimatePresence>
              {sections.map((section, index) => (
                <PillSection
                  key={section.id}
                  {...section}
                  isActive={index === currentSectionIndex}
                />
              ))}
            </AnimatePresence>

            {/* Section navigation dots */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {sections.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index === currentSectionIndex ? "bg-primary" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
          <Divider orientation="vertical" className="mx-2 h-6" />
        </>
      )}

      <div className="flex items-center justify-center space-x-4">
        <Breadcrumbs
          className="flex items-center font-mono flex-center m-0"
          separator={"/"}
          itemClasses={{
            base: "gap-none",
            item: "font-mono font-bold",
            separator: "font-extrabold",
          }}
        >
          <BreadcrumbItem href="/">
            <Logo className="h-4 w-4" />
          </BreadcrumbItem>
          {pathParts.map((part, index) => (
            <BreadcrumbItem
              key={part}
              href={`/${pathParts.slice(0, index + 1).join("/")}`}
            >
              {part}
            </BreadcrumbItem>
          ))}
        </Breadcrumbs>
      </div>
    </Card>
  );
}
