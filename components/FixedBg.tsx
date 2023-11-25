import React from "react";
import Image from "next/image";

export default function FixedBg() {
  return (
    <div className="fixed h-screen w-screen top-0 -z-10">
      <Image
        src={"/images/background_image.jpg"}
        fill={true}
        alt="hero Image"
        className="object-cover lg:object-cover w-full h-full brightness-50"
      />
    </div>
  );
}
