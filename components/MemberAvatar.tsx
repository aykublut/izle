"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Image from "next/image";
import { usePathname } from "next/navigation";

const MemberAvatar = ({
  photo,
  frame,
  className,
  adminStatus,
  movieSplash,
}: any) => {
  const pathname = usePathname();

  // 🧩 Avatar boyutu
  let avatarSize = "";
  if (pathname === "/" && movieSplash === true) {
    avatarSize = "w-10 h-10";
  } else if (pathname === "/aboutMovie") {
    avatarSize = "w-40 h-40";
  } else if (pathname === "/" && adminStatus === false) {
    avatarSize = "w-14 h-14";
  } else if (pathname === "/" && adminStatus === true) {
    avatarSize = "w-20 h-20";
  } else {
    avatarSize = "w-60 h-60";
  }

  // 🧩 Frame boyutu
  let frameSize = "";
  if (pathname === "/" && movieSplash === true) {
    frameSize = "w-12 h-12";
  } else if (pathname === "/aboutMovie") {
    frameSize = "w-43 h-43";
  } else if (pathname === "/" && adminStatus === false) {
    frameSize = "w-16 h-16";
  } else if (pathname === "/" && adminStatus === true) {
    frameSize = "w-22 h-22";
  } else {
    frameSize = "w-64 h-64";
  }

  // 🧩 Rounded class (admin true → rounded-md, diğerleri → rounded-full)
  const frameRounded = adminStatus ? "rounded-md" : "rounded-full";
  const avatarRounded = adminStatus ? "rounded-lg" : "rounded-full";

  return (
    <div className="relative flex justify-center items-center cursor-pointer">
      {/* --- İç Avatar --- */}
      <div className="flex absolute justify-center items-center">
        <Avatar
          className={`${avatarSize} z-10 border border-white ${avatarRounded}`}
        >
          <AvatarImage
            src={photo ? photo : "/avatar/default.png"}
            width={500}
            height={500}
            className={`w-full h-full ${avatarRounded}`}
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

      {/* --- Frame (çerçeve) --- */}
      <Avatar
        className={`${frameSize} border border-white ${frameRounded} ${className}`}
      >
        <AvatarImage
          src={frame ? frame : "/cerceveler/fire.png"}
          width={500}
          height={500}
          className={`w-full h-full ${frameRounded}`}
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
