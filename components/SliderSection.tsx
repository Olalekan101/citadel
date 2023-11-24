"use client";
import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";

import { FreeMode, Pagination, A11y, Navigation } from "swiper/modules";
import Image from "next/image";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import SlideNextButton from "./SwiperBtn";

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
  const swiper = useSwiper();

  return (
    <section className="w-screen bg-background py-10 flex">
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 8,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 8,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        navigation
        modules={[FreeMode, Pagination, A11y, Navigation]}
        className="max-w-[50%] lg:max-w-[80%] "
      >
        {SliderData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col gap-6 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[250px] lg:h-[400px] lg:w-[350px] mb-10 ">
              {/* <div className="absolute inset-0 bg-cover bg-center">
                <Image
                  src={item.image}
                  fill={true}
                  alt="hero Image"
                  className="object-cover w-full h-full"
                />
              </div> */}
              <div className="absolute inset-0 bg-cover bg-center z-10 p-5">
                <p className="font-bold text-xl mb-5">{item.title}</p>
                <p>{item.description}</p>
              </div>
              <div
                className="absolute inset-0 bg-cover bg-center brightness-50 rounded-lg overflow-clip"
                style={{ backgroundImage: `url(${item.image})` }}
              />
            </div>
          </SwiperSlide>
        ))}
        <SlideNextButton />
      </Swiper>
    </section>
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