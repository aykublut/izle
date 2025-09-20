"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import React from "react";

const Comment = ({ com }: { com: any }) => {
  //     avatar:
  //     name:
  //     comment:
  //     color:
  const { avatar, name, comment, color, admin } = com;
  return (
    <div className="flex w-full">
      <div className="flex justify-center items-center flex-col w-[25%] pt-2   ">
        <Avatar
          style={{ borderColor: color }}
          className={
            admin
              ? `w-20 h-20 border-2 rounded-lg shadow-sm shadow-white`
              : "w-20 h-20 border-2"
          }
        >
          <AvatarImage src={avatar} alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h4 className="font-light font-mono text-center mt-1 text-md">
          {name}
        </h4>
      </div>

      <div
        style={{ borderColor: color }}
        className={`p-3 w-[75%] rounded-sm border-l-2 `}
      >
        <p className="w-full   text-sm">{comment}</p>
      </div>
    </div>
  );
};

export default Comment;
