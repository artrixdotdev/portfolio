import { useCallback, useEffect, useState } from "react";
import { useSections } from "./useSections";

export function useCurrentSection() {
  const sections = useSections();
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [sectionRefs, setSectionRefs] = useState<(HTMLElement | null)[]>([]);

  // Update refs when sections change or when DOM updates
  useEffect(() => {
    const updateRefs = () => {
      const newRefs = sections.map((section) =>
        document.getElementById(section.id),
      );
      setSectionRefs(newRefs);
    };

    updateRefs();

    // Set up a MutationObserver to watch for DOM changes
    const observer = new MutationObserver(updateRefs);

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, [sections]);

  // Handle section change based on intersection
  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const index = sectionRefs.findIndex(
          (ref) => ref?.id === entry.target.id,
        );

        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          setCurrentSectionIndex(index);
        }
      });
    },
    [sectionRefs],
  );

  // Set up Intersection Observer
  useEffect(() => {
    if (sections.length === 0 || sectionRefs.length === 0) return;

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    });

    sectionRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [sections, handleIntersection, sectionRefs]);

  return {
    currentSectionIndex,
    currentSection: sections[currentSectionIndex] || null,
    sections,
    sectionRefs,
  };
}
