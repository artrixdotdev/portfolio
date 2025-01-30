import { getContributions } from "@/lib/github";
import { title } from "@/components/primitives";
import { Section } from "@/components/section";
import { GithubContributionsGraph } from "@/components/activity/github-graphs";
import { Button } from "@heroui/button";
import { BentoBox, BentoGrid, BentoSizes } from "@/components/bento";
export default async function AboutPage() {
  const items = (
    ["wide", "tall", "compact", "compact", "compact", "compact"] as BentoSizes[]
  ).map((s, _) => [`test${_}`, s] as const);
  return (
    <Section
      id="activity"
      title="Activity"
      icon="Activity"
      className="mt-20 justify-items-center items-center"
    >
      <BentoGrid
        name="activity-bento"
        items={items.map(([id]) => id)}
        className="min-h-screen"
      >
        {items.map(([id, size]) => (
          <BentoBox className="border" key={id} id={id} size={size}>
            {id}
          </BentoBox>
        ))}
      </BentoGrid>
    </Section>
  );
}
