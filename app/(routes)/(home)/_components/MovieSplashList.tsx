"use client";
import React, { useEffect } from "react";
import MovieSplash from "./MovieSplash";
import useStore from "@/store/store";
import { useSession } from "next-auth/react";

const MovieSplashList = ({ moviesCall }: { moviesCall: any }) => {
  const { data: session, update } = useSession();
  const { photoS } = useStore();
  const { memberBarSelectedUser } = useStore();

  return (
    <div className="flex justify-center max-sm:gap-5 max-sm:space-y-20 pt-13 sm:gap-15 flex-wrap pb-15">
      {memberBarSelectedUser === ""
        ? moviesCall.map((movie: any) => (
            <MovieSplash movie={movie} key={movie.id} />
          ))
        : moviesCall.map(
            (movie: any) =>
              movie.owner === memberBarSelectedUser && (
                <MovieSplash movie={movie} key={movie.id} />
              )
          )}
    </div>
  );
};

export default MovieSplashList;
