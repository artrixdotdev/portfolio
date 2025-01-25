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
    const handleLoad = () => {
      const sections = document.querySelectorAll("section");
      const newSections = Array.from(sections)
        .map((section) => {
          let _icons = Icons as any;
          const icon = section.getAttribute("aria-label") as any;
          if (!(icon in _icons)) {
            console.error(
              `Icon ${icon} (${section.title}#${section.id}) not found in lucide-react`,
            );
            return null;
          }
          return {
            id: section.id,
            title: section.title || section.id,
            SectionIcon: _icons[section.getAttribute("aria-label") as any],
          };
        })
        .filter((section) => section !== null);

      setSections(newSections);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("DOMContentLoaded", handleLoad);
      let timeout = setTimeout(handleLoad, 500);
      return () => {
        window.removeEventListener("DOMContentLoaded", handleLoad);
        clearTimeout(timeout);
      };
    }
  }, []);

  return sections;
}
