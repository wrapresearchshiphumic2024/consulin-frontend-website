import Credentials from "next-auth/providers/credentials";
import type { NextAuthConfig } from "next-auth";


export default {
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        if (!credentials || !credentials.email || !credentials.password) {
          throw new Error("Email and password are required");
        }

        try {
          const email = credentials.email as string;
          const password = credentials.password as string;
          const response = await fetch(`${process.env.API_URL}/api/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
          });

          // Cek jika response dari server adalah error
          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Authentication failed");
          }

          const user = await response.json();

          // Validasi sukses dari response
          if (user && user.status === "success") {
            return user.data;
          }
          if(user.status === "error"){
            throw new Error(user.message || "Authentication failed");
          }

          return null ;
        } catch (error : any) {
      
          throw new Error(error.message || "Authentication failed");
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, user }) {

      session.user = user;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
  pages: {
    signIn: '/signin',

  },
} satisfies NextAuthConfig;
