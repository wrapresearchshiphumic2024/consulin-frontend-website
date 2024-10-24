import NextAuth from "next-auth";
import authConfig from "./auth.config";
 
export const { handlers, signIn, signOut, auth } = NextAuth({
    secret: process.env.AUTH_SECRET,
    session:{strategy: "jwt"},
    ...authConfig, callbacks: {
      // authorized({ request, auth }) {
      //   const { pathname } = request.nextUrl
      //   if (pathname === "/middleware-example") return !!auth
      //   return true
      // },
      async jwt({ token,user}) {
        if (user) {
            token.user = user
            token.accessToken = user.access_token
          }
          return token
      },
      async session({ session, token }) {
        session.user = token.user;
        session.accessToken = token.access_token as string;
        return session
      },
  
      async redirect({ url, baseUrl ,}){
        return '/';
      }
    },
    pages: {
      signIn: "/signin",
    },
})