"use client";
import React, { useState, useRef, useEffect, Fragment } from "react";
import { motion, Reorder } from "framer-motion";
import { tv } from "tailwind-variants";
import { cn } from "@heroui/theme";
import { Card, CardProps } from "@heroui/card";

export const bentoStyles = tv({
  base: "p-3 w-full h-full from-content1 border border-default-200 bg-opacity-75 to-background bg-gradient-to-tr",
  variants: {
    size: {
      compact: "col-span-1 row-span-1",
      wide: "col-span-4 row-span-2",
      tall: "col-span-2 row-span-4",
      canvas: "col-span-4 row-span-4",
    },
  },
  defaultVariants: {
    size: "compact",
  },
});

const sizes = ["compact", "wide", "tall", "canvas"] as const;

export type BentoSizes = keyof (typeof bentoStyles)["variants"]["size"];

export const BentoGrid = React.forwardRef<
  HTMLDivElement,
  {
    className?: string;
    children: React.ReactNode;
  }
>(({ children, className }, ref) => {
  const [items, setItems] = useState(React.Children.toArray(children));

  return (
    <Reorder.Group
      as="ul"
      axis="y"
      values={items}
      onReorder={setItems}
      className={cn(
        "grid grid-auto-flow-dense",
        "grid-cols-[repeat(auto-fill,128px)]",
        "grid-rows-[repeat(2,128px)] auto-rows-[minmax(128px,auto)]",
        "w-full h-full gap-6 p-6",
        className,
      )}
      ref={ref}
    >
      {items.map((item, index) => (
        <Reorder.Item
          className="relative"
          as={Fragment as any}
          drag
          key={index}
          value={item}
          layout
        >
          {item}
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
});

export const BentoBox = React.forwardRef<
  typeof Card,
  { size?: BentoSizes } & CardProps
>(({ size, className, ...props }, ref) => {
  return (
    <Card
      ref={ref}
      as="li"
      motionProps={{ layout: true }}
      className={cn(bentoStyles({ size }), className)}
      {...(props as any)}
    ></Card>
  );
});
