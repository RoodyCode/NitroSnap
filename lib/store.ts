import { create } from 'zustand'
import { BoostConfigAction, BoostConfigState } from './types'

const useBoostConfigStore = create<BoostConfigState & BoostConfigAction>(set => ({
  switchOption: propName => {
    set(currState => ({ [propName]: !currState[propName] }))
  },
  delTempFiles: true,
  delRecycleBin: false,
  delUpdateCache: true
}))

export default useBoostConfigStore
