"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";

import { FreeMode, Pagination, A11y, Navigation } from "swiper/modules";

import SlideNextButton from "./SwiperBtn";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const SliderData = [
  {
    image: "images/background_image.jpg",
    title: "General Donation",
    description:
      "To create a world where African women are formidable global leaders, transforming lives through technology, science, and innovation.",
  },
  {
    image: "images/background_image.jpg",
    title: "General Donation",
    description:
      "To create a world where African women are formidable global leaders, transforming lives through technology, science, and innovation.",
  },
  {
    image: "images/background_image.jpg",
    title: "General Donation",
    description:
      "To create a world where African women are formidable global leaders, transforming lives through technology, science, and innovation.",
  },
  {
    image: "images/background_image.jpg",
    title: "General Donation",
    description:
      "To create a world where African women are formidable global leaders, transforming lives through technology, science, and innovation.",
  },
  {
    image: "images/background_image.jpg",
    title: "General Donation",
    description:
      "To create a world where African women are formidable global leaders, transforming lives through technology, science, and innovation.",
  },
];

export default function SliderSection() {
  return (
    <Carousel
      opts={{
        align: "center",
      }}
      className="w-screen max-w-[250px] md:max-w-6xl mb-10"
    >
      <CarouselContent>
        {SliderData.map((item, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square w-full items-center justify-center p-6 relative overflow-clip">
                  {/* <div className="flex flex-col gap-6 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[400px] w-[80%] lg:h-[400px] lg:w-[350px] mb-10 ">
                    {/* <div className="absolute inset-0 bg-cover bg-center">
                <Image
                  src={item.image}
                  fill={true}
                  alt="hero Image"
                  className="object-cover w-full h-full"
                />
              </div> */}
                  {/* <div className="absolute inset-0 bg-cover bg-center z-10 p-5">
                      <p className="font-bold text-xl mb-3 lg:mb-5">
                        {item.title}
                      </p>
                      <p className="lg:text-base text-sm">{item.description}</p>
                    </div>
                    <div
                      className="absolute inset-0 bg-cover bg-center brightness-50 rounded-lg overflow-clip"
                      style={{ backgroundImage: `url(${item.image})` }}
                    />
                  </div> */}
                  <div className="w-full">
                    {" "}
                    <p className="font-bold text-xl mb-3 lg:mb-5">
                      {item.title}
                    </p>
                    <p className="lg:text-base text-sm">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
//  <div className="absolute inset-0 z-10 w-full h-full">
//    <div
//      className=" text-slate-500 cursor-pointer"
//      onClick={() => swiper.slideNext()}
//    >
//      <FaArrowAltCircleLeft size={50} color="red" />
//    </div>
//    <div className="" onClick={() => swiper.slidePrev()}>
//      <FaArrowAltCircleLeft size={30} />
//    </div>
//  </div>;
