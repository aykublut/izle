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

        // kesin string olduğunu TypeScript'e bildiriyoruz (minimum müdahale)
        const email = credentials.email as string;
        const password = credentials.password as string;

        const user = await prisma.member.findUnique({ where: { email } });

        if (!user) {
          throw new Error("No user found with this email.");
        }

        // hashedPassword'in kesin string olduğunu belirt
        const isPasswordValid = await bcrypt.compare(
          password,
          user.hashedPassword as string
        );

        if (!isPasswordValid) {
          throw new Error("Incorrect password.");
        }

        return {
          id: user.id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        token.id = user.id;
        token.firstName = user.firstName;
        token.lastName = user.lastName;
      }
      return token;
    },
    async session({ session, token }: any) {
      if (session?.user) {
        session.user.id = token.id;
        session.user.firstName = token.firstName;
        session.user.lastName = token.lastName;
        session.user.token = token;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  // literal tip hatasını önlemek için as const ekledim (yapıyı bozmaz)
  session: { strategy: "jwt" as const },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
