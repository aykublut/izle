import MovieSplashList from "./_components/MovieSplashList";
import { movies } from "@/app/api/movies/route";

export default async function Home() {
  const moviesCall = movies;

  return (
    <div className="w-full myPadding pt-15">
      <MovieSplashList moviesCall={moviesCall} />
    </div>
  );
}
