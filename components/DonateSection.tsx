"use client";
import { useEffect, useRef } from "react";
import React from "react";
import { DonationBtn } from "./ButtonAction";
import { motion, useAnimate, stagger, useInView } from "framer-motion";

export default function DonateSection() {
  const [scope, animate] = useAnimate();
  const isInview = useInView(scope);

  useEffect(() => {
    if (isInview) {
      const animation = async () => {
        await animate(
          "#one",
          { opacity: 1, y: 0 },
          { delay: stagger(0.1), duration: 0.3 }
        );
        await animate(
          "#button",
          { opacity: 1, y: 0 },
          { delay: 0.3, duration: 0.3 }
        );
      };
      animation();
    }
  }, [isInview]);

  const donationMsg =
    "“Your gift empowers women in Africa to use technology to innovate and solve problems in their communities. We enable self-help, not aid. We fund change, not charity….”";
  return (
    <div
      ref={scope}
      className="flex flex-col justify-center items-center maincontainer py-10 h-[300px] lg:h-[500px]"
    >
      <div className="">
        <p className="lg:text-2xl text-xl text-white text-center">
          {donationMsg.split(" ").map((value, index) => (
            <motion.span
              id="one"
              key={index}
              initial={{ opacity: 0, y: 10 }}
              className="inline-block"
            >
              {value}
              <span>&nbsp;</span>
            </motion.span>
          ))}
        </p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        id="button"
        className="lg:py-10 py-5"
      >
        <DonationBtn />
      </motion.div>
    </div>
  );
}
