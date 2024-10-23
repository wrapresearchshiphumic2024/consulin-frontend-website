import Credentials from "next-auth/providers/credentials"
import type { NextAuthConfig } from "next-auth"
export default { providers: [
  Credentials({
    credentials: {
      email: { label: "Email" ,type:"email"},
      password: { label: "Password", type: "password" },
    },
    authorize: async (credentials) => {
      if (!credentials || !credentials.email || !credentials.password) {
        return null;
      }
      const email = credentials.email as string;
      const password = credentials.password as string;
      const user = await fetch(`${process.env.API_URL}/api/login`, { method: "POST",
          headers: {
              "Content-Type": "application/json",
          },   
          body: JSON.stringify({ email, password })
        }
      );
      const response = await user.json();
      if (response.status === 'success') {
        return response;
      } else {
        console.log("HTTP error! Status:", response.status);
        // Handle non-successful response here, return an appropriate JSON response.
        return { error: "Authentication failed" };
      }
      return null;
    },
  }) ] } satisfies NextAuthConfig