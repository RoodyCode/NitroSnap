import './globals.css'
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '300'] })

export const metadata: Metadata = {
  title: 'NitroSnap',
  description: 'NitroSnap'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className="dark" lang="en">
      <body className={`${inter.className} ${poppins.className}`}>
        <main className="flex flex-col gap-10 justify-between items-center h-[100vh] py-12 px-10">
          {children}
        </main>
      </body>
    </html>
  )
}
