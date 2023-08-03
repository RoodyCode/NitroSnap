import { LucideIcon } from 'lucide-react'

export type BoostState = {
  boosting: 'initial' | 'started' | 'finished'
}

export type BoostAction = {
  setBoosting: (newState: BoostState['boosting']) => void
}

export type BoostOptionProps = {
  title: string
  description: string
  icon: LucideIcon
  property: keyof BoostConfigState
}

export type BoostConfigState = {
  delTempFiles: boolean
  delRecycleBin: boolean
  delUpdateCache: boolean
}

export type BoostConfigAction = {
  switchOption: (propName: keyof BoostConfigState) => void
}
