import { create } from 'zustand'
import BoostConfig from './types'

const useBoostConfigStore = create<BoostConfig>(set => ({
  delTempFiles: true,
  delRecycleBin: false
}))

export default useBoostConfigStore
