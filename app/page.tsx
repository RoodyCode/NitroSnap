'use client'
import { useToast } from '@/components/ui/use-toast'
import { Button } from '@/components/ui/button'
import { Fragment, useState } from 'react'
import { Loader2, Rocket } from 'lucide-react'

import {
  readDir,
  BaseDirectory,
  FileEntry,
  removeFile,
  removeDir
} from '@tauri-apps/api/fs'
import BoostConfig from '@/components/BoostConfig'

export default function Home() {
  const { toast } = useToast()
  const [boost, setBoost] = useState<'initial' | 'started' | 'finished'>('initial')
  const [tempFiles, setTempFiles] = useState<FileEntry[]>([])
  const boostHandler = async () => {
    setBoost('started')

    // Remove Temp Files
    setTempFiles(await readDir('', { dir: BaseDirectory.Temp }))
    try {
      const tempFilePromises = tempFiles?.map(async file => {
        if (file.children) await removeDir(file.path, { recursive: true })
        else await removeFile(file.path)
      })
      await Promise.all(tempFilePromises)
    } catch (err) {
      console.log(err)
    }

    setTimeout(() => {
      toast({ title: 'Performance boosted!', type: 'background', duration: 2000 })
      setBoost('finished')
    }, 1000)
  }
  return (
    <Fragment>
      <h1 className="text-center scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        NitroSnap
      </h1>
      <BoostConfig />
      <div>
        <Button disabled={boost === 'started'} onClick={() => boostHandler()} size={'lg'}>
          {boost !== 'started' ? (
            <Rocket className="mr-2 h-4 w-4" />
          ) : (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          )}
          Boost
        </Button>
      </div>
    </Fragment>
  )
}
