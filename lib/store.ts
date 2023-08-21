import { create } from 'zustand'
import {
  ThemeState,
  BoostState,
  BoostAction,
  BoostConfigAction,
  BoostConfigState
} from './types'

const useThemeStore = create<ThemeState>(set => ({
  theme: 'dark'
}))

const useBoostStore = create<BoostState & BoostAction>(set => ({
  boosting: 'initial',
  setBoosting: value => set(() => ({ boosting: value }))
}))

const useBoostConfigStore = create<BoostConfigState & BoostConfigAction>(set => ({
  switchOption: propName => set(state => ({ [propName]: !state[propName] })),
  delTempFiles: true,
  delRecycleBin: false,
  delUpdateCache: true
}))

export { useThemeStore, useBoostStore, useBoostConfigStore }
