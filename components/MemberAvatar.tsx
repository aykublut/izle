"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Image from "next/image";
import { usePathname } from "next/navigation";

const MemberAvatar = ({ photo, frame }: any) => {
  const pathname = usePathname();
  return (
    <div className="relative flex justify-center items-center cursor-pointer">
      <div className="flex absolute justify-center items-center">
        <Avatar
          className={
            pathname === "/aboutMovie"
              ? "w-40 h-40  z-10 border border-white  rounded-full"
              : "w-60 h-60  z-10 border border-white  rounded-full"
          }
        >
          <AvatarImage
            src={photo ? photo : "/avatar/default.png"}
            width={500}
            height={500}
            className="w-full h-full rounded-full"
            alt="@shadcn"
          />

          <AvatarFallback>
            <Image
              width={20}
              height={20}
              alt="loading..."
              src="/loadingAvatar.gif"
            />
          </AvatarFallback>
        </Avatar>
      </div>
      <Avatar
        className={
          pathname === "/aboutMovie"
            ? "w-43 h-43  border border-white  rounded-full"
            : "w-64 h-64   border border-white  rounded-full"
        }
      >
        <AvatarImage
          src={frame ? frame : "/cerceveler/fire.png"}
          width={500}
          height={500}
          className="w-full h-full rounded-full"
          alt="@shadcn"
        />

        <AvatarFallback>
          <Image
            width={20}
            height={20}
            alt="loading..."
            src="/loadingAvatar.gif"
          />
        </AvatarFallback>
      </Avatar>
    </div>
  );
};

export default MemberAvatar;
