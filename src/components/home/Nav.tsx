"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export const Nav = () => {
  const sections = ["Home", "Skills", "Contact"];
  const controls = useAnimation();
  const [activeSection, setActiveSection] = useState(sections[0]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      void controls.start(currentScrollY > 100 ? { y: "-100%" } : { y: 0 });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0.01 },
    );

    sections.forEach((id) => {
      const el = document.querySelector(`#${id.toLowerCase()}`);
      if (el) observer.observe(el);
    });

    return () =>
      sections.forEach((id) => {
        const el = document.querySelector(`#${id.toLowerCase()}`);
        if (el) observer.unobserve(el);
      });
  }, []);

  return (
    <motion.nav
      className="fixed z-[500] hidden w-full justify-end space-x-4 bg-transparent py-4 pr-8 sm:flex"
      initial={{ y: 0 }}
      animate={controls}
      transition={{
        duration: 0.5,
        ease: "circInOut",
      }}
    >
      {sections.map((s) => (
        <NavLink
          key={s}
          name={s}
          activeSection={activeSection!.toLowerCase()}
        />
      ))}
    </motion.nav>
  );
};
export const NavLink = ({
  name,
  activeSection,
}: {
  name: string;
  activeSection: string;
}) => {
  console.log(activeSection);
  const router = useRouter();

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    event.preventDefault(); // Prevent the default anchor link behavior
    const section = document.querySelector(`#${name.toLowerCase()}`); // Find the section by ID

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      }); // Smooth scroll to the section
      router.push(`#${name.toLowerCase()}`, { scroll: true }); // Update the URL without triggering navigation
    }
  };

  return (
    <a href={`#${name.toLowerCase()}`} onMouseDown={handleClick}>
      <Button variant="link" active={activeSection === name}>
        {name}
      </Button>
    </a>
  );
};
