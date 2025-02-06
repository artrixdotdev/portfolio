import { useEffect, useState, useCallback, useRef } from "react";
import * as Icons from "lucide-react";
import { IconSvgProps } from "@/types";
import { usePathname, useSearchParams } from "next/navigation";

export type Section = {
   id: string;
   title: string;
   SectionIcon: React.FC<IconSvgProps>;
};

export function useSections() {
   const [sections, setSections] = useState<Section[]>([]);
   const pathname = usePathname();

   const handleSections = () => {
      console.log("handleSections");
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
         .filter((section): section is Section => section !== null);

      setSections(newSections);
   };

   useEffect(() => {
      // Create a MutationObserver to watch for DOM changes
      const observer = new MutationObserver(handleSections);

      // Start observing the document with configured parameters
      observer.observe(document.body, {
         childList: true,
         subtree: true,
      });

      // Initial load
      observer.takeRecords();
      return () => observer.disconnect();
   }, [pathname]);

   return sections;
}
