import React from "react";
import { DonationBtn } from "./ButtonAction";

export default function DonateSection() {
  return (
    <div className="flex flex-col justify-center items-center maincontainer py-10 h-[300px] lg:h-[500px]">
      <div className="">
        <p className="lg:text-2xl text-xl text-white text-center">
          “Your gift empowers women in Africa to use technology to innovate and
          solve problems in their communities. We enable self-help, not aid. We
          fund change, not charity….”
        </p>
      </div>
      <div className="lg:py-10 py-5">
        <DonationBtn />
      </div>
    </div>
  );
}
