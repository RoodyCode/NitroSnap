import { Switch } from './ui/switch'
import { useBoostConfigStore, useBoostStore } from '@/lib/store'
import { BoostOptionProps } from '@/lib/types'
import { CheckIcon, Loader2 } from 'lucide-react'
import { motion } from 'framer-motion'

const BoostOption = ({ ...props }: BoostOptionProps) => {
  const [boosting] = useBoostStore(state => [state.boosting])
  const [boostOptionState, switchBoostOption] = useBoostConfigStore(state => [
    state[props.property],
    state.switchOption
  ])
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className=" flex items-center space-x-4 rounded-md border p-4"
    >
      <props.icon />
      <div className="flex-1 space-y-1">
        <p className="text-sm font-medium leading-none">{props.title}</p>
        <p className="text-sm text-muted-foreground">{props.description}</p>
      </div>
      {boosting == 'initial' ? (
        <Switch
          onCheckedChange={() => switchBoostOption(props.property)}
          checked={boostOptionState}
        />
      ) : boosting == 'started' ? (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        boosting == 'finished' && <CheckIcon className="mr-2 h-4 w-4" />
      )}
    </motion.div>
  )
}

export default BoostOption
