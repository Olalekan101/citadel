import React from "react";
import Image from "next/image";
import { GiAfrica } from "react-icons/gi";
import { LearnMoreBtn } from "./ButtonAction";
import { ContenfulProduct } from "@/dbconnection/contentfulCennection";

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
  const data = await ContenfulProduct();

  const imageurl = data.map((value: any) => {
    return value.heroImage;
  });

  console.log(data, "pklklklk");

  return (
    <section
      // ref={scope}
      className="w-screen h-[60vh] lg:h-[80vh] relative overflow-clip"
    >
      {data.map((value: any, index: any) => (
        <div
          key={index}
          className="flex flex-col justify-center items-center z-10 relative h-full"
        >
          <div
            // initial={{ opacity: 0, y: 10 }}
            id="one"
            className="flex gap-2 justify-center items-center"
          >
            <GiAfrica color={"white"} size={20} />
            <p className="text-white  ">{value && value.heroMassage}</p>
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
              {value && value.heroTitle}
            </span>
            <p
              // initial={{ opacity: 0, y: 10 }}
              id="three"
              className="text-white text-sm lg:text-base mt-2"
            >
              {value && value.herpSubTitle}
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
      ))}
      {data && <HeroImageBG url={imageurl.join("")} />}
    </section>
  );
}
