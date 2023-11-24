"use effect";
import React, { useEffect, useState } from "react";
import styles from "@/styles/toggleButton.module.css";
import { cn } from "@/utils/className";
import MoonIcon from "../icons/moon";
import SunIcon from "../icons/sun";
import cookie from "js-cookie";

const DarkModeButton = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const _darkMode = cookie.get("theme");
    setDarkMode(_darkMode === "dark");
  }, []);

  const handleDarkModeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const htmlElement = document.documentElement;

    if (event.target.checked) {
      setDarkMode(true);
      cookie.set("theme", "dark");
      htmlElement.classList.add("dark");
      htmlElement.classList.remove("light");
    } else {
      setDarkMode(false);
      cookie.set("theme", "ligth");
      htmlElement.classList.add("light");
      htmlElement.classList.remove("dark");
    }
  };

  return (
    <label className={cn(styles.switch)}>
      <input
        type="checkbox"
        className={styles.switchInput}
        checked={darkMode}
        onChange={handleDarkModeChange}
      />
      <span className={cn(styles.slider, "bg-background")}>
        <div
          className={cn(
            styles.sliderBefore,
            "flex justify-center items-center p-1"
          )}
        >
          {darkMode ? (
            <MoonIcon className="w-3 h-3 text-text-light-secondary border-inter" />
          ) : (
            <SunIcon className="w-3 h-3 text-text-light-secondary border-inter" />
          )}
        </div>
      </span>
    </label>
  );
};

export default DarkModeButton;
