const Web3 = require('web3')
const web3 = new Web3()

const encryptPrivKey = (privKey: string, password: string): object => {
  const obj = web3.eth.accounts.encrypt(privKey, password)
  return obj
}

const decryptKeystore = (keystore: object, password: string): object => {
  const obj = web3.eth.accounts.decrypt(keystore, password)
  return obj
}

export default {
  encryptPrivKey,
  decryptKeystore
}
