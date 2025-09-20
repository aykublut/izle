import React from "react";
import { ModeToggle } from "../ModeToggle";

const Header = () => {
  return (
    <div className="flex myPadding shadow-xl shadow-white/30 justify-center">
      <div className="w-[35%] flex justify-center items-center"> </div>
      <div className="w-[30%] flex justify-center items-center">
        <h1 className="text-2xl  font-light">IZLE</h1>
      </div>
      <div className="w-[35%] flex justify-end items-center">
        <ModeToggle />
      </div>
    </div>
  );
};

export default Header;
