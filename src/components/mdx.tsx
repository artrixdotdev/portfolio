import {
   Code,
   Link,
   Table,
   TableHeader,
   TableRow,
   TableCell,
   TableColumn,
   TableBody,
} from "@heroui/react";
import { type MDXComponents } from "mdx/types";
import { CodeBlock } from "@/components/codeblock-ssr";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import React from "react";
import cn from "clsx";

function slugify(str: string) {
   return str
      .toString()
      .toLowerCase()
      .trim() // Remove whitespace from both ends of a string
      .replace(/\s+/g, "-") // Replace spaces with -
      .replace(/&/g, "-and-") // Replace & with 'and'
      .replace(/[^\w\-]+/g, "") // Remove all non-word characters except for -
      .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}
const headingSizes = [
   "text-4xl",
   "text-3xl",
   "text-2xl",
   "text-xl",
   "text-lg",
   "text-base",
];

function createHeading(level: number) {
   const Heading: React.FC<{ children: string }> = ({ children }) => {
      let slug = slugify(children);

      return React.createElement(
         `h${level}`,
         {
            id: slug,
            style: { scrollMarginTop: "100px" },
            className: cn("font-bold mb-4", headingSizes[level - 1]),
         },
         [
            React.createElement("a", {
               href: `#${slug}`,
               key: `link-${slug}`,
               className: "anchor",
            }),
         ],
         children,
      );
   };

   Heading.displayName = `Heading${level}`;

   return Heading;
}

export const components: MDXComponents = {
   h1: createHeading(1),
   h2: createHeading(2),
   h3: createHeading(3),
   h4: createHeading(4),
   h5: createHeading(5),
   h6: createHeading(6),
   table: (props) => {
      const headers = (props.data.headers as any[]).map((header, i) => (
         <TableColumn key={i}>{header}</TableColumn>
      ));
      const rows = (props.data.rows as any[]).map((row: any[], i) => (
         <TableRow key={i}>
            {row.map((cell, i) => (
               <TableCell key={i}>{cell}</TableCell>
            ))}
         </TableRow>
      ));
      return (
         <Table {...props}>
            <TableHeader>{headers}</TableHeader>
            <TableBody>{rows}</TableBody>
         </Table>
      );
   },
   p: (props) => <p className="text-foreground-500 mb-8" {...props} />,
   strong: (props) => (
      <strong className="font-semibold text-foreground" {...props} />
   ),
   a: (props) => (
      <Link
         style={{
            fontSize: "20px",
            lineHeight: "28px",
         }}
         {...props}
      />
   ),
   ul: (props) => <ul className="list-disc" {...props} />,
   ol: (props) => <ol className="list-decimal" {...props} />,
   li: (props) => <li className="ml-4" {...props} />,
   blockquote: (props) => <Code as="blockquote" {...props} />,
   code: (props) => {
      const lang = props.className?.replace(/language-/, "");
      let content = props.children as string;
      let filename = content.split("\n").find((s) => s.startsWith("//! "));
      if (filename) {
         content = content.replace(filename + "\n", "");
         filename = filename.replace("//! ", "");
      }

      return (
         <CodeBlock filename={filename} code={content} lang={lang} {...props} />
      );
   },
};

export function useMDXComponents(oldComponents: MDXComponents) {
   return { ...oldComponents, ...components };
}

export function CustomMDX(props: MDXRemoteProps) {
   return (
      <MDXRemote
         {...props}
         components={{ ...components, ...(props.components || {}) }}
      />
   );
}
