"use client";

import * as React from "react";
import Link from "next/link";

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
import { whatwedolinks, aboutlinks } from "@/data/Urllinks";
import { Button } from "./ui/button";

import { useParams, usePathname } from "next/navigation";

const LinkBtn = ({ title, onClick, onMouseEnter, onMouseLeave }: any) => {
  return (
    <div
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className=" hover:cursor-pointer underline underline-offset-1 hover:opacity-60 transition-opacity delay-75 ease-in"
    >
      {title}
    </div>
  );
};

const ListBtnItems = ({ value, index }: any) => {
  return (
    <li key={index} className=" hover:underline">
      <Link href={value.href}>{value.title}</Link>
    </li>
  );
};

export function NavigationMenuDesktop() {
  const params = usePathname();
  console.log(JSON.stringify(params, null, 2), "params");
  console.log(params.length, "params");

  return (
    <section className="relative  gap-4 w-full flex justify-center items-center  ">
      <NavigationMenu className="text-foreground">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>About</NavigationMenuTrigger>
            <NavigationMenuContent className="bg-white text-foreground">
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] lg:w-[300px]">
                {aboutlinks?.map((component, index) => (
                  <ListBtnItems value={component} index={index} />
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>What We Do</NavigationMenuTrigger>
            <NavigationMenuContent className="bg-white text-foreground">
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] lg:w-[400px] ">
                {whatwedolinks?.map((component, index) => (
                  <ListBtnItems value={component} index={index} />
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {params.length === 1 && (
            <NavigationMenuItem>
              <a href="#howtohelp">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  How To Help
                </NavigationMenuLink>
              </a>
            </NavigationMenuItem>
          )}
          <NavigationMenuItem>
            <Link href="/contact" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Contact Us
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </section>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          {/* <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p> */}
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

//  <NavigationMenu className="z-20">
//       <NavigationMenuList>
//         <NavigationMenuItem>
//           <NavigationMenuTrigger>About</NavigationMenuTrigger>
//           <NavigationMenuContent>
//             <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
//               {aboutlinks?.map((component) => (
//                 <ListItem
//                   key={component.title}
//                   title={component.title}
//                   href={component.href}
//                 >
//                   {component.description}
//                 </ListItem>
//               ))}
//             </ul>
//           </NavigationMenuContent>
//         </NavigationMenuItem>
//         <NavigationMenuItem>
//           <NavigationMenuTrigger>What We Do</NavigationMenuTrigger>
//           <NavigationMenuContent>
//             <ul className="flex flex-col gap-2 px-4 py-2 ">
//               {whatwedolinks?.map((component) => (
//                 <li>
//                   <Link href={component.href}>{component.title}</Link>
//                 </li>
//               ))}
//             </ul>
//           </NavigationMenuContent>
//         </NavigationMenuItem>
//         <NavigationMenuItem>
//           <Link href="/docs" legacyBehavior passHref>
//             <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//               Contact Us
//             </NavigationMenuLink>
//           </Link>
//         </NavigationMenuItem>
//       </NavigationMenuList>
//     </NavigationMenu>

{
  /* <div className="w-full relative flex items-center justify-center">
        <div className=" flex relative justify-between items-center w-[50%]">
          <div className="relative w-full ">
            <LinkBtn title={"About"} />
            <div className="absolute translate-y-1/3 top-0 w-full">
              <ListBtnItems datax={aboutlinks} />
            </div>
          </div>
          <div className="relative w-full">
            <LinkBtn title={"Who we are"} />
            <div className="absolute translate-y-1/3 top-0 w-full">
              {/* <ListBtnItems datax={aboutlinks} /> */
}
//       </div>
//     </div>
//     <div className="relative w-full">
//       <LinkBtn title={"Contacts"} />
//       <div className="absolute translate-y-1/3 top-0 w-full">
//         {/* <ListBtnItems datax={aboutlinks} /> */}
//       </div>
//     </div>
//   </div>
// </div> */}
