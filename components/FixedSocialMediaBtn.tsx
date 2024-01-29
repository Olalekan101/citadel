import { ContenfulProduct } from "@/dbconnection/contentfulCennection";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

export default async function FixedSocialMediaBtn() {
  const datax = await ContenfulProduct();

  const data = datax
    .map((value: any) => {
      return [
        value.facebook,
        value.instagram,
        value.whatsapp,
        value.linkedin,
        value.youtube,
      ];
    })
    .flat();

  const ICONSIZE = 25;
  const socialLinks = [
    {
      icon: <FaFacebook size={ICONSIZE} />,
      link: data[0],
    },
    {
      icon: <FaInstagramSquare size={ICONSIZE} />,
      link: data[1],
    },
    {
      icon: <FaWhatsapp size={ICONSIZE} />,
      link: data[2],
    },
    {
      icon: <FaLinkedin size={ICONSIZE} />,
      link: data[3],
    },
    {
      icon: <FaYoutube size={ICONSIZE} />,
      link: data[4],
    },
  ];
  return (
    <section className="fixed top-0 right-0 translate-y-1/2 h-screen z-50 hidden lg:block">
      <div className=" flex flex-col gap-2 justify-center items-center bg-foreground px-3 py-5 rounded-l-lg text-white">
        {socialLinks.map((value, index) => (
          <a key={index} href={value.link} target="_blank">
            {value.icon}
          </a>
        ))}
      </div>
    </section>
  );
}
