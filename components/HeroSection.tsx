import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { GiAfrica } from "react-icons/gi";
import { LearnMoreBtn } from "./ButtonAction";

const HeroImageBG = () => {
  return (
    <Image
      src={"/images/heroimage2.jpg"}
      fill={true}
      alt="hero Image"
      className="object-cover w-full h-full brightness-50"
    />
  );
};

export default function HeroSection() {
  return (
    <section className="w-screen h-[60vh] lg:h-[80vh] relative overflow-clip">
      <div className="flex flex-col justify-center items-center z-10 relative h-full">
        <div className="flex gap-2 justify-center items-center">
          <GiAfrica color={"white"} size={20} />
          <p className="text-white  ">Building African</p>
        </div>
        <div className=" flex flex-col justify-center items-center mt-2 mb-4">
          <p className=" text-2xl lg:text-5xl text-center font-bold text-white leading-snug">
            Building African Leaders And
            <br />
            Tech Innovators
          </p>
          <p className="text-white text-sm lg:base">
            Empowering African to Become Better Leaders
          </p>
        </div>
        <div className=" mt-5 lg:mt-10 ">
          <LearnMoreBtn />
        </div>
      </div>
      <HeroImageBG />
    </section>
  );
}
