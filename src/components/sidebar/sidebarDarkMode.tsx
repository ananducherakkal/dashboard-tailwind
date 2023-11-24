import React from "react";
import DarkModeButton from "./darkModeButton";

function SidebarDarkMode() {
  return (
    <div className="flex justify-center items-center text-xs space-x-2 p-6">
      <div className="select-none">Light</div>
      <DarkModeButton />
      <div className="select-none">Dark</div>
    </div>
  );
}

export default SidebarDarkMode;
