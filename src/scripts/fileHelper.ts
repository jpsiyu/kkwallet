const path = require('path')
const os = require('os')
const fs = require('fs')

const appDir = path.join(os.homedir(), ".kkwallet")
const keystoreDir = path.join(appDir, 'keystore')

if (!fs.existsSync(appDir)) {
  fs.mkdirSync(appDir)
}

if (!fs.existsSync(keystoreDir)) {
  fs.mkdirSync(keystoreDir)
}

const saveKeystore = (keystore: object): void => {
  console.log(keystore)
}

export default {
  saveKeystore
}
