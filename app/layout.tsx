import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Toaster } from '@/components/ui/toaster'
import TitleBar from '@/components/TitleBar'
import { Badge } from '@/components/ui/badge'
import { ThemeProvider } from '@/components/ThemeProvider'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '300'] })

export const metadata: Metadata = {
  title: 'NitroSnap',
  description: 'NitroSnap'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TitleBar />
          <main className="flex flex-col gap-10 justify-between items-center h-[100vh] py-12 px-10">
            <h1 className="text-center scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              NitroSnap
              <Badge className="ml-2 font-normal tracking-normal" variant={'secondary'}>
                Beta
              </Badge>
            </h1>
            {children}
          </main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
