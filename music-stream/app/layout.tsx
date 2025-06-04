import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/providers'
import { Sidebar } from '@/components/sidebar'
import { Player } from '@/components/player'
import { Header } from '@/components/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Music Stream',
  description: 'Your personal music streaming platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full bg-background text-white`}>
        <Providers>
          <div className="flex h-full">
            <Sidebar />
            <main className="flex-1 overflow-y-auto">
              <Header />
              <div className="px-6 py-4">
                {children}
              </div>
            </main>
          </div>
          <Player />
        </Providers>
      </body>
    </html>
  )
} 