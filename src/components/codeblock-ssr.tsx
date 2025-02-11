"use server";

import { CodeBlockProps } from "@/components/codeblock";
import type { JSX } from "react";
import type { BundledTheme } from "shiki";
import { toJsxRuntime } from "hast-util-to-jsx-runtime";
import { Fragment } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { codeToHast } from "shiki";
import { transformerNotationDiff } from "@shikijs/transformers";
import { Button, cn } from "@heroui/react";
import { Copy } from "lucide-react";
import { CopyCode } from "./copy-code";
import { CodeIcon } from "./code-icon";

const removeNegativeDiffs = (code: string) =>
   code
      .split("\n")
      .filter((line) => !line.endsWith("[!code --]"))
      .join("\n");

export async function CodeBlock({
   code,
   lang,
   filename,
   themes = {
      dark: "material-theme-ocean",
      light: "material-theme-lighter",
   },
}: Omit<CodeBlockProps, "initial"> & {
   themes: Record<"light" | "dark", BundledTheme>;
   filename: string | null;
}) {
   const out = await codeToHast(code, {
      lang,
      defaultColor: false,
      themes,
      transformers: [
         transformerNotationDiff({
            matchAlgorithm: "v3",
         }),
      ],
   });

   return toJsxRuntime(out, {
      Fragment,
      jsx,
      jsxs,
      components: {
         pre: ({ className, ...props }) => (
            <div className="relative flex flex-col border border-default mb-8 shadow-xl rounded-lg">
               <div className="flex items-center pl-6 justify-between bg-content2 text-content2-foreground border-b border-default-300 w-full h-12">
                  <div className="flex items-center gap-2">
                     <span className="bg-danger-500 rounded-full w-4 h-4" />
                     <span className="bg-success-500 rounded-full w-4 h-4" />
                     <span className="bg-warning-500 rounded-full w-4 h-4" />
                  </div>
                  <span className="text-sm inline-flex font-semibold items-center justify-center gap-2 text-foreground-400">
                     <CodeIcon filename={filename} />
                     {filename || lang}
                  </span>
                  <CopyCode
                     code={removeNegativeDiffs(code).replaceAll(
                        /\/\/ \[!code.*?\]\n?/g,
                        "",
                     )}
                  />
               </div>
               <pre
                  className={cn(
                     className,
                     "w-full transition-colors overflow-x-auto p-6",
                  )}
                  {...props}
               />
            </div>
         ),
         code: ({ className, ...props }) => (
            <code className={cn(className, "w-max")} {...props} />
         ),
      },
   }) as JSX.Element;
}
