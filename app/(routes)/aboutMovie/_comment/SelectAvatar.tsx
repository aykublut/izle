import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import React from "react";

const SelectAvatar = ({ src }: { src: string }) => {
  return (
    <div className="cursor-pointer rounded-full hover:scale-101 hover:shadow-sm shadow-white ">
      <Avatar className="sm:w-15 sm:h-15 h-11 w-11 border-2 border-gray-500 ">
        <AvatarImage src={src} alt="@shadcn" />
        <AvatarFallback>
          <Image
            width={20}
            height={20}
            className="w-full h-full"
            alt="loading..."
            src="/loadingAvatar.gif"
          />
        </AvatarFallback>
      </Avatar>
    </div>
  );
};

export default SelectAvatar;
