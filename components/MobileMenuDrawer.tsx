"use client";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import { whatwedolinks, aboutlinks } from "@/data/Urllinks";

export function MobileMenuDrawer() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <RxHamburgerMenu size={25} />
      </SheetTrigger>
      <SheetContent>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>About</AccordionTrigger>
            <AccordionContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                {aboutlinks.map((component) => (
                  <Link href={component.href}>
                    <li key={component.title} title={component.title}>
                      {component.title}
                    </li>
                  </Link>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>What We Do</AccordionTrigger>
            <AccordionContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                {whatwedolinks.map((component) => (
                  <Link href={component.href}>
                    <li key={component.title} title={component.title}>
                      {component.title}
                    </li>
                  </Link>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <Link href={"/"}>
              <p>Contact Us</p>
            </Link>
          </AccordionItem>
        </Accordion>
      </SheetContent>
    </Sheet>
  );
}
