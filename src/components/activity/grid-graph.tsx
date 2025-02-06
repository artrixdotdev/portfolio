"use client";
import { ContributionsCalender } from "@/lib/github";
import { cn } from "@heroui/react";
import { Tooltip } from "@heroui/react";
import { motion } from "framer-motion";
import { useMemo } from "react";

export function ContributionsGrid({
   contributions,
}: {
   contributions: ContributionsCalender;
}) {
   // Memoize the grid generation to prevent unnecessary re-renders
   const gridColumns = useMemo(() => {
      return contributions.weeks.map((_, index) => `[week-${index}]`).join(" ");
   }, [contributions]);

   return (
      <div
         className="grid gap-1"
         style={{
            gridTemplateColumns: gridColumns,
            gridAutoFlow: "column",
         }}
      >
         {contributions.weeks.map((week, weekIndex) => (
            <div key={weekIndex} className="grid grid-rows-7 gap-1">
               {week.contributionDays.map((day, dayIndex) => (
                  <ContributionDay
                     key={`${weekIndex}-${dayIndex}`}
                     day={day}
                     weekIndex={weekIndex}
                     dayIndex={dayIndex}
                  />
               ))}
            </div>
         ))}
      </div>
   );
}

function ContributionDay({
   day,
   weekIndex,
   dayIndex,
}: {
   day: any;
   weekIndex: number;
   dayIndex: number;
}) {
   // Memoize color calculation
   const contributionColor = useMemo(() => {
      if (day.contributionCount === 0) return "bg-content2";
      if (day.contributionCount > 3) return "bg-primary-500";
      return "bg-primary-200";
   }, [day.contributionCount]);

   return (
      <Tooltip
         closeDelay={20}
         delay={500}
         content={
            <div className="bg-background-soft border border-border shadow-md p-1">
               <p className="text-xs">
                  {`${day.date}: ${day.contributionCount} contributions`}
               </p>
            </div>
         }
      >
         <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{
               opacity: 1,
               scale: 1,
               transition: {
                  delay: (weekIndex + dayIndex) * 0.03, // Reduced delay for performance
                  duration: 0.2, // Slightly shorter duration
               },
            }}
            className={cn(
               "aspect-square shadow-xl rounded-sm transition-all duration-200", // Reduced duration
               contributionColor,
               "hover:ring-2 hover:ring-primary-500 hover:ring-opacity-50",
            )}
         />
      </Tooltip>
   );
}
