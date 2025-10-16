import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
  try {
    // İstekten body al
    const { email, username, password, firstName, lastName } =
      await request.json();

    // Gerekli alanlar var mı kontrol et
    if (!email || !username || !password || !firstName || !lastName) {
      return NextResponse.json(
        { message: "Missing required fields." },
        { status: 400 }
      );
    }

    // Email format kontrolü
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: "Invalid email format." },
        { status: 400 }
      );
    }

    // Şifre uzunluğu kontrolü
    if (password.length < 6) {
      return NextResponse.json(
        { message: "Password must be at least 6 characters long." },
        { status: 400 }
      );
    }

    // Email veya username var mı kontrol et
    const existingUser = await prisma.member.findFirst({
      where: {
        OR: [{ email }, { username }],
      },
    });

    if (existingUser) {
      return NextResponse.json(
        { message: "User with provided email or username already exists." },
        { status: 409 }
      );
    }

    // Şifreyi hashle
    const hashedPassword = await bcrypt.hash(password, 12);

    // Kullanıcıyı oluştur
    const user = await prisma.member.create({
      data: {
        email,
        username,
        firstName,
        lastName,
        photo: "/avatar/default.png",
        hashedPassword,
      },
    });

    // hashedPassword alanını dönmeden kaldır
    const { hashedPassword: _, ...safeUser } = user;

    // Başarılı yanıt döndür
    return NextResponse.json(safeUser, { status: 201 });
  } catch (error) {
    console.error("Register Error:", error);
    return NextResponse.json(
      { message: "Something went wrong." },
      { status: 500 }
    );
  }
}
