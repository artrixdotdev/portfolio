import { getContributions } from "@/lib/github";
import { title } from "@/components/primitives";
import { Section } from "@/components/section";
import { GithubContributionsGraph } from "@/components/activity/github-graphs";

export default async function AboutPage() {
  return (
    <Section id="activity" title="Activity" icon="Activity" className="">
      <GithubContributionsGraph />
      <h1 className={title()}>Hello Stalker</h1>
    </Section>
  );
}
