import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import { Header } from '@/shared/components/header/Header'
import './globals.css'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SpiderLink',
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Header />
        <main className="flex flex-col px-[3.75rem] py-[2rem] gap-[3.75rem]">
          {children}
        </main>
      </body>
    </html>
  )
}
