"use client";

import * as React from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
import { useEffect } from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import { useTranslations } from "next-intl";
import LocalSwitcher from "./local-switcher";

export default function NavbarMenu() {
  const t = useTranslations("Index");
  const localeActive = useLocale();

  const components: { title: string; href: string; description: string }[] = [
    {
      title: t("ourProducts"),
      href: `/${localeActive}`,
      description: t("descMenuProducts"),
    },
    {
      title: t("ourProducts"),
      href: `/${localeActive}`,
      description: t("descMenuProducts"),
    },
    {
      title: t("ourProducts"),
      href: `/${localeActive}`,
      description: t("descMenuProducts"),
    },
    {
      title: t("bestSeller"),
      href: `#products`,
      description: t("descMenuProducts"),
    },
  ];
  return (
    <NavigationMenu className="container pt-4">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>{t("company")}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href={`/${localeActive}`}
                  >
                    <Image
                      alt="nike"
                      src="/nike.png"
                      width={100}
                      height={100}
                    />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Alan Store
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      {t("slogan")}
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem>
                <Link href={`/${localeActive}/about`} legacyBehavior passHref>
                  <NavigationMenuLink className="underline p-2 font-bold flex justify-center items-center">
                    {t("about")}
                  </NavigationMenuLink>
                </Link>
              </ListItem>
              <ListItem>
                <Link href={`/${localeActive}/contact`} legacyBehavior passHref>
                  <NavigationMenuLink className="underline p-2 font-bold flex justify-center items-center">
                    {t("contact")}
                  </NavigationMenuLink>
                </Link>
              </ListItem>
              <ListItem>
                <Link href={`/${localeActive}/product`} legacyBehavior passHref>
                  <NavigationMenuLink className="underline p-2 font-bold flex justify-center items-center">
                    {t("ourProducts")}
                  </NavigationMenuLink>
                </Link>
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <LocalSwitcher />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
