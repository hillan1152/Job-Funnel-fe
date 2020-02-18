import React from "react";
import { useDarkMode } from "./DarkMode";
  
const DarkMode = () => {
const [darkMode, setDarkMode] = useDarkMode(false);

const toggleDarkMode = () => {
    console.log("value", darkMode);
    setDarkMode(!darkMode);
};
return (
    // <nav className="navbar"
    <div className="dark-container">
        <h4>Dark Mode</h4>
        <div className="dark-mode__toggle" onClick={() => toggleDarkMode()}>
            <div className={darkMode ? "toggle toggled" : "toggle"} />
        </div>
    </div>

);
};

export default DarkMode;