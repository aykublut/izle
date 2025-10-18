import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      username: string;
      firstName: string;
      lastName: string;
      token?: any;
      email?: string | null;
      name?: string | null;
      image?: string | null;
      photo?: string | null; // 👈 ekledik
      frame?: string | null;
      level?: string | null;
      allowComment?: boolean | null;
    };
  }
}
