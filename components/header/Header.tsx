"use client";
import React from "react";
import { ModeToggle } from "../ModeToggle";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { toast } from "sonner";

const Header = () => {
  const soSoon = () => {
    toast("Bu özellik gelecek güncellemeyle gelicek", {
      description: "kusura bakmayınız",
      position: "top-center",
      duration: 5000,
      action: {
        label: "Undo",
        onClick: () => console.log("Undo"),
      },
    });
  };
  return (
    <div className="flex myPadding shadow-xl shadow-black/40 dark:shadow-white/30 justify-center">
      <div className="w-[35%] flex justify-center items-center"> </div>
      <div className="w-[30%] flex justify-center items-center">
        <h1 className="text-2xl  font-light">IZLE</h1>
      </div>
      <div className="w-[35%] flex justify-end items-center gap-3 sm:pr-10 pr-0">
        <div className="hidden md:flex gap-3">
          <Button onClick={soSoon} className="cursor-pointer">
            Register
          </Button>
          <Button onClick={soSoon} className="cursor-pointer">
            Login
          </Button>
        </div>
        <Menu onClick={soSoon} className="cursor-pointer block md:hidden" />
        <ModeToggle />
      </div>
    </div>
  );
};

export default Header;
