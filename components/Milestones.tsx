import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const milestoneData = [
  {
    discription: "Girls Impacted",
    number: 450,
  },
  {
    discription: "College Scholarships Awarded",
    number: 350,
  },
  {
    discription: "Youths Trained on Tech Skills",
    number: 190,
  },
];

const VideoCover = ({ children }: any) => {
  return <div className=" overflow-clip rounded-lg">{children}</div>;
};

export default function Milestones() {
  return (
    <div className=" w-screen bg-background lg:pt-10 lg:pb-20 pt:5 pb:10 ">
      <section className="maincontainer  ">
        <div className=" flex flex-col gap-2 justify-center items-center">
          <p>Lastest Causes</p>
          <p className="text-3xl font-bold">Milestones</p>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-start gap-2 mt-7">
          {milestoneData.map((value, index) => (
            <Card
              key={index}
              className="flex flex-col lg:w-fit w-full  justify-center items-center"
            >
              <CardHeader>
                <CardDescription>{value.discription}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold ">{value.number}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className=" w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 gap-2 mt-10 pb-10">
          <iframe
            src="https://www.youtube.com/embed/vSQjk9jKarg?si=SLHuauCJuH7gyyuQ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen={true}
            className="rounded-lg"
          ></iframe>

          <iframe
            src="https://www.youtube.com/embed/czjisEGe5Cw?si=SYmrhBJm6R00V489"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen={true}
            className="rounded-lg"
          ></iframe>

          <iframe
            src="https://www.youtube.com/embed/DxL2HoqLbyA?si=1F130Rn9QtBRIs3l"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen={true}
            className="rounded-lg"
          ></iframe>

          <iframe
            src="https://www.youtube.com/embed/vSQjk9jKarg?si=SLHuauCJuH7gyyuQ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen={true}
            className="rounded-lg"
          ></iframe>

          <iframe
            src="https://www.youtube.com/embed/czjisEGe5Cw?si=SYmrhBJm6R00V489"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen={true}
            className="rounded-lg"
          ></iframe>

          <iframe
            src="https://www.youtube.com/embed/DxL2HoqLbyA?si=1F130Rn9QtBRIs3l"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen={true}
            className="rounded-lg"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
