"use client";
import { closeSidebar } from "@/redux/features/sidebarSlice";
import { useDispatch, useSelector } from "@/redux/hooks";
import BackgroundShade from "../ui/backgroundShade";

interface ISidebarWrapperProps {
  children?: React.ReactNode;
}

function SidebarWrapper({ children }: ISidebarWrapperProps) {
  const dispatch = useDispatch();

  const { open } = useSelector("sidebar");

  return (
    <>
      <nav
        className={`w-72 h-screen min-h-fit overflow-auto fixed lg:sticky top-0 right-full lg:left-0 z-30 bg-background-light dark:bg-background border-r border-border-50 text-text dark:text-text-light flex flex-col transition-transform lg:transform-none lg:translate-x-0 ${
          open ? "translate-x-72" : "translate-x-0"
        }`}
      >
        {children}
      </nav>
      {open && (
        <BackgroundShade
          onClick={() => {
            dispatch(closeSidebar());
          }}
        />
      )}
    </>
  );
}

export default SidebarWrapper;
