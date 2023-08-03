'use client'
import AppVersion from '@/components/AppVersion'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import { Fragment } from 'react'

export default function Home() {
  return (
    <Fragment>
      <ScrollArea className="w-[65vw] grow"></ScrollArea>
      <Button asChild size={'lg'} variant={'secondary'}>
        <Link href="/">
          <ChevronLeft className="mr-2 h-4 w-4" /> Back
        </Link>
      </Button>
    </Fragment>
  )
}
