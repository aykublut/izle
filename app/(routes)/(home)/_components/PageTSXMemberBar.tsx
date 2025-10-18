"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import useStore from "@/store/store";
import { toast } from "sonner";

interface Member {
  username: string;
  photo: string;
  frame: string;
  level: string;
}

const PageTSXMemberBar = () => {
  const [members, setMembers] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const { memberBarVisible, setMemberBarSelectedUser } = useStore();

  useEffect(() => {
    let isMounted = true;

    const fetchMembers = async () => {
      try {
        const res = await fetch("/api/members", { cache: "no-store" });
        if (!res.ok) {
          const text = await res.text();
          throw new Error(`HTTP ${res.status}: ${text}`);
        }
        const data: Member[] = await res.json();
        if (isMounted) setMembers(data);
      } catch (err) {
        console.error("fetchMembers error:", err);
        toast.error("Üyeler yüklenirken bir hata oluştu.");
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchMembers();
    return () => {
      isMounted = false;
    };
  }, []);

  if (!memberBarVisible) return null;

  return (
    <div className="">
      {memberBarVisible && (
        <div className="fixed left-0 top-25 w-40 h-150 rounded-md shadow-sm shadow-white text-center bg-gradient-to-br from-[#0f101a] to-[#1a1a2b]">
          <ScrollArea className="h-full overflow-auto p-2">
            {/* KURUCU */}
            <div className="flex flex-col items-center mb-3">
              <h3 className="text-white font-light text-xl mb-2 border-b border-white shadow-white shadow-[0_0.5px_0_rgba(255,255,255,0.2)]">
                Yönetmen
              </h3>
              <div className="relative flex justify-center items-center cursor-pointer">
                <div className="flex absolute justify-center items-center">
                  <Avatar
                    onClick={() => setMemberBarSelectedUser("Admin")}
                    className="w-17 h-17 z-10 rounded-sm"
                  >
                    <AvatarImage
                      src="/avatar/general.png"
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
                </div>
                <Avatar
                  onClick={() => setMemberBarSelectedUser("Admin")}
                  className="w-18 h-18 rounded-md shadow-md border-2 border-white shadow-white"
                >
                  <AvatarImage
                    src="/cerceveler/adminCerceve.png"
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
              </div>
              <h5 className="text-[11px] mt-1">Admin</h5>
            </div>

            {/* BÜYÜK DESTEKÇİ */}
            <div className="flex flex-col items-center mb-3">
              <h3 className="text-yellow-500 font-light text-lg mb-2 border-b border-yellow-500 shadow-yellow-500 shadow-[0_0.5px_0_rgba(255,255,255,0.2)]">
                Başrol
              </h3>
              {members
                .filter((m: any) => m.level === "Başrol")
                .map((member: any, key: any) => (
                  <div key={key} className="mb-2">
                    <Avatar
                      onClick={() => setMemberBarSelectedUser(member.username)}
                      className="w-14 h-14 rounded-md shadow-md border-1 border-yellow-500 shadow-yellow-500 cursor-pointer"
                    >
                      <AvatarImage
                        src={member.photo}
                        width={25}
                        height={25}
                        className="w-full h-full"
                        alt={member.username}
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
                    <h5 className="text-[11px] mt-1">{member.username}</h5>
                  </div>
                ))}
            </div>

            {/* DESTEKÇİ */}
            <div className="flex flex-col items-center  mb-3">
              <h3 className="text-blue-400 font-light text-md flex m-0 p-0 flex-col mb-2 border-b border-blue-400 shadow-blue-400 shadow-[0_0.5px_0_rgba(255,255,255,0.2)]">
                Destekçi
              </h3>
              {members
                .filter((m: any) => m.level === "Destekçi")
                .map((member: any, key: any) => (
                  <div
                    key={key}
                    className="mb-2 justify-center flex flex-col items-center"
                  >
                    <Avatar
                      onClick={() => setMemberBarSelectedUser(member.username)}
                      className="w-14 h-14 rounded-md shadow-sm border-1 border-blue-400 shadow-blue-400 cursor-pointer"
                    >
                      <AvatarImage
                        src={member.photo}
                        width={25}
                        height={25}
                        className="w-full h-full"
                        alt={member.username}
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
                    <h5 className="text-[11px] mt-1">{member.username}</h5>
                  </div>
                ))}
            </div>

            {/* DİĞER KULLANICILAR */}
            <div className="flex flex-col items-center mb-3">
              <h3 className="text-white/75 font-light text-md flex m-0 p-0 flex-col mb-2 border-b border-white/80 shadow-white shadow-[0_0.5px_0_rgba(255,255,255,0.2)]">
                Seyirci
              </h3>
              {members
                .filter((m: any) => m.level === "Seyirci")
                .map((member: any, key: any) => (
                  <div key={key} className="mb-2">
                    <Avatar
                      onClick={() => setMemberBarSelectedUser(member.username)}
                      className="w-14 h-14 rounded-md  border-1 border-white/70  cursor-pointer"
                    >
                      <AvatarImage
                        src={member.photo}
                        width={25}
                        height={25}
                        className="w-full h-full"
                        alt={member.username}
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
                    <h5 className="text-[11px] mt-1">{member.username}</h5>
                  </div>
                ))}
            </div>
          </ScrollArea>
        </div>
      )}
    </div>
  );
};

export default PageTSXMemberBar;
