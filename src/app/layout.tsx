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
    <html lang="pt-br">
      <body className={nunito.className}>
        <div>
          <Header />
          <main className="flex flex-col items-center px-[3.75rem] py-[2rem] gap-[3.75rem] max-md:px-[2rem] max-sm:px-[1rem]">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
