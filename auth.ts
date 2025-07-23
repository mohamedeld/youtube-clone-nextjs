import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import { users } from "@/db/schema";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      id: string;
      email: string;
      name: string;
      imageUrl: string;
    };
  }
   interface User {
    id: string;
    email: string;
    name: string;
    imageUrl: string;
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        name: { label: "Name", type: "text" },
        email: { label: "Email", type: "email" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.name) return null;

        const [user] = await db
          .select()
          .from(users)
          .where(eq(users.email, String(credentials.email)));

        if (!user) {
          // optionally, auto-create user
          const [newUser] = await db
            .insert(users)
            .values({
              email: String(credentials.email),
              name:String(credentials.name),
              imageUrl: "https://via.placeholder.com/150", // or accept image input
            })
            .returning();

          return newUser;
        }

        return user;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.image = user.imageUrl;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string;
        session.user.email = token.email as string;
        session.user.name = token.name as string;
        session.user.image = token.image as string;
      }
      return session;
    },
  },
});
