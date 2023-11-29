import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import DesktopMenu from "./DesktopMenu";
import { RxHamburgerMenu } from "react-icons/rx";
import { MobileMenuDrawer } from "./MobileMenuDrawer";
import { getGoogleSheetsData } from "@/dbconnection/gsheet";
import { contactData } from "@/dbconnection/sheetQuery";

export function ContactComp({ title, contact, icon }: any) {
  let contactcheck = null;
  if (title.includes("Call Us")) {
    contactcheck = <a href={`tel:+${contact}`}>{contact}</a>;
  } else if (title.includes("Send Email")) {
    contactcheck = <a href={`mailto:+${contact}`}>{contact}</a>;
  } else contactcheck = <p>{contact}</p>;
  return (
    <>
      <div className="flex justify-center items-center h-full">{icon}</div>
      <div className="flex flex-col">
        <p>{title}</p>
        {contactcheck}
      </div>
    </>
  );
}

export function ContactCompMobile({ title, contact, icon }: any) {
  let contactcheck = null;
  if (title.includes("Call Us")) {
    contactcheck = <a href={`tel:+${contact}`}>{contact}</a>;
  } else if (title.includes("Send Email")) {
    contactcheck = <a href={`mailto:+${contact}`}>{contact}</a>;
  } else contactcheck = <p>{contact}</p>;
  return (
    <div className="flex justify-start items-center gap-2">
      <div className="">{icon}</div>
      <div className="flex">{contactcheck}</div>
    </div>
  );
}

export default async function NavBar() {
  const data = await contactData();

  const contact_data = [
    {
      title: "Call Us",
      icon: <FaPhoneAlt size={18} />,
      contact: data && data[0],
    },
    {
      title: "Send Email",
      icon: <MdEmail size={18} />,
      contact: data && data[1],
    },
    ,
    {
      title: "Address",
      icon: <FaLocationDot size={18} />,
      contact: data && data[2],
    },
  ];
  return (
    <header className="bg-foreground flex flex-col relative z-10 ">
      <div className="maincontainer flex flex-col justify-center items-center">
        <section className="  flex w-full relative pt-2 lg:pt-5">
          <div className="flex flex-col lg:flex justify-between items-start lg:items-center text-background w-full">
            <div className="order-1 w-full h-full ">
              <h1 className="text-2xl font-bold mt-4 lg:mt-0 hidden lg:block">
                TTcitadel
              </h1>
              <div className="flex justify-between w-full h-full items-center lg:hidden pt-4 pb-2">
                <div className="">
                  <h1 className="text-2xl font-bold ">TTCitadel</h1>
                </div>
                <MobileMenuDrawer />
              </div>
            </div>
            <div className="hidden lg:flex justify-center items-center gap-6">
              {contact_data.map((data, index) => (
                <ContactComp key={index} {...data} />
              ))}
            </div>
            <div className="block lg:hidden">
              {contact_data
                .filter((x) => !x?.title.includes("Address"))
                .map((data, index) => (
                  <ContactCompMobile key={index} {...data} />
                ))}
            </div>
          </div>
        </section>
        <div className=" hidden lg:block relative translate-y-1/2 bottom-0 w-full">
          <DesktopMenu />
        </div>
      </div>
    </header>
  );
}
