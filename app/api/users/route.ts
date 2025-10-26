import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const users = await prisma.user.findMany();
    const safeUsers = users.map((u) => ({
      avatar: u.selectedAvatar || "Unknown",
      nick: u.nickname || "/avatar/general.png",
      comment: u.comment || "/cerceveler/default.png",
      color: u.selectedColor || "user",
      movieSuggestion: u.movieSuggestion,
      movieName: u.movieName,
      instantComment: u.instantComment,
    }));

    return NextResponse.json(safeUsers, { status: 200 });
  } catch (error: any) {
    console.error("Prisma fetchMembers error:", error); // artık görülecek
    return NextResponse.json(
      { error: error.message || "Server error while fetching members amj" },
      { status: 500 }
    );
  }
}
