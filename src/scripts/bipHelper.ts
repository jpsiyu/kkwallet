const bip39 = require("bip39");

const random = (): string => {
  return bip39.generateMnemonic(256);
};

export default { random };
