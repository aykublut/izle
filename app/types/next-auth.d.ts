import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      firstName: string;
      lastName: string;
      token?: any;
      email?: string | null;
      name?: string | null;
      image?: string | null;
    };
  }
}
