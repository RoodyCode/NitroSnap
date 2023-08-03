'use client'

import { MinusIcon, SettingsIcon, XIcon } from 'lucide-react'
import { Button } from './ui/button'
import Link from 'next/link'
import { useApi } from '@/lib/hooks'

const TitleBar = () => {
  const appWindow = useApi()
  const onMinimize = () => appWindow?.minimize()
  const onClose = () => appWindow?.close()
  return (
    <div data-tauri-drag-region className="absolute w-full flex justify-end p-5">
      <Button asChild variant={'ghost'} size={'icon'}>
        <Link href="/settings">
          <SettingsIcon strokeWidth={1.5} />
        </Link>
      </Button>
      <Button onClick={onMinimize} variant={'ghost'} size={'icon'}>
        <MinusIcon strokeWidth={1.5} />
      </Button>
      <Button onClick={onClose} variant={'ghost'} size={'icon'}>
        <XIcon strokeWidth={1.5} />
      </Button>
    </div>
  )
}

export default TitleBar
