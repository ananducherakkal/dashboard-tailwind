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
        className={`w-72 h-screen min-h-fit overflow-auto fixed top-0 left-0 z-30 bg-background border-r border-border-50 text-text-light ${
          open ? "flex flex-col" : "hidden"
        } md:flex flex-col md:sticky`}
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
