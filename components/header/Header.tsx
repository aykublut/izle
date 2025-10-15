"use client";
import React, { useState } from "react";
import { ModeToggle } from "../ModeToggle";
import { Button } from "../ui/button";
import { ArrowDown, Menu } from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useStore from "@/store/store";
import Image from "next/image";
import { languageENG, languageTR } from "@/store/lang";
import { signOut, useSession } from "next-auth/react";
import SelectAvatar from "@/app/(routes)/aboutMovie/_comment/SelectAvatar";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const { data: session } = useSession();
  const {
    texts,
    setTexts,
    setMemberBarVisible,
    memberBarVisible,
    setMemberBarSelectedUser,
  } = useStore();
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
  session && console.log(session.user.photo);
  return (
    <div
      suppressHydrationWarning
      className="fixed top-0 w-full z-50 backdrop-blur-md left-0 myPadding shadow-xl shadow-black/40 dark:shadow-white/30 justify-center flex"
    >
      {memberBarVisible ? (
        <div
          onClick={() => {
            setMemberBarVisible(!memberBarVisible);
            setMemberBarSelectedUser("");
          }}
          className={
            pathname === "/"
              ? "left-17 xl:flex hidden top-18 fixed border border-white/70 shadow-sm shadow-white/70 rounded-full"
              : "hidden"
          }
        >
          <ArrowDown className=" text-white/70 left-17 top-18 cursor-pointer " />
        </div>
      ) : (
        <div
          onClick={() => setMemberBarVisible(!memberBarVisible)}
          className={
            pathname === "/"
              ? "left-17 top-18 fixed xl:flex hidden border border-white/40 rounded-full"
              : "hidden"
          }
        >
          <ArrowDown className=" text-white/40 left-17 top-18 cursor-pointer" />
        </div>
      )}

      <div className="w-[35%] px-10 flex gap-5 justify-start items-center">
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
        ) : pathname === "/register" ||
          pathname === "/login" ||
          pathname === "/privacyNotice" ? (
          <Link href={"/"}>
            <Button size={"sm"} className="cursor-pointer" variant={"outline"}>
              {texts.headerButtons.homePage}
            </Button>
          </Link>
        ) : null}
      </div>
      <div className="relative w-[30%] flex justify-center items-center">
        <Link href="/">
          <h1 className="text-2xl  font-light">IZLE</h1>
        </Link>
        <h6 className="absolute text-[9px] top-8  font-light">beta</h6>
      </div>
      <div className="w-[35%] flex justify-end items-center gap-3 sm:pr-10 pr-0">
        {session && (
          <div className="flex gap-3 justify-center items-center">
            <div className="cursor-pointer p-0 rounded-r-md rounded-l-full flex items-center gap-0 hover:shadow-sm shadow-white ">
              <Avatar className="rounded-r-none rounded-l-full hidden md:block  border-2 border-gray-500 ">
                <AvatarImage
                  src={session.user.photo ?? "/avatar/prot.png"}
                  alt="@shadcn"
                />
                <AvatarFallback>
                  <Image
                    width={15}
                    height={15}
                    className="w-full  h-full"
                    alt="loading..."
                    src="/loadingAvatar.gif"
                  />
                </AvatarFallback>
              </Avatar>
              <Button
                onClick={() => {}} // çıkış yaptıktan sonra yönlendirme
                variant="outline"
                className="rounded-none hidden md:block cursor-pointer"
              >
                Profil
              </Button>
            </div>
            <Button
              onClick={() => {
                signOut({ callbackUrl: "/" });
                toast(`SİKTİR GİT ${session?.user?.firstName} 😂😂`, {
                  description: "kusura bakmayınız",
                  position: "top-center",
                  duration: 5000,
                  action: {
                    label: "Undo",
                    onClick: () => console.log("Undo"),
                  },
                });
              }} // çıkış yaptıktan sonra yönlendirme
              variant="outline"
              className="gap-3 max-sm:mr-10 max-sm:h-7 max-sm:w-17 md:block cursor-pointer"
            >
              {texts.authButtons.logout}
            </Button>
          </div>
        )}
        {!session && (
          <div className="gap-3 hidden md:flex">
            <Link href="/privacyNotice">
              <Button variant={"outline"} className="cursor-pointer">
                {texts.authButtons.register}
              </Button>
            </Link>
            <Link href="/login">
              <Button
                variant={"outline"}
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
        )}
        <div className="relative block md:hidden">
          <Menu
            onClick={() => setMenuActive(!menuActive)}
            className="cursor-pointer"
          />
          {!session && (
            <div
              className={
                menuActive
                  ? "absolute top-10 flex items-center flex-col gap-2 p-2 rounded-2xl bg-slate-800 z-50 -right-7"
                  : "hidden"
              }
            >
              <Link href="/privacyNotice">
                <Button
                  onClick={() => setMenuActive(!menuActive)}
                  variant={"outline"}
                  className="cursor-pointer"
                >
                  {texts.authButtons.register}
                </Button>
              </Link>
              <Link href="/login">
                <Button
                  onClick={() => {
                    setMenuActive(!menuActive);
                  }}
                  variant={"outline"}
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
          )}
        </div>
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
