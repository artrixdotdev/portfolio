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
      const sections = pathname.includes("/blog")
         ? (document.querySelectorAll(
              "article h2",
           ) as NodeListOf<HTMLHeadingElement>)
         : (document.querySelectorAll("section") as NodeListOf<HTMLDivElement>);
      const newSections = Array.from(sections)
         .map((section: HTMLSelectElement | HTMLHeadingElement) => {
            let _icons = Icons as any;
            const icon = section.getAttribute("aria-label") as any;
            const title =
               section.nodeName.startsWith("H") && section.innerText
                  ? section.innerText
                  : section?.title || section.id;
            if (!(icon in _icons)) {
               console.warn(
                  `Icon ${icon} (${title}#${section.id}) not found in lucide-react`,
               );
            }

            if (!section.id && !section) return null;
            return {
               id: section.id,
               title,
               SectionIcon: icon
                  ? _icons[section.getAttribute("aria-label") as any]
                  : () => null,
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
