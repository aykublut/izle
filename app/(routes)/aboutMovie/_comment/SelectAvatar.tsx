import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";

const SelectAvatar = ({ src }: { src: string }) => {
  return (
    <div className="cursor-pointer rounded-full hover:scale-101 hover:shadow-sm shadow-white ">
      <Avatar className="sm:w-20 sm:h-20 h-13 w-13 border-2 border-gray-500 ">
        <AvatarImage src={src} alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default SelectAvatar;
