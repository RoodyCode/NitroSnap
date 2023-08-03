import { create } from 'zustand'
import { BoostState, BoostAction, BoostConfigAction, BoostConfigState } from './types'

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

export { useBoostStore, useBoostConfigStore }
