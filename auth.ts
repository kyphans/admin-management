import NextAuth, { type NextAuthConfig } from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import prisma from "./lib/prisma"

/**
 * The authentication configuration for the application.
 * 
 * @type {NextAuthConfig}
 * @property {Array} providers - An array of authentication providers.
 * @property {Object} adapter - The adapter used for database integration.
 *                              Creating a database adapter [https://authjs.dev/guides/creating-a-database-adapter]
 * @property {Object} callbacks - Callback functions for various authentication events.
 */
export const config: NextAuthConfig = {
  providers: [GitHub, Google],
  adapter: PrismaAdapter(prisma),
  callbacks: {
    async redirect({ url, baseUrl }) {
      return '/'
    }
  },
  pages: {
    signIn: '/sign-in',
    // signOut: '/auth/sign-out',
    // error: '/auth/error',
    // verifyRequest: '/auth/verify-request',
    // newUser: '/auth/new-user'
  }
}

/**
 * This code is exporting several items from the NextAuth configuration.
 * 
 * @param {Object} auth - The main NextAuth object for handling authentication.
 * @param {Array} handlers - An array of custom handlers for various authentication events.
 * @param {Function} signIn - A function to handle sign-in events.
 * @param {Function} signOut - A function to handle sign-out events.
 */
export const { auth, handlers, signIn, signOut } = NextAuth(config)