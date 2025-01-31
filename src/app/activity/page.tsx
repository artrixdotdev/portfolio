import { getContributions } from "@/lib/github";
import { title } from "@/components/primitives";
import { Section } from "@/components/section";
import { GithubContributionsGraph } from "@/components/activity/github-graphs";
import { Button } from "@heroui/button";
import { BentoBox, BentoGrid, BentoSizes } from "@/components/bento";
import { DiscordBento } from "@/components/activity/boxes/discord";

export default async function AboutPage() {
  const bentos = [DiscordBento];
  console.log(bentos.map(([Bento, { label }]) => <Bento key={label} />));
  return (
    <Section
      id="activity"
      title="Activity"
      icon="Activity"
      className="mt-20 justify-items-center items-center"
    >
      <BentoGrid
        name="activity-bento"
        items={bentos.map(([_, { label }]) => label)}
        className="min-h-screen"
      >
        <BentoBox size="compact" id="discord">
          Hi
        </BentoBox>
      </BentoGrid>
    </Section>
  );
}
