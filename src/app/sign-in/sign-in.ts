'use server'

import { signIn as authSignIn } from '@/server/auth'

export const signIn = async (data: { email: string; password: string }) => {
  await authSignIn('credentials', { ...data, redirectTo: '/' })
}
