import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import Line from "next-auth/providers/line"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  callbacks: {
    authorized: async ({ auth }) => {
      // Logged in users are authenticated, otherwise redirect to login page
      return !!auth
    },
  },
  providers: [Google, Line],
})
