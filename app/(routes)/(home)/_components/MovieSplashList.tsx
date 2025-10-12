"use client";
import React from "react";
import MovieSplash from "./MovieSplash";
import useStore from "@/store/store";

const MovieSplashList = ({ moviesCall }: { moviesCall: any }) => {
  const { memberBarSelectedUser } = useStore();
  console.log(moviesCall);
  return (
    <div className="flex justify-center max-sm:gap-5 max-sm:space-y-20 sm:gap-15 flex-wrap">
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
