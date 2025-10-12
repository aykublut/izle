"use client";
import React from "react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import useStore from "@/store/store";
import { toast } from "sonner";
const PageTSXMemberBar = () => {
  const { memberBarVisible, setMemberBarSelectedUser } = useStore();
  return (
    <div>
      {memberBarVisible ? (
        <div className="fixed left-0 top-25 w-40 h-150 rounded-md flex flex-col gap-3 pt-5 shadow-sm shadow-white text-center">
          <div className=" flex flex-col items-center ">
            <h3 className="text-white font-light text-xl mb-2 border-b border-white shadow-white shadow-[0_0.5px_0_rgba(255,255,255,0.2)]">
              KURUCU
            </h3>
            <Avatar
              onClick={() => setMemberBarSelectedUser("Admin")}
              className="w-17 h-17 rounded-md shadow-sm border-2 border-white shadow-white cursor-pointer"
            >
              <AvatarImage
                src="/avatar/engineer.png"
                width={25}
                height={25}
                className="w-full h-full"
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
            <h5 className="text-[11px] mt-1">Admin</h5>
          </div>
          <div className=" flex flex-col items-center ">
            <h3 className="text-yellow-500 font-light text-lg mb-2 border-b border-yellow-500 shadow-yellow-500 shadow-[0_0.5px_0_rgba(255,255,255,0.2)]">
              Destekçi
            </h3>
            <Avatar
              onClick={() => setMemberBarSelectedUser("Ahmet")}
              className="w-14 h-14 rounded-md shadow-sm border-1 border-yellow-500 shadow-yellow-500 cursor-pointer"
            >
              <AvatarImage
                src="/avatar/virgil.png"
                width={25}
                height={25}
                className="w-full h-full"
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
            <h5 className="text-[11px] mt-1">Ahmet</h5>
            <Avatar
              onClick={() => {
                toast("Kullanıcının filmi yok!", {
                  description: "Film eklememiş",
                  position: "top-center",
                  duration: 2000,
                  action: {
                    label: "Undo",
                    onClick: () => console.log("Undo"),
                  },
                });
              }}
              className="w-14 h-14 mt-2 rounded-md shadow-sm border-1 border-yellow-500 shadow-yellow-500 cursor-pointer"
            >
              <AvatarImage
                src="/avatar/prot.png"
                width={25}
                height={25}
                className="w-full h-full"
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
            <h5 className="text-[11px] mt-1">Allahın cezası</h5>
          </div>
          <div className=" flex flex-col items-center ">
            <h3 className="text-blue-400 font-light text-md flex m-0 p-0 flex-col mb-2 border-b border-blue-400  shadow-blue-400  shadow-[0_0.5px_0_rgba(255,255,255,0.2)]">
              Prof. <span className="m-0 p-0">Geribildirimci</span>
            </h3>
            <Avatar
              onClick={() => setMemberBarSelectedUser("Cecu")}
              className="w-13 h-13 rounded-md shadow-sm   shadow-blue-400  cursor-pointer"
            >
              <AvatarImage
                src="/avatar/prot.png"
                width={25}
                height={25}
                className="w-full h-full"
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
            <h5 className="text-[11px] mt-1">Cecu</h5>
          </div>
          <div className=" flex flex-col items-center ">
            <h3 className="text-white/75 font-light text-md flex m-0 p-0 flex-col mb-2 border-b border-white/80  shadow-white  shadow-[0_0.5px_0_rgba(255,255,255,0.2)]">
              Değerli Kullanıcılar
            </h3>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default PageTSXMemberBar;
