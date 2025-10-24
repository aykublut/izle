"use client";
import React from "react";
import MovieSplash from "./MovieSplash";
import useStore from "@/store/store";
import { easeInOut, motion } from "motion/react";
const MovieSplashList = ({ moviesCall }: { moviesCall: any }) => {
  const { memberBarSelectedUser } = useStore();

  return (
    <motion.div
      initial={{ y: -200 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: easeInOut }}
      className="flex justify-center max-sm:gap-5 max-sm:space-y-20 pt-13 sm:gap-15 flex-wrap pb-15"
    >
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
    </motion.div>
  );
};

export default MovieSplashList;
