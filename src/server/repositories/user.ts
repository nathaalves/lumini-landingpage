import { db } from '../db'

export const getUserByEmail = async (email: string) => {
  const user = await db.user.findUnique({
    where: { email }
  })

  return user
}
