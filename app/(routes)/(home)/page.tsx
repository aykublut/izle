import MovieSplashList from "./_components/MovieSplashList";
import { movies } from "@/app/api/movies/route";
import PageTSXMemberBar from "./_components/PageTSXMemberBar";

export default async function Home() {
  const moviesCall = movies;

  return (
    <div className="w-full myPadding pt-15 pb-10">
      <MovieSplashList moviesCall={moviesCall} />
      <div className="hidden xl:block">
        <PageTSXMemberBar />
      </div>
    </div>
  );
}
