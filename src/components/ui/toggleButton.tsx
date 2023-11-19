import React, { useState } from "react";
import styles from "@/styles/toggleButton.module.css";
import { cn } from "@/utils/className";
import MoonIcon from "../icons/moon";
import SunIcon from "../icons/sun";

const ToggleSwitch = () => {
  return (
    <label className={cn(styles.switch)}>
      <input type="checkbox" className={styles.switchInput} />
      <span className={cn(styles.slider)}>
        <div
          className={cn(
            styles.sliderBefore,
            "flex justify-center items-center"
          )}
        >
          <SunIcon className="w-4 h-4 text-text-secondary border-inter" />
        </div>
      </span>
    </label>
  );
};

export default ToggleSwitch;
