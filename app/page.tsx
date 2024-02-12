import DonateSection from "@/components/DonateSection";
import GallarySection from "@/components/GallarySection";
import HeroSection from "@/components/HeroSection";
import HowTOHelp from "@/components/HowTOHelp";
import Milestones from "@/components/Milestones";
import SliderSection from "@/components/SliderSection";
import WhoWeAreComp from "@/components/WhoWeAreComp";

export const revalidate = 60;

export default async function Home() {
  return (
    <section className="  flex flex-col justify-start items-center w-full ">
      <HeroSection />
      <WhoWeAreComp />
      <Milestones />
      <DonateSection />
      {/* <HowTOHelp /> */}
      <SliderSection />
      <GallarySection />
    </section>
  );
}
