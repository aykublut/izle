import MovieSplashList from "./_components/MovieSplashList";

export default async function Home() {
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

  const res = await fetch(`${baseUrl}/api/movies`, { cache: "no-store" });

  if (!res.ok) {
    throw new Error(`Failed to fetch movies: ${res.status}`);
  }

  const moviesCall = await res.json();

  return (
    <div className="w-full myPadding pt-15">
      <MovieSplashList moviesCall={moviesCall} />
    </div>
  );
}
