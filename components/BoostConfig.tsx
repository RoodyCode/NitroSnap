import { FileClockIcon, FileCogIcon, Trash2Icon } from 'lucide-react'

import BoostOption from './BoostOption'
import { BoostOptionProps } from '@/lib/types'
import { ScrollArea } from './ui/scroll-area'

const BoostConfig = () => {
  const boostOptions: BoostOptionProps[] = [
    {
      icon: FileCogIcon,
      property: 'delUpdateCache',
      title: 'Windows System',
      description: 'Clean up Windows System'
    },
    {
      icon: FileClockIcon,
      property: 'delTempFiles',
      title: 'Temp Files',
      description: 'Remove temporary files'
    },
    {
      icon: Trash2Icon,
      property: 'delRecycleBin',
      title: 'Recycle Bin',
      description: 'Empty Recycle Bin'
    }
  ]
  return (
    <ScrollArea className="w-[65vw] grow">
      <div className="flex flex-col gap-2.5 ">
        {boostOptions.map((option, i) => (
          <BoostOption
            key={i}
            icon={option.icon}
            property={option.property}
            title={option.title}
            description={option.description}
          />
        ))}
      </div>
    </ScrollArea>
  )
}

export default BoostConfig
