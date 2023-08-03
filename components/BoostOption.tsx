import { Switch } from './ui/switch'
import { useBoostConfigStore } from '@/lib/store'
import { BoostConfigState, BoostOptionProps } from '@/lib/types'

const BoostOption = ({ ...props }: BoostOptionProps) => {
  const [boostOptionState, switchBoostOption] = useBoostConfigStore(state => [
    state[props.property],
    state.switchOption
  ])
  return (
    <div className=" flex items-center space-x-4 rounded-md border p-4">
      <props.icon />
      <div className="flex-1 space-y-1">
        <p className="text-sm font-medium leading-none">{props.title}</p>
        <p className="text-sm text-muted-foreground">{props.description}</p>
      </div>
      <Switch
        onCheckedChange={() => switchBoostOption(props.property)}
        checked={boostOptionState}
      />
    </div>
  )
}

export default BoostOption
