"use server";

import { CodeBlockProps } from "@/components/codeblock";
import type { JSX } from "react";
import type { BundledTheme } from "shiki";
import { toJsxRuntime } from "hast-util-to-jsx-runtime";
import { Fragment } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { codeToHast } from "shiki";

export async function CodeBlock({
   code,
   lang,
   themes = {
      dark: "material-theme-ocean",
      light: "github-light",
   },
}: Omit<CodeBlockProps, "initial"> & {
   themes: Record<"light" | "dark", BundledTheme>;
}) {
   const out = await codeToHast(code, {
      lang: lang,
      defaultColor: false,
      themes,
   });

   return toJsxRuntime(out, {
      Fragment,
      jsx,
      jsxs,
      components: {
         pre: (props) => <pre {...props} />,
      },
   }) as JSX.Element;
}
