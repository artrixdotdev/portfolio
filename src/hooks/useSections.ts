import { useEffect, useState } from "react";
import * as Icons from "lucide-react";
import { IconSvgProps } from "@/types";

export type Section = {
  id: string;
  title: string;
  SectionIcon: React.FC<IconSvgProps>;
};

export function useSections() {
  const [sections, setSections] = useState<Section[]>([]);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const newSections = Array.from(sections).map((section) => {
      let _icons = Icons as any;
      return {
        id: section.id,
        title: section.title || section.id,
        SectionIcon: _icons[section.getAttribute("aria-label") as any],
      };
    });

    setSections(newSections);
  }, []);

  return sections;
}
