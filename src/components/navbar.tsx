import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Kbd } from "@heroui/kbd";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { siteConfig } from "@/config/site";
import { SearchIcon, LogoOutline, Logo } from "@/components/icons";
import {
  Dropdown,
  DropdownTrigger,
  DropdownItem,
  DropdownMenu,
} from "@heroui/dropdown";

export const Navbar = ({
  parentRef,
}: {
  parentRef?: React.RefObject<HTMLElement>;
}) => {
  const renderNavItem = (item: (typeof siteConfig.navItems)[number]) => {
    if (item.children) {
      return (
        <Dropdown key={item.href}>
          <DropdownTrigger>
            <NavbarItem>
              <div
                className={clsx(
                  linkStyles({ color: "foreground", underline: "hover" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium cursor-pointer",
                )}
              >
                {item.label}
              </div>
            </NavbarItem>
          </DropdownTrigger>
          <DropdownMenu>
            {item.children.map((child) => (
              <DropdownItem key={child.label}>
                <NextLink href={child.href}>{child.label}</NextLink>
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
          <NextLink className="flex justify-center items-center gap-2" href="/">
            <Logo />
            <p className="font-bold text-inherit hidden sm:block">artrix.dev</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="sm:flex basis-1/5 sm:basis-full" justify="end">
        <ul className="flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map(renderNavItem)}
        </ul>
      </NavbarContent>
      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navItems.length - 1
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
