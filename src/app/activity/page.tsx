import { getContributions } from "@/lib/github";
import { title } from "@/components/primitives";
import { Section } from "@/components/section";
import { GithubContributionsGraph } from "@/components/activity/github-graphs";
import { Button } from "@heroui/button";
import { BentoBox, BentoGrid } from "@/components/bento";
export default async function AboutPage() {
  return (
    <Section
      id="activity"
      title="Activity"
      icon="Activity"
      className="mt-20 justify-items-center items-center"
    >
      <BentoGrid className="min-h-screen">
        <BentoBox size="wide">Be</BentoBox>
        <BentoBox size="wide">Be</BentoBox>
        <BentoBox size="compact">Bye</BentoBox>
        <BentoBox size="compact">HI</BentoBox>
        <BentoBox size="tall">Hi</BentoBox>
        <BentoBox size="canvas">Hi</BentoBox>
      </BentoGrid>
    </Section>
  );
}
