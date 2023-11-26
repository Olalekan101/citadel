"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { GiAfrica } from "react-icons/gi";
import { LearnMoreBtn } from "./ButtonAction";
import { motion, useInView, useAnimate, stagger } from "framer-motion";

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

const HeroTitle = "Building African Leaders And Tech Innovators";

export default function HeroSection() {
  const [scope, animate] = useAnimate();
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });
  useEffect(() => {
    const animateFunction = async () => {
      await animate("#one", { opacity: 1, y: 0 });
      await animate(
        "#two",
        { opacity: 1, y: 0 },
        { delay: stagger(0.2), duration: 0.4 }
      );
      await animate(
        "#three",
        { opacity: 1, y: 0 },
        { delay: 0.2, duration: 0.3 }
      );
      await animate(
        "#four",
        { opacity: 1, y: 0 },
        { delay: 0.2, duration: 0.3 }
      );
    };
    animateFunction();
  }, []);
  // const initialAnimation = {
  //   initial: {
  //     opacity: 0,
  //     y: 20,
  //   },
  //   animate: {
  //     opacity: 1,
  //     y: 0,
  //   },
  // };
  return (
    <section
      ref={scope}
      className="w-screen h-[60vh] lg:h-[80vh] relative overflow-clip"
    >
      <div className="flex flex-col justify-center items-center z-10 relative h-full">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          id="one"
          className="flex gap-2 justify-center items-center"
        >
          <GiAfrica color={"white"} size={20} />
          <p className="text-white  ">Building African</p>
        </motion.div>
        <div className=" flex flex-col justify-center items-center mt-2 mb-4">
          <motion.span className=" text-2xl md:text-3xl lg:text-5xl text-center font-bold text-white leading-snug">
            {HeroTitle.split(" ").map((value, index) => (
              <motion.span
                id="two"
                key={index}
                initial={{ opacity: 0, y: 10 }}
                className="inline-block"
              >
                {value}
                <span className="inline-block">&nbsp;</span>
              </motion.span>
            ))}
          </motion.span>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            id="three"
            className="text-white text-sm lg:text-base mt-2"
          >
            Empowering African to Become Better Leaders
          </motion.p>
        </div>
        <motion.div
          id="four"
          initial={{ opacity: 0, y: 10 }}
          className=" mt-5 lg:mt-10 "
        >
          <LearnMoreBtn />
        </motion.div>
      </div>
      <HeroImageBG />
    </section>
  );
}
