import React from "react";
import { DonationBtn } from "./ButtonAction";

export default function DonateSection() {
  return (
    <div className="flex flex-col justify-center items-center maincontainer py-10 h-[500px]">
      <div className="">
        <p className="text-2xl text-white text-center">
          “Your gift empowers women in Africa to use technology to innovate and
          solve problems in their communities. We enable self-help, not aid. We
          fund change, not charity….”
        </p>
      </div>
      <div className="py-10">
        <DonationBtn />
      </div>
    </div>
  );
}
