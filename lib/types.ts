import { LucideIcon } from 'lucide-react'

export type ThemeState = {
  theme: 'dark' | 'light'
}

export type BoostState = {
  boosting: 'initial' | 'started' | 'finished'
  operations?: {
    [K in BoostConfigKeys]: {
      files: number
      done: boolean
    }
  }
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

export type BoostConfigKeys = 'delTempFiles' | 'delRecycleBin' | 'delUpdateCache'

export type BoostConfigState = {
  [K in BoostConfigKeys]: boolean
}

export type BoostConfigAction = {
  switchOption: (propName: keyof BoostConfigState) => void
}
