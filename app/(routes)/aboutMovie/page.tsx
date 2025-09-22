"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import Comment from "./_comment/Comment";

import EmptyComment from "./_comment/EmptyComment";
const aboutMoviePage = () => {
  const [currentMovie, setCurrentMovie] = useState<any>();
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("currentMovie") || "null");
    if (stored) {
      setCurrentMovie(stored);
    }
  }, []);
  console.log(currentMovie);
  if (!currentMovie) {
    return <p></p>; // veya boş bir div
  }

  const { id, name, png, pngWidth, pngHeight, song, comments, description } =
    currentMovie;
  console.log(comments);
  return (
    <div
      id={id}
      className="flex myPadding py-15 flex-col md:flex-row items-center   "
    >
      <Image
        width={pngWidth}
        height={pngHeight}
        src={png}
        alt="wdawd"
        className="border-t-2 border-white rounded-md xl:w-[408px] xl:h-[550.5px] lg:w-[408px] lg:h-[550.5px] md:w-[306px] md:h-[413px] sm:h-[550.5px] h-[470.5px] w-[408px]"
      />
      <div className="flex flex-col mt-5 md:mt-0">
        <h1 className="text-4xl font-light font-mono text-center">{name}</h1>
        <p className=" px-10 py-5">{description}</p>
        <div className="sm:px-10 px-1">
          <ScrollArea className=" h-[13rem] lg:h-[24rem] w-full  rounded-md border shadow-sm dark:shadow-blue-100 shadow-black">
            <div className="p-4">
              <h4 className="mb-4 text-sm leading-none font-medium text-center">
                Yorumlar
              </h4>

              <React.Fragment key={id}>
                {comments &&
                  comments?.map((com: any) => (
                    <div key={com.name} className="mt-2">
                      <Comment com={com} />
                      <Separator className="my-2" />
                    </div>
                  ))}
                <EmptyComment />
              </React.Fragment>
            </div>
          </ScrollArea>
        </div>
      </div>
      <audio loop autoPlay className="w-[100%]">
        <source src={song} type="audio/mp3" />
        Tarayıcınız audio etiketini desteklemiyor.
      </audio>
    </div>
  );
};

export default aboutMoviePage;
