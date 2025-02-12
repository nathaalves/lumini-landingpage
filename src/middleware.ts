// import { authConfig } from '@/server/auth/auth-config'
// import NextAuth from 'next-auth'

// const { auth } = NextAuth(authConfig)

// export default auth((req) => {
//   if (!req.auth && req.nextUrl.pathname !== '/sign-in') {
//     const newUrl = new URL('/sign-in', req.nextUrl.origin)
//     return Response.redirect(newUrl)
//   }
// })

// export const config = {
//   matcher: [
//     // Skip Next.js internals and all static files, unless found in search params
//     '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
//     // Always run for API routes
//     '/(api|trpc)(.*)'
//   ]
// }

export default function middleware() {
  return null
}
