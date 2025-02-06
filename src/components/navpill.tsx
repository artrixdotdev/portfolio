"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Link } from "@heroui/react";
import { Card } from "@heroui/react";
import { Breadcrumbs, BreadcrumbItem } from "@heroui/react";
import { Divider } from "@heroui/react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "@/components/icons";
import { useCurrentSection } from "@/hooks/useCurrentSection";
import { Section } from "@/hooks/useSections";
import { useTheme } from "next-themes";
import NextLink from "next/link";
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
      className={`flex  items-center ${isActive ? "visible" : "invisible absolute font-bold"}`}
   >
      <NextLink
         scroll
         href={`#${id}`}
         color="foreground"
         className="flex items-center gap-2"
      >
         <SectionIcon className="h-5 w-5" />
         <span>{title}</span>
      </NextLink>
   </motion.div>
);

export function NavigationPill() {
   const pathname = usePathname();
   const { currentSectionIndex, sections } = useCurrentSection();
   const pathParts = pathname.split("/").filter(Boolean);
   const [isFooterVisible, setIsFooterVisible] = useState(false);
   const { theme } = useTheme();

   useEffect(() => {
      // Create intersection observer for footer
      const observer = new IntersectionObserver(
         (entries) => {
            entries.forEach((entry) => {
               // Update state when footer visibility changes
               setIsFooterVisible(entry.isIntersecting);
            });
         },
         {
            threshold: 0.2, // Trigger when footer is 100% visible
         },
      );

      // Observe footer element
      const footer = document.querySelector("footer");
      if (footer) {
         observer.observe(footer);
      }

      return () => {
         if (footer) {
            observer.unobserve(footer);
         }
      };
   }, []);

   //if (pathParts.length === 0 && sections.length === 0) {
   //  return null;
   //}

   let isMobile = false;
   if (typeof window !== "undefined" && window.innerWidth < 768) {
      isMobile = true;
   }

   return (
      <motion.div
         initial={{ x: "-50%", y: 0 }}
         animate={{
            x: isFooterVisible && !isMobile ? "calc(30vw - 2rem)" : "-50%",
            y: isMobile && isFooterVisible ? "200%" : "0",
            transition: {
               type: "spring",
               stiffness: 100,
               damping: 20,
            },
         }}
         className="fixed bottom-5 left-1/2 z-50"
      >
         <Card
            as="nav"
            className={`shadow-2xl flex-row p-2 ${theme === "light" && "border"}`}
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
                                 index === currentSectionIndex
                                    ? "bg-primary"
                                    : "bg-foreground-500"
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
                     separator: "font-extrabold px-0.5",
                  }}
               >
                  <BreadcrumbItem href="/">
                     <Logo className="h-4 w-4" />
                  </BreadcrumbItem>
                  {pathParts.map((part, index) => (
                     <BreadcrumbItem
                        key={`${part}-${index}`}
                        href={`/${pathParts.slice(0, index + 1).join("/")}`}
                     >
                        {part}
                     </BreadcrumbItem>
                  ))}
               </Breadcrumbs>
            </div>
         </Card>
      </motion.div>
   );
}
