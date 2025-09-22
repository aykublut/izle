import React from "react";
import MovieSplash from "./MovieSplash";

const MovieSplashList = ({ moviesCall }: { moviesCall: any }) => {
  console.log(moviesCall);
  return (
    <div className="flex justify-center max-sm:gap-5 max-sm:space-y-20 sm:gap-15 flex-wrap">
      {moviesCall.map((movie: any) => (
        <MovieSplash movie={movie} key={movie.id} />
      ))}
      {/* <div className=" w-60 hover:scale-101  cursor-pointer    ">
        <div className="flex justify-center items-center">
          <h2 className="text-2xl font-light p-5"></h2>
        </div>
        <div className="relative flex justify-center items-center w-60 h-88  bg-white/70 ">
          {" "}
          <PlusCircle className="w-13 h-13" />{" "}
        </div>
      </div> */}
    </div>
  );
};

export default MovieSplashList;
