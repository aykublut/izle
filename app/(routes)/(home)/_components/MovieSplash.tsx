"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import useStore from "@/store/store";
import { PlayCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const MovieSplash = ({ movie }: { movie: any }) => {
  const { setCurrentMovie, currentMovie } = useStore();
  console.log(movie);
  const handleCurrentMovie = () => {
    setCurrentMovie(movie);
  };
  useEffect(() => {
    localStorage.setItem("currentMovie", JSON.stringify(currentMovie));
  }, [currentMovie]);

  return (
    <Link onClick={handleCurrentMovie} href="/aboutMovie">
      <div className=" w-40 md:w-60 hover:scale-101 hover:border-b-[0.2px] cursor-pointer  border-white rounded-sm">
        <div className="flex justify-center items-center">
          <h2 className="text-2xl font-light p-1">{movie.name}</h2>
        </div>
        <div className="relative flex justify-center items-center w-40 md:w-60 md:h-88 h-59  ">
          <PlayCircle className="absolute w-15 h-15 " />
          <Image
            width={movie.pngWidth}
            height={movie.pngHeight}
            src={movie.png}
            alt="wdawd"
            className="border-t-2 border-white rounded-md w-40 md:w-60 h-full"
          />
          <div className="absolute top-55 md:top-82 flex justify-center items-center flex-col gap-1">
            <Avatar
              className={
                movie.owner
                  ? ` w-8 h-8 md:w-13 md:h-13 border-2 rounded-lg shadow-sm shadow-white`
                  : " w-8 h-8 md:w-13 md:h-13 border-2"
              }
            >
              <AvatarImage src={movie.ownerPng} alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h5 className="text-[10px]">{movie.owner}</h5>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieSplash;
