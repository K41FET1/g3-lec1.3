import React, { useState } from 'react';
import { motion } from 'framer-motion';
import DarkLight from './DarkLight';

export default function Header({ showTest }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);

    if (!darkMode) {
      document.querySelectorAll('#welcoming').forEach((el) => {
        el.style.color = "white";
      });
      document.body.style.backgroundColor = "#313E51";
      document.body.style.color = "#F4F6FA";
    } else {
      document.querySelectorAll('#welcoming').forEach((el) => {
        el.style.color = "#313E51";
      });
      document.body.style.backgroundColor = "#F4F6FA";
      document.body.style.color = "#313E51";
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

    const accessibilityButtons = document.querySelectorAll("#accessibility-input");
    accessibilityButtons.forEach((el) => {
      if (!darkMode) {
        el.classList.add("bg-[#3B4D66]", "text-white");
        el.classList.remove("bg-white", "text-[#313E51]");
      } else {
        el.classList.add("bg-white", "text-[#313E51]");
        el.classList.remove("bg-[#3B4D66]", "text-white");
      }
    });

    const headerTitle = document.querySelector("#headerTitle");  
    if (!darkMode) {
      headerTitle.style.color = "white";
    } else {
      headerTitle.style.color = "#313E51";  
    }
  };

  return (
    <div>
      <header
        className={`w-full h-[10dvh] bg-transparent px-[150px] py-[100px] flex items-center ${
          showTest ? 'justify-between' : 'justify-end'
        }`}
      >
        {showTest && (
          <div className="flex items-center gap-5">
            <div className='absolute right-[1600px]'>
              <div className="w-15 h-15 bg-purple-200 rounded-lg flex items-center justify-center">
                <img src="../assets/Accessibility.svg" alt="Accessibility Logo" />
              </div>
            </div>
            <p 
              id='headerTitle' 
              className="text-xl font-bold absolute right-[1470px]"
              style={{ color: darkMode ? "white" : "#313E51" }}
            >
              Accessibility
            </p>
          </div>
        )}
        <DarkLight darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </header>
    </div>
  );
}