import { BentoSizes } from "@/components/bento";
import { JSX } from "react";
export type BoxType = [() => JSX.Element, { label: string; size: BentoSizes }];
