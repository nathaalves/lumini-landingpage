import bcrypt from 'bcryptjs'

export const createHash = async (password: string) => {
  const salt = await bcrypt.genSalt(10)
  return await bcrypt.hash(password, salt)
}

export const compareHash = bcrypt.compare
