import React from "react";
import { DonationBtn } from "./ButtonAction";
import Link from "next/link";
import { whatwedolinks } from "@/data/Urllinks";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { ContactCompMobile } from "./NavBar";
import { useSheetQuery } from "@/store/sheetquery";
import { ContenfulProduct } from "@/dbconnection/contentfulCennection";

export default async function Footer() {
  const data = await ContenfulProduct();
  const contacts = data
    .map((value: any) => {
      return [value.phoneNumber, value.email, value.address, value.whoWeAre];
    })
    .flat();

  const contact_data = [
    {
      title: "Call Us",
      icon: <FaPhoneAlt size={18} />,
      contact: data && contacts[0],
    },
    {
      title: "Send Email",
      icon: <MdEmail size={18} />,
      contact: data && contacts[1],
    },
    ,
    {
      title: "Address",
      icon: <FaLocationDot size={18} />,
      contact: data && contacts[2],
    },
  ];
  return (
    <footer className="w-full bg-slate-900/70">
      <section className="maincontainer flex flex-col py-10 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-4 gap-4">
          <div className="flex flex-col gap-4 ">
            <div className="">
              <h1 className="text-2xl font-bold">TTcitadel</h1>
            </div>
            <div className="">
              <p>{data && contacts[3]}</p>
            </div>
            <DonationBtn />
          </div>
          <div className="flex flex-col gap-2">
            <div className="">
              <h1 className="text-xl font-bold">Explore</h1>
            </div>
            <div className="">
              <ul className="flex flex-col gap-2 ">
                {whatwedolinks.map((value, index) => (
                  <li
                    key={index}
                    className="brightness-75 hover:brightness-100 transition-transform ease-in-out"
                  >
                    <Link href={value.href}>{value.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="">
              <h1 className="text-xl font-bold">Contact</h1>
            </div>
            <div className=" flex flex-col gap-2 ">
              {contact_data.map((data, index) => (
                <ContactCompMobile key={index} {...data} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
