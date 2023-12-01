import React from "react";
import { Button } from "@/components/ui/button";
import { BiSolidDonateHeart } from "react-icons/bi";
import { NavigationMenuDesktop } from "./NavigationMenuDesktop";
import { DonationBtn } from "./ButtonAction";

export default function DesktopMenu() {
  return (
    <section className="w-full flex ">
      <div className="flex w-full justify-around items-center ">
        <NavigationMenuDesktop />
        <DonationBtn />
      </div>
    </section>
  );
}
