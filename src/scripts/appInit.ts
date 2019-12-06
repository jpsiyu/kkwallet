import store from '@/store'
import { Net } from '@/scripts/network/netStruct'
import netCfg from '@/scripts/network/netCfg'

const init = (): Promise<any> => {
  return Promise.resolve()
    .then(() => {
      const current: Net = netCfg.available[0]
      store.commit('setNet', current)
    })
}

export default { init }