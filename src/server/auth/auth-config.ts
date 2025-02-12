import { signInSchema } from '@/schemas/auth'
import { type DefaultSession, type NextAuthConfig } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

import { compareHash } from '@/lib/hash'

import { getUserByEmail } from '../repositories/user'

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: {
      id: string
    } & DefaultSession['user']
  }
}

export const authConfig = {
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {}
      },
      authorize: async (credentials) => {
        const validatedFields = await signInSchema.safeParseAsync(credentials)

        if (!validatedFields.success) {
          throw new Error('Credenciais inválidas')
        }

        const { email, password } = validatedFields.data

        const user = await getUserByEmail(email)

        if (!user || !(await compareHash(password, user.password))) {
          throw new Error('Credenciais inválidas')
        }

        return user
      }
    })
  ]
} satisfies NextAuthConfig
