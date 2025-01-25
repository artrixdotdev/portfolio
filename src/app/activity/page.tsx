import { title } from "@/components/primitives";
import { Section } from "@/components/section";

export default function AboutPage() {
  return (
    <Section id="activity" title="Activity" icon="Activity" className="">
      <h1 className={title()}>Hello Stalker</h1>
    </Section>
  );
}
