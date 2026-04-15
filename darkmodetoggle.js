import React, { useState } from "react";

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#121212" : "white",
        color: darkMode ? "white" : "black",
        minHeight: "100vh",
        transition: "0.3s",
        fontFamily: "Arial",
        padding: "20px"
      }}
    >
      <button
        onClick={toggleTheme}
        style={{
          padding: "10px",
          marginBottom: "20px",
          cursor: "pointer"
        }}
      >
        🌙 Toggle Dark Mode
      </button>

      <h1>Habit Tracker</h1>
      <p>Track your habits easily!</p>
    </div>
  );
}

export default DarkModeToggle;