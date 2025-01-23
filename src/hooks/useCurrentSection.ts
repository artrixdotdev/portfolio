import { useState, useEffect, useCallback, useMemo } from "react";
import { useSections } from "@/hooks/useSections";

export function useCurrentSection() {
  const sections = useSections();
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  // Create refs for sections
  const sectionRefs = useMemo(
    () => sections.map((section) => document.getElementById(section.id)),
    [sections],
  );

  // Handle section change based on intersection
  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        // Find the index of the intersecting section
        const index = sectionRefs.findIndex(
          (ref) => ref?.id === entry.target.id,
        );

        // Check if more than 50% of the section is visible
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          setCurrentSectionIndex(index);
        }
      });
    },
    [sectionRefs],
  );

  // Set up Intersection Observer
  useEffect(() => {
    // Only set up if we have sections
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(handleIntersection, {
      root: null, // use viewport
      rootMargin: "0px",
      threshold: 0.5, // trigger when 50% of the target is visible
    });

    // Observe all section elements
    sectionRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    // Cleanup
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
