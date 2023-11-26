"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { PiCastleTurretLight } from "react-icons/pi";
import { PiCastleTurretFill } from "react-icons/pi";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LearnMoreBtn } from "./ButtonAction";
import { motion, stagger, useAnimate, useInView } from "framer-motion";

const cardContents = [
  {
    title: "Our Mission",
    discription:
      "To empower African women and girls to become transformative leaders through STEM Education, Leadership, and Entrepreneurship training while making a significant impact on the world.",
    items: null,
  },
  {
    title: "Our Vision",
    discription:
      "To create a world where African women are formidable global leaders, transforming lives through technology, science, and innovation.",
    items: null,
  },
  {
    title: "Our Values",
    discription: null,
    items: [
      "Empowerment",
      "Creativity",
      "Growth-mindset",
      "Passion",
      "Transformative Leadership",
      "Accountability",
      "Localization",
      "Culture-Awareness",
    ],
  },
];

export default function WhoWeAreComp() {
  // const [scope, animate] = useAnimate();
  // const main = useRef(null);
  // const isInView = useInView(scope, {
  //   root: main,
  //   once: true,
  // });
  // console.log(isInView, "lolo");

  // useEffect(() => {
  //   if (isInView) {
  //     const animateFunction = async () => {
  //       // await animate("#one", { opacity: 1, y: 0 });
  //       await animate(
  //         "#two",
  //         { opacity: 1, y: 0 },
  //         { delay: stagger(0.2), duration: 0.4 }
  //       );
  //       //   await animate(
  //       //     "#three",
  //       //     { opacity: 1, y: 0 },
  //       //     { delay: 0.2, duration: 0.3 }
  //       //   );
  //       //   await animate(
  //       //     "#four",
  //       //     { opacity: 1, y: 0 },
  //       //     { delay: 0.2, duration: 0.3 }
  //       //   );
  //     };
  //     animateFunction();
  //   }
  // }, [isInView]);
  const animation = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,

      transition: {
        delay: 0.2 * index,
      },
    }),
  };
  return (
    <div className=" w-screen pt:10 lg:pt-20 bg-background h-fit">
      <div className="flex flex-col lg:flex-row justify-center items-center h-full gap-4 maincontainer py-5">
        <div className=" order-1 lg:order-first w-full lg:w-[50%] h-[400px] lg:h-full relative overflow-clip rounded-lg ">
          <Image
            src={"/images/heroimage2.jpg"}
            fill={true}
            alt="hero Image"
            className="object-cover w-full h-full hover:scale-125 transition-transform ease-in-out duration-1000 "
          />
        </div>
        <div className="w-full lg:w-[50%] flex flex-col justify-start items-center">
          <div className="">
            <div className="flex gap-2 items-center">
              <PiCastleTurretLight />
              <p className="font-bold">Welcome To TTCitadel</p>
            </div>
            <p className="lg:text-4xl text-3xl font-bold lg:py-4 py-2">
              Who We Are
            </p>
            <p className="font-medium text-slate-900">
              WAAW (Working to Advance Science and Technology Education for
              African Women) Foundation is an international non-profit
              organization (501(c) EIN: 20-8576703) founded in 2007.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 mt-5 ">
            {cardContents.map((value, index) => (
              <motion.div
                variants={animation}
                initial="hidden"
                whileInView={"animate"}
                viewport={{ once: true }}
                key={index}
                custom={index}
                className="lg:last:col-span-2"
                id="two"
              >
                <Card>
                  <CardHeader>
                    <CardTitle>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {value.discription && <p>{value.discription}</p>}
                    {value.items !== null && (
                      <ul className="grid grid-cols-1 lg:grid-cols-2">
                        {value.items?.map((item, index) => (
                          <li key={index} className="flex gap-2 ">
                            <PiCastleTurretFill />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className=" py-3 lg:py-5 justify-start w-full">
            <LearnMoreBtn />
          </div>
        </div>
      </div>
    </div>
  );
}
