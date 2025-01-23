import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon, Logo } from "@/components/icons";
import { OrbitingSpheres } from "@/components/sphere";

export default async function Home() {
  return (
    <>
      <section
        id="intro"
        title="Introduction"
        aria-label="Signature"
        className="flex flex-col items-center justify-center gap-4 py-8 md:py-10"
      >
        <OrbitingSpheres
          objects={[
            {
              mass: 30,
              volume: 30,
            },
            {
              mass: 3,
              volume: 3,
            },
          ]}
        />
      </section>
      <section
        id="projects"
        title="Projects"
        aria-label="Computer"
        className="h-screen"
      ></section>
    </>
  );
}
