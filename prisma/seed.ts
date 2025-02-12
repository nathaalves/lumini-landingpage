import { PrismaClient } from '@prisma/client'

import { createHash } from '../src/lib/hash'

const prisma = new PrismaClient()

async function main() {
  if (process.env.NODE_ENV !== 'production') {
    const name = 'Dev User'
    const email = 'dev@dev.email'
    const password = 'devpassword'

    const passwordHash = await createHash(password)

    await prisma.user.upsert({
      where: { email },
      update: {},
      create: {
        name,
        email,
        password: passwordHash
      }
    })
  }
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
