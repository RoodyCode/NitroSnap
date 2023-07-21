'use client'
import { Button } from '@/components/ui/button'
import { Fragment, useState } from 'react'
import { Loader2 } from 'lucide-react'

import {
  readDir,
  BaseDirectory,
  FileEntry,
  removeFile,
  removeDir
} from '@tauri-apps/api/fs'

export default function Home() {
  const [boost, setBoost] = useState(false)
  const [tempFiles, setTempFiles] = useState<FileEntry[]>([])
  const boostHandler = async () => {
    setBoost(true)

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

    setBoost(false)
  }
  return (
    <Fragment>
      <h1 className="mb-10 text-center scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        NitroSnap
      </h1>
      <div>
        <Button onClick={() => boostHandler()} size={'lg'}>
          {!boost ? 'Boost' : <Loader2 className="h-4 w-4 animate-spin" />}
        </Button>

        {tempFiles && <p className="mt-5">Temporary files deleted</p>}
      </div>
    </Fragment>
  )
}
