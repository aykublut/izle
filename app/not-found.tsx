"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function NotFound() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Yalnızca client'ta render sonrası işle
    setMounted(true);
    const audio = new Audio("/notFound.mp3");
    audio.volume = 0.5;
    audio.play().catch(() => {});
  }, []);

  if (!mounted) {
    // SSR sırasında boş dön -> hydration farkını engeller
    return <div className="min-h-screen bg-black" />;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 animate-pulse bg-red-900/10" />

      <div className="relative w-110 h-64 mb-6 animate-[wiggle_3s_ease-in-out_infinite]">
        <Image
          src="/notFound.gif"
          alt="Michael Scott surprised"
          fill
          className="object-cover rounded-2xl shadow-lg shadow-red-700/40"
        />
      </div>

      <h1 className="text-6xl font-extrabold text-red-600 drop-shadow-lg">
        404
      </h1>
      <p className="text-xl text-gray-300 mt-2 mb-4">
        Michael çıkış yolu bulmaya çalışıyor 😱
      </p>

      <Button
        onClick={() => router.push("/")}
        className="px-6 py-3 h-12 z-50 bg-red-700 hover:bg-red-800 transition-all rounded-xl text-white text-lg font-medium shadow-lg shadow-red-700/50 cursor-pointer"
      >
        Ana Sayfaya Kaç 🏃‍♂️
      </Button>

      <p className="mt-8 text-sm text-gray-600">
        “Everybody stay calm! OMG it's happening!” — Michael Scott
      </p>

      <style jsx>{`
        @keyframes wiggle {
          0%,
          100% {
            transform: rotate(-3deg);
          }
          50% {
            transform: rotate(3deg);
          }
        }
      `}</style>
    </div>
  );
}
