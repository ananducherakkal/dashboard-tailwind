import React from "react";

interface ISidebarMenuItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

function SidebarMenuItem(props: ISidebarMenuItemProps) {
  const { icon, label, active = false } = props;

  return (
    <button
      className={`w-full h-16 px-6 py-4 flex items-center justify-start rounded-lg ${
        active
          ? "bg-gray-80/10 dark:bg-gray-10/10 text-text dark:text-text-light"
          : "cursor-pointer text-text-secondary dark:text-text-light-secondary hover:bg-gray-10/5 active:bg-gray-10/20"
      }`}
    >
      <div className="w-6 h-6 text-text dark:text-text-light mr-3">{icon}</div>
      <div className="text-md font-medium">{label}</div>
    </button>
  );
}

export default SidebarMenuItem;
