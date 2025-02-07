/**
 * @typedef {import('next').NextConfig} NextConfig
 * @typedef {Array<((config: NextConfig) => NextConfig)>} NextConfigPlugins
 */
import nextMDX from "@next/mdx";

/** @type {NextConfigPlugins} */
const plugins = [];

/** @type {NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   transpilePackages: ["three"],
   pageExtensions: ["md", "mdx", "tsx", "ts", "jsx", "js"],
};

plugins.push(
   nextMDX({
      extension: /\.(md|mdx)$/,
   }),
);

export default () => plugins.reduce((_, plugin) => plugin(_), nextConfig);
