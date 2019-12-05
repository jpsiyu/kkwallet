const bip39 = require("bip39");
const bip32 = require("bip32");

const genMnemonic = (): string => {
  return bip39.generateMnemonic(256);
};

const genBip32Node = (mnemonic: string, password?: string): any => {
  const seed = bip39.mnemonicToSeedSync(mnemonic, password)
  const node = bip32.fromSeed(seed)
  return node
}

export default {
  genMnemonic,
  genBip32Node
};
