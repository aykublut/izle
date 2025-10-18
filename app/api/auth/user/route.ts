// app/api/auth/user/route.ts
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../[...nextauth]/auth";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id)
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const { frame, photo } = body;

  try {
    const updatedUser = await prisma.member.update({
      where: { id: session.user.id },
      data: { frame, photo },
    });
    return NextResponse.json({
      message: "Profile updated successfully!",
      user: updatedUser,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Failed to update" }, { status: 500 });
  }
}
