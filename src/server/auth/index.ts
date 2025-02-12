import { PrismaAdapter } from '@auth/prisma-adapter'
import NextAuth from 'next-auth'
import { cache } from 'react'

import { db } from '../db'
import { authConfig } from './auth-config'

const {
  auth: uncachedAuth,
  handlers,
  signIn,
  signOut
} = NextAuth({
  ...authConfig,
  adapter: PrismaAdapter(db),
  session: { strategy: 'jwt' },
  callbacks: {
    async session({ token, session }) {
      if (!token.sub) return session

      session.user = { ...session.user, id: token.sub }

      return session
    }
  },
  debug: true
})

const auth = cache(uncachedAuth)

export { auth, handlers, signIn, signOut }
