import React from "react";

interface ISidebarMenuItemProps {
  icon: React.ReactNode;
  label: string;
}

function SidebarMenuItem(props: ISidebarMenuItemProps) {
  const { icon, label } = props;

  return (
    <div className="w-full h-16 px-6 py-4 flex items-center justify-start rounded-lg cursor-pointer text-text-light-secondary hover:bg-gray-10/5 active:bg-gray-10/10">
      <div className="w-6 h-6 text-text-light mr-3">{icon}</div>
      <div className="text-md font-medium">{label}</div>
    </div>
  );
}

export default SidebarMenuItem;
