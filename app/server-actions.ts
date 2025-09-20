"use server";

import { prisma } from "@/lib/prisma";

export async function createUser(data: {
  selectedAvatar: string;
  nickname: string;
  comment: string;
  selectedColor: string;
  movieName: string;
  movieSuggestion: string;
}) {
  try {
    const user = await prisma.user.create({
      data,
    });
    return user;
  } catch (err) {
    console.error(err);
    throw new Error("User creation failed");
  }
}
