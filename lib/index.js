const fs = require('fs')
const assert = require('assert')
const secp256k1 = require('secp256k1')
const crypto = require('crypto')
const pKeyToAddress = require('./pKeyToAddress')

function getAddress (coinSymbol, addressIndex = 0, accountType = 'main') {
  assert(accountType === 'main' || accountType === 'change', 'Not support type')

  var rootKeyList = JSON.parse(fs.readFileSync('./crypto-root-keys.json', 'utf8'))

  assert(rootKeyList[accountType][coinSymbol], 'Not support coin')

  var coin = rootKeyList[accountType][coinSymbol]

  var childPublicKey = (getPublicKeyFromRoot(bufferFromHex(coin.chainCode), addressIndex, bufferFromHex(coin.rootKey))).publicKey

  return pKeyToAddress.publicKeyToAddress(childPublicKey, coinSymbol)
}

function getPublicKeyFromRoot (chainCode, index, publicKey) {
  var indexBuffer = Buffer.allocUnsafe(4)
  indexBuffer.writeUInt32BE(index, 0)

  // Normal child
  // data = serP(point(kpar)) || ser32(index)
  //      = serP(Kpar) || ser32(index)
  var data = Buffer.concat([publicKey, indexBuffer])

  var I = crypto.createHmac('sha512', chainCode).update(data).digest()
  var IL = I.slice(0, 32)

  try {
    const PKey = Buffer.from(secp256k1.publicKeyTweakAdd(Buffer.from(publicKey), IL, true))
    assert(PKey.length === 33 || PKey.length === 65, 'Public key must be 33 or 65 bytes.')
    assert(secp256k1.publicKeyVerify(PKey) === true, 'Invalid public key')
    var newPublicKey = Buffer.from(secp256k1.publicKeyConvert(PKey, true))
    // throw if IL >= n || (g**IL + publicKey) is infinity
  } catch (err) {
    // In case parse256(IL) >= n or Ki is the point at infinity, one should proceed with the next value for i
    return this.getPublicKeyFromRoot(chainCode, index + 1, publicKey)
  }

  var result = {
    publicKey: newPublicKey,
    _index: index
  }

  return result
}

function bufferFromHex (hexContent) {
  return Buffer.from(hexContent, 'hex')
}

exports.getAddress = getAddress
