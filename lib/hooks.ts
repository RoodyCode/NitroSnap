import { WebviewWindow } from '@tauri-apps/api/window'
import { useEffect, useState } from 'react'

export const useApi = () => {
  const [appWindow, setAppWindow] = useState<WebviewWindow | null>(null)

  const setupAppWindow = async () => {
    const appWindow = (await import('@tauri-apps/api/window')).appWindow
    setAppWindow(appWindow)
  }

  useEffect(() => {
    setupAppWindow()
  }, [])

  return appWindow
}
