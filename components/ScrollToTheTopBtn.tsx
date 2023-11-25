"use client";
import { BsArrowUpSquareFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";

export default function ScrollToTheTopBtn() {
  const [userScroll, setUserScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setUserScroll(true);
      } else {
        setUserScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const ScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {userScroll && (
        <div className="fixed bottom-6 right-6 z-50 ">
          <button onClick={ScrollTop} className="">
            <BsArrowUpSquareFill size={40} />
          </button>
        </div>
      )}
    </>
  );
}
