import store from '@/store'
import { Net } from '@/scripts/network/netStruct'
import netCfg from '@/scripts/network/netCfg'
import fileHelper from '@/scripts/fileHelper'

const init = (): Promise<any> => {
  return Promise.resolve()
    .then(() => {
      const current: Net = netCfg.available[0]
      store.commit('setNet', current)
    })
    .then(() => {
      const keystores = fileHelper.getAllKeystore()
      const first = keystores.length ? keystores[0] : null
      store.commit('setAcc', first)
    })
}

export default { init }