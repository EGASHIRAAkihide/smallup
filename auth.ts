import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  callbacks: {
    authorized: async ({ auth }) => {
      return !!auth
    },
    signIn: async ({ user }) => {
      try {
        const existingUser = await prisma.user.findUnique({
          where: { email: user.email as string },
        })

        if (!existingUser) {
          await prisma.user.create({
            data: {
              email: user.email as string,
              name: user.name as string,
              image: user.image as string,
            },
          })
        } else {
          await prisma.user.update({
            where: { email: user.email as string },
            data: {
              name: user.name as string,
              image: user.image as string,
            },
          })
        }

        return true
      } catch (error) {
        console.error("Error saving user to database:", error)
        return false
      }
    },
  },
  providers: [Google],
})
