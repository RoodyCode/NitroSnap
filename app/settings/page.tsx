'use client'
import AppVersion from '@/components/AppVersion'
import { ThemeToggle } from '@/components/ThemeToggle'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { ChevronLeft, SunIcon } from 'lucide-react'
import Link from 'next/link'
import { Fragment } from 'react'

export default function Home() {
  return (
    <Fragment>
      <ScrollArea className="w-[70vw] grow">
        <div className="flex flex-col gap-2.5 ">
          <div className=" flex items-center space-x-4 rounded-md border p-4">
            <SunIcon />
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium leading-none">Theme</p>
              <p className="text-sm text-muted-foreground">
                Select your desired theme mode
              </p>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </ScrollArea>
      <Button asChild size={'lg'} variant={'secondary'}>
        <Link href="/">
          <ChevronLeft className="mr-2 h-4 w-4" /> Back
        </Link>
      </Button>
    </Fragment>
  )
}
