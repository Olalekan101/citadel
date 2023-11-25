"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { GrGallery } from "react-icons/gr";
import { Button } from "./ui/button";

const GalleryData = [
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

export default function GallarySection() {
  return (
    <section className="w-screen bg-background lg:py-10 ">
      <div className="maincontainer">
        <div className="flex flex-col justify-center items-center my-5">
          <div className="">
            <p>Gallary</p>
          </div>
          <div className=" text-3xl lg:text-5xl font-bold my-4 text-center">
            <p>Together We Can Make A Difference</p>
          </div>
        </div>
        <div className=" grid grid-cols-2 lg:grid-cols-4 lg:gap-4 gap-2 w-fit mx-auto">
          {GalleryData.map((value, index) => (
            <div
              className=" hover:cursor-pointer  group relative shadow-lg text-white rounded-xl  h-[200px] w-[130px] lg:h-[250px] lg:w-[250px] "
              key={index}
            >
              <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 delay-100 duration-500 z-10">
                <p className="font-bold text-xl text-white">{value.title}</p>
              </div>
              <div
                className="absolute inset-0 bg-cover bg-center rounded-lg overflow-clip group-hover:brightness-50 group-hover:scale-110 transistion-transform duration-500 group-hover:hue-rotate-15"
                style={{ backgroundImage: `url(${value.image})` }}
              />
            </div>
          ))}
        </div>
        <div className="w-full py-5 flex justify-center items-center">
          <Link href={"/"}>
            <Button className="flex gap-2 justify-center items-center">
              <GrGallery />
              Gallary
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
