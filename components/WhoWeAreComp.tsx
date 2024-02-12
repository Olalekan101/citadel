// "use client";
import React from "react";
import Image from "next/image";
import { PiCastleTurretLight } from "react-icons/pi";
import { PiCastleTurretFill } from "react-icons/pi";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LearnMoreBtn } from "./ButtonAction";
import { ContenfulProduct } from "@/dbconnection/contentfulCennection";
import { useQuery } from "react-query";

export default async function WhoWeAreComp() {
  const data = await ContenfulProduct();

  // const { data, isLoading, isError } = useQuery({
  //   queryKey: ["todos"],
  //   queryFn: async () => {
  //     const data = await ContenfulProduct();
  //     return data;
  //   },
  // });

  // if (isLoading) return;

  const imageurl = data?.map((value: any) => {
    return value.heroImage;
  });

  const contents = data
    ?.map((value: any) => {
      return [
        value.ourMission,
        value.ourValue,
        value.ourVision,
        value.whoWeAre,
      ];
    })
    .flat();
  console.log(contents, "us");

  const cardContents = [
    {
      title: "Our Mission",
      discription: contents && contents[0],
      items: null,
    },
    {
      title: "Our Vision",
      discription: contents && contents[2],
      items: null,
    },
    {
      title: "Our Values",
      discription: null,
      items: contents && contents[1],
    },
    // {
    //   title: "Our Values",
    //   discription: null,
    //   items: contents && contents[1].split(","),
    // },
  ];

  return (
    <div className=" w-screen pt:10 lg:pt-20 bg-background h-fit">
      <div className="flex flex-col lg:flex-row justify-center items-center h-full gap-4 maincontainer py-5">
        <div className=" order-1 lg:order-first w-full lg:w-[50%] h-[400px] lg:h-full relative overflow-clip rounded-lg ">
          <Image
            src={imageurl.join("")}
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
              {contents && contents[3]}
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 mt-5 ">
            {cardContents?.map((value, index) => (
              <div key={index} className="lg:last:col-span-2" id="two">
                <Card>
                  <CardHeader>
                    <CardTitle>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {value.discription && <p>{value.discription}</p>}
                    {value.items !== null && (
                      <p className="line-clamp-6 overflow-ellipsis">
                        {value.items}
                      </p>
                    )}
                    {/* {value.items !== null && (
                      <ul className="grid grid-cols-1 lg:grid-cols-2">
                        {value.items?.map((item: any, index: number) => (
                          <li
                            key={index}
                            className="flex gap-2 justify-start items-center "
                          >
                            <PiCastleTurretFill />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )} */}
                  </CardContent>
                </Card>
              </div>
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

{
  /* {cardContents.map((value, index) => (
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
            ))} */
}
