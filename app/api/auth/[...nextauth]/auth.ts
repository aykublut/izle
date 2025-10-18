import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { prisma } from "@/lib/prisma";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing email or password");
        }

        const email = credentials.email as string;
        const password = credentials.password as string;

        const user = await prisma.member.findUnique({ where: { email } });

        if (!user) {
          throw new Error("No user found with this email.");
        }

        const isPasswordValid = await bcrypt.compare(
          password,
          user.hashedPassword as string
        );

        if (!isPasswordValid) {
          throw new Error("Incorrect password.");
        }

        // Genişletilmiş kullanıcı bilgilerini dön
        return {
          id: user.id,
          email: user.email,
          username: user.username,
          firstName: user.firstName,
          lastName: user.lastName,
          photo: user.photo,
          frame: user.frame,
          level: user.level,
          allowComment: user.allowComment,
        };
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        token.id = user.id;
        token.username = user.username;
        token.firstName = user.firstName;
        token.lastName = user.lastName;
        token.photo = user.photo;
        token.frame = user.frame;
        token.level = user.level;
        token.allowComment = user.allowComment;
      }
      return token;
    },

    async session({ session, token }: any) {
      if (session?.user) {
        session.user.id = token.id;
        session.user.firstName = token.firstName;
        session.user.lastName = token.lastName;
        session.user.photo = token.photo;
        session.user.frame = token.frame;
        session.user.level = token.level;
        session.user.allowComment = token.allowComment;
        session.user.token = token;
        session.user.username = token.username; // veya user.name
      }
      return session;
    },
  },

  pages: {
    signIn: "/login",
  },

  session: { strategy: "jwt" as const },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
