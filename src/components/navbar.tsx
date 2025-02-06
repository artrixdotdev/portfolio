"use client";
import {
   Navbar as HeroUINavbar,
   NavbarContent,
   NavbarMenu,
   NavbarMenuToggle,
   NavbarBrand,
   NavbarItem,
   NavbarMenuItem,
} from "@heroui/react";
import { Kbd } from "@heroui/react";
import { Link } from "@heroui/react";
import { Input } from "@heroui/react";
import { link as linkStyles } from "@heroui/react";
import NextLink from "next/link";
import clsx from "clsx";
import { SITE_CONFIG } from "@/config/site";
import {
   SearchIcon,
   LogoOutline,
   Logo,
   ArrowRightIcon,
} from "@/components/icons";
import {
   Dropdown,
   DropdownTrigger,
   DropdownItem,
   DropdownMenu,
} from "@heroui/react";
import { useRouter } from "next/navigation";

export const Navbar = ({
   parentRef,
}: {
   parentRef?: React.RefObject<HTMLElement>;
}) => {
   const router = useRouter();
   const renderNavItem = (item: (typeof SITE_CONFIG.navItems)[number]) => {
      if (item.children) {
         return (
            <Dropdown key={item.href}>
               <DropdownTrigger>
                  <NavbarItem>
                     <div
                        className={clsx(
                           linkStyles({
                              color: "foreground",
                              underline: "hover",
                           }),
                           "data-[active=true]:text-primary data-[active=true]:font-medium cursor-pointer",
                        )}
                     >
                        {item.label}
                     </div>
                  </NavbarItem>
               </DropdownTrigger>
               <DropdownMenu>
                  {item.children.map((child) => (
                     <DropdownItem
                        className="rounded-md"
                        startContent={child.icon}
                        endContent={
                           typeof child.endContent === "function" ? (
                              // @ts-ignore
                              <child.endContent />
                           ) : (
                              child.endContent
                           )
                        }
                        description={child.description}
                        key={child.label}
                        href={child.href}
                        onClick={() =>
                           child.href.startsWith("/")
                              ? router.push(child.href)
                              : window.open(child.href, "_blank")
                        } // Workaround bc heroui is bugged
                        target="_blank"
                     >
                        {child.label}
                     </DropdownItem>
                  ))}
               </DropdownMenu>
            </Dropdown>
         );
      }

      return (
         <NavbarItem key={item.href}>
            <NextLink
               href={item.href}
               className={clsx(
                  linkStyles({ color: "foreground", underline: "hover" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
               )}
            >
               {item.label}
            </NextLink>
         </NavbarItem>
      );
   };

   return (
      <HeroUINavbar
         shouldHideOnScroll
         className="bg-transparent"
         maxWidth="xl"
         parentRef={parentRef}
         position="sticky"
      >
         <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
            <NavbarBrand as="li" className="gap-3 max-w-fit">
               <NextLink
                  className="flex justify-center items-center gap-2"
                  href="/"
               >
                  <Logo />
                  <p className="font-bold text-inherit hidden sm:block">
                     artrix.dev
                  </p>
               </NextLink>
            </NavbarBrand>
         </NavbarContent>
         <NavbarContent
            className="sm:flex basis-1/5 sm:basis-full"
            justify="end"
         >
            <ul className="flex gap-4 justify-start ml-2">
               {SITE_CONFIG.navItems.map(renderNavItem)}
            </ul>
         </NavbarContent>
         <NavbarMenu>
            <div className="mx-4 mt-2 flex flex-col gap-2">
               {SITE_CONFIG.navItems.map((item, index) => (
                  <NavbarMenuItem key={`${item}-${index}`}>
                     <Link
                        color={
                           index === 2
                              ? "primary"
                              : index === SITE_CONFIG.navItems.length - 1
                                ? "danger"
                                : "foreground"
                        }
                        href={item.href}
                        size="lg"
                     >
                        {item.label}
                     </Link>
                  </NavbarMenuItem>
               ))}
            </div>
         </NavbarMenu>
      </HeroUINavbar>
   );
};
