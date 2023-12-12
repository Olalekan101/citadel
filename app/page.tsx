"use client";
import DonateSection from "@/components/DonateSection";
import GallarySection from "@/components/GallarySection";
import HeroSection from "@/components/HeroSection";
import HowTOHelp from "@/components/HowTOHelp";
import Milestones from "@/components/Milestones";
import SliderSection from "@/components/SliderSection";
import WhoWeAreComp from "@/components/WhoWeAreComp";
import { useSheetQuery } from "@/store/sheetquery";
import { useEffect } from "react";
import { useQuery } from "react-query";

export default function Home() {
  const { setSheetData } = useSheetQuery();
  useQuery(["repoData"], () =>
    fetch("http://localhost:3000/api/gsheet/herosection")
      .then((res) => res.json())
      .then((res) => setSheetData(res))
  );

  return (
    <section className="  flex flex-col justify-start items-center w-full ">
      <HeroSection />
      <WhoWeAreComp />
      <Milestones />
      <DonateSection />
      <HowTOHelp />
      <SliderSection />
      <GallarySection />
    </section>
  );
}
