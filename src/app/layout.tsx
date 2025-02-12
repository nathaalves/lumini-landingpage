import '@/styles/globals.css'
import { TRPCReactProvider } from '@/trpc/react'
import { type Metadata } from 'next'
import { Poppins } from 'next/font/google'

import { cn } from '@/lib/cn'

export const metadata: Metadata = {
  title: 'Luminisol',
  icons: [{ rel: 'icon', url: '/favicon.ico' }]
}

const poppins = Poppins({
  weight: ['400', '500', '700'],
  display: 'swap',
  subsets: ['latin']
})

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-br" className={cn(poppins.className)}>
      <body suppressHydrationWarning>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  )
}
