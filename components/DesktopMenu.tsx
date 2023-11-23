import React from "react";
import { Button } from "@/components/ui/button";
import { BiSolidDonateHeart } from "react-icons/bi";
import { NavigationMenuDesktop } from "./Menu";

export default function DesktopMenu() {
  return (
    <section className="maincontainer py-0 z-20 ">
      <div className="flex justify-between items-center border-background bg-purple-900  py-5 rounded-lg px-7 ">
        <NavigationMenuDesktop />
        <Button className="flex justify-center items-center gap-2 bg-yellow-500 text-white hover:bg-yellow-300  ">
          <BiSolidDonateHeart />
          <span>Make a Donation</span>
        </Button>
      </div>
    </section>
  );
}
