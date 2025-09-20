import MovieSplashList from "./_components/MovieSplashList";

export default async function Home() {
  const res = await fetch(`http://localhost:3000/api/movies`, {
    cache: "no-store",
  });
  const moviesCall = await res.json();

  return (
    <div className="w-full myPadding pt-15">
      <MovieSplashList moviesCall={moviesCall} />
    </div>
  );
}
