import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import DesktopMenu from "./DesktopMenu";

const contact_data = [
  {
    title: "Call at anytime",
    contact: "07010174548",
    icon: <FaPhoneAlt size={18} />,
  },
  {
    title: "Send Email",
    contact: "test@gmail.com",
    icon: <MdEmail size={18} />,
  },
  ,
  {
    title: "Address",
    contact: "Warri,Delta State",
    icon: <FaLocationDot size={18} />,
  },
];

function ContactComp({ title, contact, icon }: any) {
  return (
    <div className="flex justify-center items-center gap-6">
      <div className="flex justify-center items-center h-full">{icon}</div>
      <div className="flex flex-col">
        <p>{title}</p>
        <p>{contact}</p>
      </div>
    </div>
  );
}

export default function NavBar() {
  return (
    <header className="bg-foreground flex flex-col relative z-10 ">
      <div className="maincontainer flex flex-col justify-center items-center">
        <section className="  flex w-full relative pt-5">
          <div className="flex justify-between items-center text-background w-full">
            <div className="">
              <h1 className="text-2xl font-bold">Citadel</h1>
            </div>
            {contact_data.map((data, index) => (
              <ContactComp key={index} {...data} />
            ))}
          </div>
        </section>
        <div className="relative translate-y-1/2 bottom-0 w-full">
          <DesktopMenu />
        </div>
      </div>
    </header>
  );
}
