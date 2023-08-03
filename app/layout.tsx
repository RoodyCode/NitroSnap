import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

import { Toaster } from '@/components/ui/toaster'
import TitleBar from '@/components/TitleBar'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '300'] })

export const metadata: Metadata = {
  title: 'NitroSnap',
  description: 'NitroSnap'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className="dark" lang="en">
      <body className={`${poppins.className}`}>
        <TitleBar />
        <main className="flex flex-col gap-10 justify-between items-center h-[100vh] py-12 px-10">
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  )
}
