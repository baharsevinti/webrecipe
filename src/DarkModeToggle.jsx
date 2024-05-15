import React, { useState } from "react";
import "./styles.css";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <button onClick={toggleDarkMode} className="dark-mode-toggle-button">
      {darkMode ? (
        <>
          <span style={{ fontSize: "24px" }}>☀️</span> 
        </>
      ) : (
        <>
          <span style={{ fontSize: "24px" }}>🌙</span> 
        </>
      )}
    </button>
  );
};

export default DarkModeToggle;
