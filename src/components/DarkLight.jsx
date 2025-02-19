import React, { useState } from "react";
import { motion } from "framer-motion";
import "../index.css";

export default function DarkLight() {
  const [darkMode, setDarkMode] = useState(false);
  const [x, setX] = useState(0);  

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    setX((prev) => (prev === 0 ? 23 : 0));
  
    if (!darkMode) {
      document.body.style.backgroundColor = '#313E51';
      document.body.style.color = 'white';
    } else {
      document.body.style.backgroundColor = '#F4F6FA';
      document.body.style.color = 'black';
    }
  
    const buttons = document.querySelectorAll("#input");
    buttons.forEach((el) => {
      if (!darkMode) {
        el.style.backgroundColor = '#3B4D66';
        el.style.color = 'white';
      } else {
        el.style.backgroundColor = 'white';
        el.style.color = '#313E51';
      }
    });
  };
  

  return (
    <div className="darkLightDiv">
      {darkMode ? (
        <img src="../assets/lightSun.png"/>
      ) : (
        <img src="../assets/darkSun.png"/>
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
        <img src="../assets/lightMoon.png"/>
      ) : (
        <img src="../assets/darkMoon.png"/>
      )}  
    </div>
  );
}
