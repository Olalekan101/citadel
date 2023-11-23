import React from "react";

export default function ContactComp({
  children,
  title,
  contact,
}: {
  children: React.ReactNode;
  title: string;
  contact: string;
}) {
  return (
    <div className="flex flex-row justify-center items-center">
      <div className="">{children}</div>
      <div className="flex flex-col">
        <div className="">{title}</div>
        <div className="">{contact}</div>
      </div>
    </div>
  );
}
