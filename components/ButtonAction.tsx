import React from "react";
import { BiSolidDonateHeart } from "react-icons/bi";
import { Button } from "./ui/button";
import { FaArrowAltCircleRight } from "react-icons/fa";
import Link from "next/link";

export function DonationBtn() {
  return (
    <Link href={"/donation"}>
      <Button className="flex justify-center items-center gap-2 bg-yellow-500 text-white hover:bg-yellow-300 font-bold ">
        <BiSolidDonateHeart />
        <p className="lg:text-base text-sm">Make a Donation</p>
      </Button>
    </Link>
  );
}

export function LearnMoreBtn() {
  return (
    <Link href={"/"}>
      <Button className="flex gap-2 text-lg px-4">
        <FaArrowAltCircleRight />
        <p className="lg:text-base text-sm">Learn More</p>
      </Button>
    </Link>
  );
}
