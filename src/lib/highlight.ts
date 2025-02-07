import type { JSX } from "react";
import type { BundledLanguage, BundledTheme } from "shiki/bundle/web";
import { toJsxRuntime } from "hast-util-to-jsx-runtime";
import { Fragment } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { codeToHast } from "shiki/bundle/web";
import { transformerNotationDiff } from "@shikijs/transformers";

export async function highlight(
   code: string,
   lang: BundledLanguage,
   transformers = [
      transformerNotationDiff({
         matchAlgorithm: "v3",
      }),
   ],
   themes: Record<"light" | "dark", BundledTheme> = {
      dark: "material-theme-ocean",
      light: "github-light",
   },
) {
   //await new Promise((r) => setTimeout(r, 30000));
   const out = await codeToHast(code, {
      lang,
      defaultColor: false,
      themes,
   });

   return toJsxRuntime(out, {
      Fragment,
      jsx,
      jsxs,
   }) as JSX.Element;
}
