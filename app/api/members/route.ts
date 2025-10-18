import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const members = await prisma.member.findMany();
    const safeMembers = members.map((m) => ({
      username: m.username || "Unknown",
      photo: m.photo || "/avatar/general.png",
      frame: m.frame || "/cerceveler/default.png",
      level: m.level || "user",
    }));

    return NextResponse.json(safeMembers, { status: 200 });
  } catch (error: any) {
    console.error("Prisma fetchMembers error:", error); // artık görülecek
    return NextResponse.json(
      { error: error.message || "Server error while fetching members amj" },
      { status: 500 }
    );
  }
}
