import { Net } from '@/scripts/network/netStruct.ts'

const available: Net[] = [
  new Net(1, 'Main Ethereum Network', 'darkseagreen', ''),
  new Net(2, 'Ropsten Test Network', 'palevioletred', ''),
  new Net(3, 'Kovan Test Network', 'blueviolet', ''),
  new Net(4, 'Rinkeby Test Network', 'orange', ''),
]

export default {
  available
}
