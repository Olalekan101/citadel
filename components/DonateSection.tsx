// "use client";
import { useEffect, useRef } from "react";
import React from "react";
import { DonationBtn } from "./ButtonAction";
import { ContenfulProduct } from "@/dbconnection/contentfulCennection";
import { useQuery } from "react-query";

export default async function DonateSection() {
  const data = await ContenfulProduct();
  // const { data, isLoading, isError } = useQuery({
  //   queryKey: ["todos"],
  //   queryFn: async () => {
  //     const data = await ContenfulProduct();
  //     return data;
  //   },
  // });

  const donationMassage = data
    ?.map((value: any) => {
      return [value.donationMassage];
    })
    .flat();

  const donationMsg =
    "“Your gift empowers women in Africa to use technology to innovate and solve problems in their communities. We enable self-help, not aid. We fund change, not charity….”";
  return (
    <div
      // ref={scope}
      className="flex flex-col justify-center items-center maincontainer py-10 h-[300px] lg:h-[500px]"
    >
      <div className="">
        <p className="lg:text-2xl text-xl text-white text-center">
          {donationMassage && donationMassage}
          {/* {donationMsg.split(" ").map((value, index) => (
        
            <motion.span
              id="one"
              key={index}
              initial={{ opacity: 0, y: 10 }}
              className="inline-block"
            >
              {value}
              <span>&nbsp;</span>
            </motion.span>
          ))} */}
        </p>
      </div>
      <div id="button" className="lg:py-10 py-5">
        <DonationBtn />
      </div>
      {/* <motion.div
        initial={{ opacity: 0, y: 10 }}
        id="button"
        className="lg:py-10 py-5"
      >
        <DonationBtn />
      </motion.div> */}
    </div>
  );
}
