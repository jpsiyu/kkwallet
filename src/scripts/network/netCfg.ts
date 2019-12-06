import { Net } from '@/scripts/network/netStruct.ts'

const available: Net[] = [
  new Net(1, 'Main Ethereum Network', 'red', ''),
  new Net(2, 'Ropsten Test Network', 'yellow', ''),
  new Net(3, 'Kovan Test Network', 'blue', ''),
  new Net(4, 'Rinkeby Test Network', 'green', ''),
]

export default {
  available
}
