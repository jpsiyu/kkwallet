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

const saveKeystore = (keystore: any): void => {
  const fileName = 'UTC--' + new Date().toISOString() + '--' + keystore.address
  fs.writeFileSync(path.join(keystoreDir, fileName), JSON.stringify(keystore))
}

const getAllKeystore = (): any => {
  const files = fs.readdirSync(keystoreDir)
  const keystores = files.map((e: string): any => {
    const filePath = path.join(keystoreDir, e)
    const ksStr = fs.readFileSync(filePath, { encoding: 'utf8' })
    const ksObj = JSON.parse(ksStr)
    return ksObj
  })
  return keystores
}

export default {
  saveKeystore,
  getAllKeystore
}
