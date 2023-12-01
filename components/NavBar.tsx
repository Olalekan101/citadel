import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import DesktopMenu from "./DesktopMenu";
import { RxHamburgerMenu } from "react-icons/rx";
import { MobileMenuDrawer } from "./MobileMenuDrawer";
import { getGoogleSheetsData } from "@/dbconnection/gsheet";
import { contactData } from "@/dbconnection/sheetQuery";
import Link from "next/link";

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
      <div className="flex flex-col text-sm">
        {/* <p>{title}</p> */}
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

  const SIZE = 12;

  const contact_data = [
    {
      title: "Call Us",
      icon: <FaPhoneAlt size={SIZE} />,
      contact: data && data[0],
    },
    {
      title: "Send Email",
      icon: <MdEmail size={SIZE} />,
      contact: data && data[1],
    },
    ,
    {
      title: "Address",
      icon: <FaLocationDot size={SIZE} />,
      contact: data && data[2],
    },
  ];
  return (
    <header className="bg-foreground flex flex-col relative z-20 ">
      <div className="maincontainer flex flex-col justify-center items-center">
        <section className="  flex w-full relative pt-2 lg:pt-0">
          <div className="flex flex-col lg:flex justify-between items-start lg:items-center text-background w-full">
            <div className=" w-full h-full ">
              <div className="w-full hidden lg:flex gap-5 py-4 justify-between items-center">
                <Link href={"/"}>
                  <h1 className="text-2xl font-bold ">TTCitadel</h1>
                </Link>
                <DesktopMenu />
              </div>
              <div className="flex justify-between w-full h-full items-center lg:hidden pt-4 pb-2">
                <Link href={"/"}>
                  <h1 className="text-2xl font-bold ">TTCitadel</h1>
                </Link>

                <MobileMenuDrawer />
              </div>
            </div>
            <div className="hidden lg:flex justify-end items-center gap-4 pb-4 w-full">
              {contact_data.map((data, index) => (
                <ContactComp key={index} {...data} />
              ))}
            </div>

            {/* <div className="block lg:hidden">
              {contact_data
                .filter((x) => !x?.title.includes("Address"))
                .map((data, index) => (
                  <ContactCompMobile key={index} {...data} />
                ))}
            </div> */}
          </div>
        </section>
        {/* <div className=" hidden lg:block relative translate-y-1/2 bottom-0 w-full">
          <DesktopMenu />
        </div> */}
      </div>
    </header>
  );
}
