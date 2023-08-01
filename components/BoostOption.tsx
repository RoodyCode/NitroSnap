import { FileClock } from 'lucide-react'
import { Switch } from './ui/switch'
import useBoostConfigStore from '@/lib/store'
import BoostConfig from '@/lib/types'

type BoostOptionProps = {
  title: string
  description: string
  property: keyof BoostConfig
}

const BoostOption = ({ ...props }: BoostOptionProps) => {
  const boostOption = useBoostConfigStore(state => state[props.property])
  return (
    <div className=" flex items-center space-x-4 rounded-md border p-4">
      <FileClock />
      <div className="flex-1 space-y-1">
        <p className="text-sm font-medium leading-none">{props.title}</p>
        <p className="text-sm text-muted-foreground">{props.description}</p>
      </div>
      <Switch onCheckedChange={test => console.log(test)} checked={boostOption} />
    </div>
  )
}

export default BoostOption
