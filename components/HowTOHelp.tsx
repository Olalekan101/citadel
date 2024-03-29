import React from "react";
import { FaHandsHelping } from "react-icons/fa";
import Image from "next/image";
import { Button } from "./ui/button";
import { LearnMoreBtn } from "./ButtonAction";
import { useSheetQuery } from "@/store/sheetquery";

const ICONVALUE = 50;

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
  // const howToHelpx = (await howToHelp()) ?? [];
  // const { sheetdata } = useSheetQuery();
  // const howToHelpx = sheetdata.slice(25);
  // console.log(howToHelpx, "howToHelpx");

  // const howtohelpData = [
  //   {
  //     title: "Volunteer",
  //     discription: howToHelpx[0],
  //     bgImage: "/images/background_image.jpg",
  //     overlaycolor: "bg-yellow-500/40",
  //     icon: <FaHandsHelping size={ICONVALUE} />,
  //   },
  //   {
  //     title: "Partners",
  //     discription: howToHelpx[1],
  //     bgImage: "/images/background_image.jpg",
  //     overlaycolor: "bg-green-500/40",
  //     icon: <FaHandsHelping size={ICONVALUE} />,
  //   },
  //   {
  //     title: "Mentorship",
  //     discription: howToHelpx[2],
  //     bgImage: "/images/background_image.jpg",
  //     overlaycolor: "bg-pink-500/40",
  //     icon: <FaHandsHelping size={ICONVALUE} />,
  //   },
  // ];

  return (
    <section id="howtohelp" className="w-screen bg-background ">
      <div className="py-5 lg:py-20">
        <div className="w-full flex justify-center py-4">
          <p className="text-3xl font-extrabold">How To Help</p>
        </div>
        {/* <div className="grid grid-cols-1 lg:grid-cols-3">
          {howtohelpData.map((value, index) => (
            <CardComp key={index} {...value} />
          ))}
        </div> */}
      </div>
    </section>
  );
}
