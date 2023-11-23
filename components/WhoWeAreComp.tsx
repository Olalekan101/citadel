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
    <div className=" w-screen pt-20">
      <div className="flex justify-center items-start gap-4 maincontainer">
        <div className=" w-[50%] h-[600px] relative overflow-clip rounded-lg">
          <Image
            src={"/images/heroimage2.jpg"}
            fill={true}
            alt="hero Image"
            className="object-cover w-full h-full "
          />
        </div>
        <div className="w-[50%] flex flex-col justify-start items-center pt-4">
          <div className="">
            <div className="flex gap-2 items-center">
              <PiCastleTurretLight />
              <p className="font-bold">Welcome To Citedal</p>
            </div>
            <p className="text-4xl font-bold py-4">Who We Are</p>
            <p className="font-medium">
              WAAW (Working to Advance Science and Technology Education for
              African Women) Foundation is an international non-profit
              organization (501(c) EIN: 20-8576703) founded in 2007.
            </p>
          </div>
          <div className="grid grid-cols-2 ">
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
        </div>
      </div>
    </div>
  );
}
