"use client";
import React, { useRef } from "react";
import {
  AnimatePresence,
  motion,
  Reorder,
  useDragControls,
} from "framer-motion";
import { tv } from "tailwind-variants";
import { cn } from "@heroui/theme";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Grip } from "lucide-react";

// Types and Constants
export type BentoSizes = "compact" | "wide" | "tall" | "canvas";
export const sizes: BentoSizes[] = ["compact", "wide", "tall", "canvas"];

// Styles
const bentoStyles = tv({
  base: "w-full rounded h-full relative from-content1 border border-default-200 bg-opacity-75 to-background bg-gradient-to-tr",
  variants: {
    size: {
      compact: "col-span-1 row-span-1",
      wide: "col-span-4 row-span-2",
      tall: "col-span-2 row-span-4",
      canvas: "col-span-4 row-span-4",
    },
  },
  defaultVariants: { size: "compact" },
});

// Helper function to get next size
const getNextSize = (
  currentSize: BentoSizes,
  direction: "increase" | "decrease",
): BentoSizes => {
  const sizeIndex = sizes.indexOf(currentSize);
  if (direction === "increase") {
    return sizes[Math.min(sizeIndex + 1, sizes.length - 1)];
  }
  return sizes[Math.max(sizeIndex - 1, 0)];
};

// Resizer Component
interface ResizerProps {
  position: "tl" | "tr" | "bl" | "br";
  size: BentoSizes;
  setSize: (size: BentoSizes) => void;
}

const Resizer: React.FC<ResizerProps> = ({ position, size, setSize }) => {
  const dragStartPos = useRef<{ x: number; y: number } | null>(null);

  const handleDragStart = (e: React.DragEvent) => {
    console.log("drag start");
    dragStartPos.current = { x: e.clientX, y: e.clientY };
  };

  const handleDrag = (e: React.DragEvent) => {
    if (!dragStartPos.current || !e.clientX || !e.clientY) return;

    const deltaX = e.clientX - dragStartPos.current.x;
    const deltaY = e.clientY - dragStartPos.current.y;
    const threshold = 5; // Minimum drag distance to trigger resize
    console.table({
      deltaX,
      deltaY,
      size,
    });
    if (Math.abs(deltaX) > threshold || Math.abs(deltaY) > threshold) {
      // Determine if we're making the box bigger or smaller
      const isIncreasing = deltaX + deltaY > 0;
      setSize(getNextSize(size, isIncreasing ? "increase" : "decrease"));
      dragStartPos.current = { x: e.clientX, y: e.clientY };
    }
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      onDragEnter={handleDrag}
      className={cn(
        "absolute w-4 h-4 border-2 border-default cursor-nwse-resize",
        "opacity-0 hover:opacity-100 transition-opacity duration-200",
        {
          "top-0 left-0 border-t-2 border-r-2": position === "tl",
          "top-0 right-0 border-t-2 border-r-2": position === "tr",
          "bottom-0 left-0 border-b-2 border-l-2": position === "bl",
          "bottom-0 right-0 border-b-2 border-l-2": position === "br",
        },
      )}
    />
  );
};

// BentoGrid Component
interface BentoGridProps extends React.HTMLProps<HTMLUListElement> {
  items: string[];
  name: string;
  children: React.ReactNode;
}

export const BentoGrid = React.forwardRef<HTMLUListElement, BentoGridProps>(
  ({ name, children, className, items: initialItems, ...props }, ref) => {
    const [items, setItems] = useLocalStorage<string[]>(
      `bento-${name}`,
      initialItems,
    );
    const childrenArray = React.Children.toArray(children);
    const orderedChildren = items?.map((id) =>
      childrenArray.find(
        (child) => React.isValidElement(child) && child.key === `.$${id}`,
      ),
    );

    return (
      <Reorder.Group
        as="ul"
        axis="y"
        values={items!}
        onReorder={setItems}
        className={cn(
          "grid grid-auto-cols-dense",
          "grid-cols-[repeat(auto-fill,128px)]",
          "grid-rows-[repeat(2,128px)] auto-rows-[minmax(128px,auto)]",
          "w-full h-full gap-4 p-6",
          className,
        )}
        ref={ref}
        {...props}
      >
        <AnimatePresence>{orderedChildren}</AnimatePresence>
      </Reorder.Group>
    );
  },
);

BentoGrid.displayName = "BentoGrid";

// BentoBox Component
interface BentoBoxProps extends React.HTMLProps<HTMLLIElement> {
  size?: BentoSizes;
}

export const BentoBox = React.forwardRef<HTMLLIElement, BentoBoxProps>(
  ({ size = "compact", className, children, ...props }, ref) => {
    const controls = useDragControls();
    const value = props.id ?? (props.key as string);
    const [currentSize, setCurrentSize] = useLocalStorage<BentoSizes>(
      value,
      size,
    );
    console.log(value, currentSize);

    return (
      <Reorder.Item
        ref={ref}
        as="li"
        value={value}
        drag
        className={cn(
          "relative",
          bentoStyles({ size: currentSize }),
          className,
        )}
        dragListener={currentSize === "compact"}
        dragControls={controls}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        layout
        {...props}
      >
        <Resizer position="br" size={currentSize} setSize={setCurrentSize} />
        {children}
        {currentSize !== "compact" && (
          <Grip
            onPointerDown={(e) => controls.start(e)}
            className="absolute cursor-grab hover:text-foreground transition-colors text-default top-0 right-0 m-3"
          />
        )}
      </Reorder.Item>
    );
  },
);

BentoBox.displayName = "BentoBox";
