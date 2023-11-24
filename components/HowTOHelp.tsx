import React from "react";
import { FaHandsHelping } from "react-icons/fa";
import Image from "next/image";
import { Button } from "./ui/button";
import { LearnMoreBtn } from "./ButtonAction";

const ICONVALUE = 50;

const howtohelpData = [
  {
    title: "Volunteer",
    discription:
      "Volunteers are critical to the mission and growth of WAAW Foundation. Much of our success is attributed to the countless hours contributed by our volunteers.",
    bgImage: "/images/background_image.jpg",
    overlaycolor: "bg-yellow-500/40",
    icon: <FaHandsHelping size={ICONVALUE} />,
  },
  {
    title: "Partners",
    discription:
      "Volunteers are critical to the mission and growth of WAAW Foundation. Much of our success is attributed to the countless hours contributed by our volunteers.",
    bgImage: "/images/background_image.jpg",
    overlaycolor: "bg-green-500/40",
    icon: <FaHandsHelping size={ICONVALUE} />,
  },
  {
    title: "Mentorship",
    discription:
      "Volunteers are critical to the mission and growth of WAAW Foundation. Much of our success is attributed to the countless hours contributed by our volunteers.",
    bgImage: "/images/background_image.jpg",
    overlaycolor: "bg-pink-500/40",
    icon: <FaHandsHelping size={ICONVALUE} />,
  },
];

function CardComp({ title, discription, bgImage, overlaycolor, icon }: any) {
  return (
    <div className="relative w-full h-full p-10 flex justify-center items-center">
      <div className="z-20 flex gap-4">
        <div className="text-white">{icon}</div>
        <div className="flex flex-col">
          <div className="text-white mb-5">
            <p className="text-2xl font-bold">{title}</p>
            <p className="mt-3">{discription}</p>
          </div>
          <LearnMoreBtn />
        </div>
      </div>
      <div className="absolute w-full h-full">
        <Image
          src={bgImage}
          fill={true}
          alt="hero Image"
          className="object-cover w-full h-full brightness-50 z-0"
        />
        <div
          className={`absolute top-0 z-10 w-full h-full ${overlaycolor} `}
        ></div>
      </div>
    </div>
  );
}

export default function HowTOHelp() {
  return (
    <section className="w-screen bg-background ">
      <div className=" py-20">
        <div className="w-full flex justify-center py-4">
          <p className="text-3xl font-extrabold">How To Help</p>
        </div>
        <div className="grid grid-cols-3">
          {howtohelpData.map((value, index) => (
            <CardComp key={index} {...value} />
          ))}
        </div>
      </div>
    </section>
  );
}
