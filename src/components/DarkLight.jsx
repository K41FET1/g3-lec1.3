import React, { useState , useEffect } from 'react';
import { motion } from 'framer-motion';
import "../index.css";

export default function DarkLight({ darkMode, toggleDarkMode }) {
  const [x, setX] = useState(0);
  const [topCircle, setTopCircle] = useState("../assets/lightCircleTop.svg");
  const [bottomCircle, setBottomCircle] = useState("../assets/lightCircleBottom.svg");

  useEffect(() => {
    setX(darkMode ? 23 : 0);
    setTopCircle(darkMode ? "../assets/darkCircleTop.png" : "../assets/lightCircleTop.svg");
    setBottomCircle(darkMode ? "../assets/darkCircleBottom.png" : "../assets/lightCircleBottom.svg");
  }, [darkMode]);

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