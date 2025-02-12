import {
   AboutSection,
   BlogSection,
   ContactSection,
   IntroSection,
   ProjectsSection,
} from "@/components/home/sections";
import { GradiantBackground } from "@/components/radial-gradient";

export default async function Home() {
   return (
      <>
         <GradiantBackground />
         <IntroSection />
         <AboutSection />
         <ProjectsSection />
         <BlogSection />
         <ContactSection />
      </>
   );
}
