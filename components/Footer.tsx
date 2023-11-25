import React from "react";
import { DonationBtn } from "./ButtonAction";

export default function Footer() {
  return (
    <footer className="w-full bg-slate-900/70">
      <section className="maincontainer flex flex-col py-10 text-white">
        <div className="flex justify-center items-center">
          <div className="flex flex-col gap-4 ">
            <div className="">
              <h1 className="text-2xl font-bold">TTcitadel</h1>
            </div>
            <div className="">
              <p>
                Empowering African Women to become impactful leaders to benefit
                Africa through experiential STEM Education, Leadership and
                Entrepreneurship Training.
              </p>
            </div>
            <DonationBtn />
          </div>
          <div className="flex gap-2"></div>
        </div>
      </section>
    </footer>
  );
}
