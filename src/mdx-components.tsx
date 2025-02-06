import { Code, Link } from "@heroui/react";
import { type MDXComponents } from "mdx/types";
import { Codeblock } from "./components/codeblock";

export const components: MDXComponents = {
  h1: (props) => <h1 className="text-4xl font-bold" {...props} />,
  h2: (props) => <h2 className="text-3xl font-bold" {...props} />,
  h3: (props) => <h3 className="text-2xl font-bold" {...props} />,
  h4: (props) => <h4 className="text-xl font-bold" {...props} />,
  h5: (props) => <h5 className="text-lg font-bold" {...props} />,
  h6: (props) => <h6 className="text-base font-bold" {...props} />,
  p: (props) => <p className="text-base" {...props} />,
  a: (props) => <Link {...props} />,
  ul: (props) => <ul className="list-disc" {...props} />,
  ol: (props) => <ol className="list-decimal" {...props} />,
  li: (props) => <li className="ml-4" {...props} />,
  blockquote: (props) => <Code as="blockquote" {...props} />,
  //code: (props) => <Codeblock {...props} />,
};

export function useMDXComponents(oldComponents: MDXComponents) {
  return { ...oldComponents, ...components };
}
