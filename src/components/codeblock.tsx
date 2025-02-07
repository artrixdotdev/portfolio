"use client";
import { JSX, useLayoutEffect, useState } from "react";
import { highlight } from "@/lib/highlight";
import { BundledLanguage } from "shiki/bundle/web";
import { Code } from "@heroui/react";
import "@/styles/code-theme.css";
export type CodeBlockProps = {
   initial?: JSX.Element;
   code: string;
   lang: BundledLanguage;
};

export function CodeBlock({ initial, code, lang = "ts" }: CodeBlockProps) {
   const [nodes, setNodes] = useState(
      initial ?? (
         <Code className="font-[500] p-0 w-full text-base">
            <pre>{code}</pre>
         </Code>
      ),
   );

   useLayoutEffect(() => {
      void highlight(code, lang).then(setNodes);
   }, []);

   return nodes ?? <p>Loading...</p>;
}
