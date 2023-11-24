import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const socialLinks = [
  {
    icon: <FaFacebook size={25} />,
    link: "",
  },
  {
    icon: <FaInstagramSquare size={25} />,
    link: "",
  },
  {
    icon: <FaLinkedin size={25} />,
    link: "",
  },
];

export default function FixedSocialMediaBtn() {
  return (
    <section className="fixed top-0 right-0 translate-y-1/2 h-screen z-50">
      <div className=" flex flex-col gap-2 justify-center items-center bg-foreground px-3 py-5 rounded-l-lg text-white">
        {socialLinks.map((value, index) => (
          <a key={index} href={value.link}>
            {value.icon}
          </a>
        ))}
      </div>
    </section>
  );
}
