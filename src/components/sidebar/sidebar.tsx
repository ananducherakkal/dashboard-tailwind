"use client";
import SidebarDarkMode from "./sidebarDarkMode";
import SidebarLogo from "./sidebarLogo";
import SidebarMenu from "./sidebarMenu";
import SidebarProfile from "./sidebarProfile";
import SidebarWrapper from "./sidebarWrapper";
import StoreProvider from "@/redux/storeProvider";

function Sidebar() {
  return (
    <StoreProvider>
      <SidebarWrapper>
        <SidebarLogo />
        <SidebarProfile />
        <SidebarMenu />
        <SidebarDarkMode />
      </SidebarWrapper>
    </StoreProvider>
  );
}

export default Sidebar;
