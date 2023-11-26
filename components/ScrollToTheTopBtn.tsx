"use client";
import { BsArrowUpSquareFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-6 right-6 z-50 "
        >
          <button onClick={ScrollTop} className="">
            <BsArrowUpSquareFill size={40} />
          </button>
        </motion.div>
      )}
    </>
  );
}
