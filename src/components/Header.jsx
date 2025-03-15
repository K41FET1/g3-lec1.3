import React, { useState, useEffect } from 'react';
import DarkLight from './DarkLight';

export default function Header({ activeQuiz }) {
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
      <header className={`absolute w-full h-[10dvh] bg-transparent px-[150px] py-[100px] flex items-center justify-between 2xl:px-[120px] 2xl:py-[80px] xl:px-[100px] xl:py-[70px] lg:px-[80px] lg:py-[60px] md:px-[60px] md:py-[60px] sm:px-[60px] sm:py-[60px]`}> 
        {!activeQuiz && (
          <div className="flex items-center gap-5">
            <div>
              <div className="w-15 h-15 bg-purple-200 rounded-lg flex items-center justify-center">
                <img src="../assets/Accessibility.svg" alt="Accessibility Logo" />
              </div>
            </div>
            <p 
              id='headerTitle' 
              className="text-xl font-bold"
              style={{ color: darkMode ? "white" : "#313E51" }}
            >
              Accessibility
            </p>
          </div>
        )}
        
        <div className="flex items-center gap-5">
          <DarkLight darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </div>
      </header>
    </div>
  );
}
