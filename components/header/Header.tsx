"use client";
import React from "react";
import { ModeToggle } from "../ModeToggle";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useStore from "@/store/store";
import Image from "next/image";
import { languageENG, languageTR } from "@/store/lang";

const Header = () => {
  const { texts, setTexts } = useStore();
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
              {texts.headerButtons.nextPatch}
            </Button>
          </Link>
        ) : pathname === "/aboutPatch" ? (
          <Link href={"/"}>
            <Button size={"sm"} className="cursor-pointer" variant={"outline"}>
              {texts.headerButtons.homePage}
            </Button>
          </Link>
        ) : pathname === "/aboutMovie" ? (
          <Link href={"/"}>
            <Button size={"sm"} className="cursor-pointer" variant={"outline"}>
              {texts.headerButtons.return}
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
          <Link href="/register">
            <Button className="cursor-pointer">
              {texts.authButtons.register}
            </Button>
          </Link>
          <Link href="api/auth/signin">
            <Button
              className={
                texts.authButtons.login === "Login"
                  ? "px-6.5 cursor-pointer"
                  : "cursor-pointer"
              }
            >
              {texts.authButtons.login}
            </Button>
          </Link>
        </div>
        <Menu onClick={soSoon} className="cursor-pointer block md:hidden" />
        <ModeToggle />
        <div
          onClick={() => {
            if (texts.flag === "/lang/tr.png") {
              setTexts(languageENG);
              console.log(texts);
            } else if (texts.flag === "/lang/eng.png") {
              setTexts(languageTR);
              console.log(texts);
            }
            console.log(texts.flag);
          }}
          className="absolute right-20 shadow-sm p-[2.5px] cursor-pointer shadow-white rounded-sm"
        >
          <Image
            className="rounded-[3px]"
            alt="flag"
            width={37}
            height={9}
            src={texts.flag}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
