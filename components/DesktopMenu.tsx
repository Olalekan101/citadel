import React from "react";
import { Button } from "@/components/ui/button";
import { BiSolidDonateHeart } from "react-icons/bi";
import { NavigationMenuDesktop } from "./Menu";
import { DonationBtn } from "./ButtonAction";

export default function DesktopMenu() {
  return (
    <section className="maincontainer py-0 z-20 ">
      <div className="flex justify-between items-center border-background bg-purple-900  py-5 rounded-lg px-7 ">
        <NavigationMenuDesktop />
        <DonationBtn />
      </div>
    </section>
  );
}
