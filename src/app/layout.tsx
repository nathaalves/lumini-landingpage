import '@/styles/globals.css'
import { TRPCReactProvider } from '@/trpc/react'
import { GeistSans } from 'geist/font/sans'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Luminisol',
  icons: [{ rel: 'icon', url: '/favicon.ico' }]
}

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-br" className={`${GeistSans.variable}`}>
      <body suppressHydrationWarning>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  )
}
