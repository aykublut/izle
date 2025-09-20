import MovieSplashList from "./_components/MovieSplashList";
const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";
export default async function Home() {
  const res = await fetch(`${baseUrl}/api/movies`, {
    cache: "no-store",
  });
  const moviesCall = await res.json();

  return (
    <div className="w-full myPadding pt-15">
      <MovieSplashList moviesCall={moviesCall} />
    </div>
  );
}
