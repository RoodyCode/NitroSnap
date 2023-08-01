import { FileClock } from 'lucide-react'
import { Switch } from './ui/switch'

type BoostOptionProps = {
  title: string
  description: string
}

const BoostOption = ({ ...props }: BoostOptionProps) => (
  <div className=" flex items-center space-x-4 rounded-md border p-4">
    <FileClock />
    <div className="flex-1 space-y-1">
      <p className="text-sm font-medium leading-none">{props.title}</p>
      <p className="text-sm text-muted-foreground">{props.description}</p>
    </div>
    <Switch />
  </div>
)

export default BoostOption
