import './globals.css'

import { Rubik } from 'next/font/google'
import type { Metadata } from 'next'

import Footer from '@/components/footer'

const rubik = Rubik({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  preload: true,
  variable: '--font-rubik'
})

export const metadata: Metadata = {
  title: 'Nextjs with Recharts by Franco Lloveras',
  description: 'A simple example of use Nextjs with Recharts'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <div className="flex h-screen flex-col gap-y-12 pb-4 pt-12">
          <header className="text-center">
            <h1 className="text-3xl font-semibold text-white">Next.js with Recharts</h1>
          </header>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
