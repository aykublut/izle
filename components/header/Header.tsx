"use client";
import React from "react";
import { ModeToggle } from "../ModeToggle";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
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
      <div className="w-[35%] px-10 flex justify-start items-center">
        {pathname === "/" ? (
          <Link href={"/aboutPatch"}>
            <Button size={"sm"} className="cursor-pointer" variant={"outline"}>
              Güncelleme?
            </Button>
          </Link>
        ) : pathname === "/aboutPatch" ? (
          <Link href={"/"}>
            <Button size={"sm"} className="cursor-pointer" variant={"outline"}>
              Ana Sayfa
            </Button>
          </Link>
        ) : pathname === "/aboutMovie" ? (
          <Link href={"/"}>
            <Button size={"sm"} className="cursor-pointer" variant={"outline"}>
              Geri Dön
            </Button>
          </Link>
        ) : (
          <div></div>
        )}
      </div>
      <div className="relative w-[30%] flex justify-center items-center">
        <h1 className="text-2xl  font-light">IZLE</h1>
        <h6 className="absolute text-[9px] top-8  font-light">beta</h6>
      </div>
      <div className="w-[35%] flex justify-end items-center gap-3 sm:pr-10 pr-0">
        <div className="hidden md:flex gap-3">
          <Link href="api/auth/signin">
            <Button className="cursor-pointer">Register</Button>
          </Link>
          <Link href="api/auth/signup">
            <Button className="cursor-pointer">Login</Button>
          </Link>
        </div>
        <Menu onClick={soSoon} className="cursor-pointer block md:hidden" />
        <ModeToggle />
      </div>
    </div>
  );
};

export default Header;
