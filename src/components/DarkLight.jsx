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
      document.querySelectorAll('#welcoming').color = "white";
      document.body.style.backgroundColor = "#313E51";
      document.body.style.color = "white";
      setTopCircle("../assets/darkCircleTop.png");
      setBottomCircle("../assets/darkCircleBottom.png");
    } else {
      document.querySelectorAll('#welcoming').color = "#313E51";
      document.body.style.backgroundColor = "#F4F6FA";
      document.body.style.color = "#313E51";
      setTopCircle("../assets/lightCircleTop.svg");
      setBottomCircle("../assets/lightCircleBottom.svg");
    }

    const buttons = document.querySelectorAll("#input");
    buttons.forEach((el) => {
      if (!darkMode) {
        el.style.backgroundColor = "#3B4D66";
        el.style.color = "white";
      } else {
        el.style.backgroundColor = "white";
        el.style.color = "#313E51";
      }
    });
  };

  return (
    <>
      <img src={topCircle} className="lightCircleTop" />
      <img src={bottomCircle} className="lightCircleBottom" />

      <div className="darkLightDiv">
        {darkMode ? (
          <img src="../assets/lightSun.png" alt="Light Sun" />
        ) : (
          <img src="../assets/darkSun.png" alt="Dark Sun" />
        )}

        <motion.div
          className={`toggle-container ${darkMode ? "dark" : ""}`}
          onClick={toggleDarkMode}
        >
          <motion.div
            className="toggle-switch"
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
