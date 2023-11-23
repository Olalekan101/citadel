import HeroSection from "@/components/HeroSection";
import WhoWeAreComp from "@/components/WhoWeAreComp";

export default function Home() {
  return (
    <section className="  flex flex-col justify-start items-center w-full ">
      <HeroSection />
      <WhoWeAreComp />
    </section>
  );
}
