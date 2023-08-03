'use client'

import { MinusIcon, SettingsIcon, XIcon } from 'lucide-react'
import { Button } from './ui/button'
import { useEffect, useState } from 'react'
import { WebviewWindow } from '@tauri-apps/api/window'
import Link from 'next/link'

const TitleBar = () => {
  const [appWindow, setAppWindow] = useState<WebviewWindow | null>(null)

  const setupAppWindow = async () => {
    const appWindow = (await import('@tauri-apps/api/window')).appWindow
    setAppWindow(appWindow)
  }

  useEffect(() => {
    setupAppWindow()
  }, [])

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
