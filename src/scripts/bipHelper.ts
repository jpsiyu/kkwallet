const bip39 = require('bip39')

const random = (): string => {
  return bip39.generateMnemonic()
}