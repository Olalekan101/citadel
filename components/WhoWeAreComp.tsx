import React from "react";
import Image from "next/image";
import { PiCastleTurretLight } from "react-icons/pi";
import { PiCastleTurretFill } from "react-icons/pi";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Button } from "./ui/button";

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
  return (
    <div className=" w-screen pt-20 bg-background">
      <div className="flex justify-center items-center h-full gap-4 maincontainer py-5">
        <div className=" w-[50%] h-full relative overflow-clip rounded-lg">
          <Image
            src={"/images/heroimage2.jpg"}
            fill={true}
            alt="hero Image"
            className="object-cover w-full h-full hover:scale-125 transition-transform ease-in-out duration-1000 "
          />
        </div>
        <div className="w-[50%] flex flex-col justify-start items-center">
          <div className="">
            <div className="flex gap-2 items-center">
              <PiCastleTurretLight />
              <p className="font-bold">Welcome To Citadel</p>
            </div>
            <p className="text-4xl font-bold py-4">Who We Are</p>
            <p className="font-medium text-slate-900">
              WAAW (Working to Advance Science and Technology Education for
              African Women) Foundation is an international non-profit
              organization (501(c) EIN: 20-8576703) founded in 2007.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-5 ">
            {cardContents.map((value, index) => (
              <Card key={index} className="last:col-span-2">
                <CardHeader>
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  {value.discription && <p>{value.discription}</p>}
                  {value.items !== null && (
                    <ul className="grid grid-cols-2">
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
            ))}
          </div>
          <div className=" py-5 justify-start w-full">
            <Button className="flex gap-2 text-lg">
              <FaArrowAltCircleRight />
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}