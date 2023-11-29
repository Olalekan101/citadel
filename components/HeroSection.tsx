// "use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { GiAfrica } from "react-icons/gi";
import { LearnMoreBtn } from "./ButtonAction";
import { motion, useInView, useAnimate, stagger } from "framer-motion";
import { useQuery } from "react-query";
import { getGoogleSheetsData } from "@/dbconnection/gsheet";
import { getHeroTitle } from "@/dbconnection/sheetQuery";
import extractFileIdFromUrl from "@/functions/imageIdExtraction";

const HeroImageBG = ({ url }: any) => {
  return (
    <Image
      src={`${url}`}
      fill={true}
      alt="hero Image"
      className="object-cover w-full h-full brightness-50"
      // width={500}
      // height={500}
      priority={true}
    />
  );
};

const HeroTitle = "Building African Leaders And Tech Innovators";

export default async function HeroSection() {
  const range = `main!B2:B`;
  const rangeImages = `images!B2:B`;
  const data = await getGoogleSheetsData(range);
  const dataImages = await getGoogleSheetsData(rangeImages);
  const texts = data?.flatMap((x) => x.join(""));
  const heroImageextract = dataImages?.flatMap((x) => x.join("")) ?? [];
  const heroImage = heroImageextract[0]
    ? extractFileIdFromUrl(heroImageextract[0])
    : null;
  console.log(heroImage, "koko");
  // console.log(texts[0]);

  // const { isLoading, error, data } = useQuery(["repoData"], () =>
  //   fetch("http://localhost:3000/api/gsheet")
  //     .then((res) => res.json())
  //     .then((res) => res.map((x: any) => x))
  // );

  // useEffect(() => {
  //   const data = async () => {
  //     const data = await getHeroTitle();
  //     return data;
  //   };
  //   console.log(data);
  // }, []);

  // console.log(data[1].join(""), "hero");

  // const [scope, animate] = useAnimate();
  // const ref = useRef(null);
  // const isInView = useInView(ref, { amount: 0.5, once: true });
  // useEffect(() => {
  //   if (isLoading) {
  //     const animateFunction = async () => {
  //       await animate("#one", { opacity: 1, y: 0 });
  //       await animate(
  //         "#two",
  //         { opacity: 1, y: 0 },
  //         { delay: stagger(0.2), duration: 0.2 }
  //       );
  //       await animate(
  //         "#three",
  //         { opacity: 1, y: 0 },
  //         { delay: 0.2, duration: 0.3 }
  //       );
  //       await animate(
  //         "#four",
  //         { opacity: 1, y: 0 },
  //         { delay: 0.2, duration: 0.3 }
  //       );
  //     };
  //     animateFunction();
  //   }
  // }, [isLoading]);
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
      // ref={scope}
      className="w-screen h-[60vh] lg:h-[80vh] relative overflow-clip"
    >
      <div className="flex flex-col justify-center items-center z-10 relative h-full">
        <div
          // initial={{ opacity: 0, y: 10 }}
          id="one"
          className="flex gap-2 justify-center items-center"
        >
          <GiAfrica color={"white"} size={20} />
          <p className="text-white  ">{texts && texts[2]}</p>
        </div>
        <div className=" flex flex-col justify-center items-center mt-2 mb-4">
          {/* <span className=" text-2xl md:text-3xl lg:text-5xl text-center font-bold text-white leading-snug">
            {isLoading
              ? "loading"
              : data[1]
                  ?.join("")
                  .split(" ")
                  .map((value: any, index: number) => (
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
          </span> */}
          <span className=" text-2xl md:text-3xl lg:text-5xl text-center font-bold text-white leading-snug">
            {texts && texts[0]}
          </span>
          <p
            // initial={{ opacity: 0, y: 10 }}
            id="three"
            className="text-white text-sm lg:text-base mt-2"
          >
            {texts && texts[1]}
          </p>
        </div>
        <div
          id="four"
          // initial={{ opacity: 0, y: 10 }}
          className=" mt-5 lg:mt-10 "
        >
          <LearnMoreBtn />
        </div>
      </div>
      {heroImage ? (
        <HeroImageBG url={heroImage && heroImage} />
      ) : (
        <HeroImageBG url={"/images/heroimage2.jpg"} />
      )}
    </section>
  );
}
