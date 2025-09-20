// app/api/movies/route.ts
import { NextRequest, NextResponse } from "next/server";

// Örnek film verisi
export const movies = [
  {
    id: 1,
    name: "The Best Offer",
    png: "/theBestOffer.png",
    pngWidth: "1920",
    pngHeight: "2560",
    song: "/theBestOffer-song.mp3",
    owner: "Admin",
    ownerPng: "/avatar/engineer.png",
    byAdmin: false,
    comments: [
      {
        avatar: "/avatar/claire.png",
        name: "Claire",
        comment:
          "Filmin atmosferi çok sürükleyiciydi, önerdiğiniz için teşekkür ederim",
        color: "black",
        admin: false,
      },
    ],
  },
  {
    id: 2,
    name: "The Jacket",
    png: "/theJacket.png",
    pngWidth: "1200",
    pngHeight: "1600",
    song: "/theJacket-song.mp3",
    owner: "Admin",
    ownerPng: "/avatar/engineer.png",
    byAdmin: false,
    comments: [
      {
        avatar: "/avatar/theJacketWoman.png",
        name: "Jackie",
        comment: "Çok underrated bir film.",
        color: "black",
        admin: false,
      },
      {
        avatar: "/avatar/virgil.png",
        name: "Ahmet",
        comment: "Muhteşem",
        color: "red",
        admin: false,
      },
    ],
  },
  {
    id: 3,
    name: "K-Pax",
    png: "/kPax.png",
    pngWidth: "544",
    pngHeight: "789",
    song: "/kpax-song.mp3",
    owner: "Admin",
    ownerPng: "/avatar/engineer.png",
    byAdmin: false,
    comments: [
      {
        avatar: "/avatar/dr-mark.png",
        name: "Dr Mark",
        comment: "Hay yapacağınız filmin 32!^'^!24124",
        color: "black",
        admin: false,
      },
    ],
  },
  {
    id: 4,
    name: "İnek Şaban",
    png: "/inekSaban.png",
    pngWidth: "469",
    pngHeight: "523",
    song: "/kemalSunal.mp3",
    owner: "Ahmet",
    ownerPng: "/avatar/virgil.png",
    byAdmin: false,
    comments: [],
  },
];

export async function GET(req: NextRequest) {
  return NextResponse.json(movies);
}
