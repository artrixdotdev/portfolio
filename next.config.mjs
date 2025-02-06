/**
 * @typedef {import('next').NextConfig} NextConfig
 * @typedef {Array<((config: NextConfig) => NextConfig)>} NextConfigPlugins
 */
import nextMDX from "@next/mdx";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";

/** @type {NextConfigPlugins} */
const plugins = [];

/** @type {NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   transpilePackages: ["three"],
   pageExtensions: ["md", "mdx", "tsx", "ts", "jsx", "js"],
};

/** @type {import('rehype-pretty-code').Options} */
const options = {
   keepBackground: false,
   theme: {
      dark: "material-theme-ocean",
      light: "github-light",
   },
};

plugins.push(
   nextMDX({
      extension: /\.(md|mdx)$/,
      options: {
         remarkPlugins: [],
         rehypePlugins: [[rehypePrettyCode, options], rehypeSlug],
      },
   }),
);

export default () => plugins.reduce((_, plugin) => plugin(_), nextConfig);
