import { LucideIcon } from 'lucide-react'

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
