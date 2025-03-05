import React, { useState } from "react";
import { motion } from "framer-motion";
import "../index.css";

export default function DarkLight() {
  const [darkMode, setDarkMode] = useState(false);
  const [x, setX] = useState(0);
  const [topCircle, setTopCircle] = useState("../assets/lightCircleTop.svg");
  const [bottomCircle, setBottomCircle] = useState("../assets/lightCircleBottom.svg");

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    setX((prev) => (prev === 0 ? 23 : 0));

    if (!darkMode) {
      document.querySelectorAll('#welcoming').forEach((el) => {
        el.style.color = "white";
      });
      document.body.style.backgroundColor = "#313E51";
      document.body.style.color = "#F4F6FA;";
      setTopCircle("../assets/darkCircleTop.png");
      setBottomCircle("../assets/darkCircleBottom.png");
    } else {
      document.querySelectorAll('#welcoming').forEach((el) => {
        el.style.color = "#313E51";
      });
      document.body.style.backgroundColor = "#F4F6FA";
      document.body.style.color = "#313E51";
      setTopCircle("../assets/lightCircleTop.svg");
      setBottomCircle("../assets/lightCircleBottom.svg");
    }

    const buttons = document.querySelectorAll("#input");
    buttons.forEach((el) => {
      if (!darkMode) {
        el.classList.add("bg-[#3B4D66]", "text-white");
        el.classList.remove("bg-white", "text-[#313E51]");
      } else {
        el.classList.add("bg-white", "text-[#313E51]");
        el.classList.remove("bg-[#3B4D66]", "text-white");
      }
    });
  };

  return (
    <>
      <img src={topCircle} className="fixed top-0 left-0 z-[-1] lightCircleTop" />
      <img src={bottomCircle} className="fixed bottom-0 right-0 z-[-1] lightCircleBottom" />

      <div className="flex items-center justify-center gap-5 darkLightDiv">
        {darkMode ? (
          <img src="../assets/lightSun.png" alt="Light Sun" />
        ) : (
          <img src="../assets/darkSun.png" alt="Dark Sun" />
        )}

        <motion.div
          className={`w-[50px] h-[25px] rounded-full flex items-center p-1 cursor-pointer relative ${darkMode ? "bg-[#757575]" : "bg-[#A445ED]"} toggle-container`}
          onClick={toggleDarkMode}
        >
          <motion.div
            className="w-[17px] h-[17px] bg-white rounded-full"
            transition={{ duration: 0.1 }}
            animate={{ x: x }}
          />
        </motion.div>

        {darkMode ? (
          <img src="../assets/lightMoon.png" alt="Light Moon" />
        ) : (
          <img src="../assets/darkMoon.png" alt="Dark Moon" />
        )}
      </div>
    </>
  );
}
