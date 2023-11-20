import React from "react";

interface IBackgroundShadeProps {
  onClick?: () => any;
}

function BackgroundShade(porps: IBackgroundShadeProps) {
  const { onClick } = porps;

  return (
    <div
      className="fixed w-screen h-screen bg-black opacity-20 z-20 md:hidden"
      onClick={onClick}
    ></div>
  );
}

export default BackgroundShade;
