const btcUtil = require('bitcoinjs-lib')
const ethUtil = require('ethereumjs-util')
const bchaddr = require('bchaddrjs')
const bchaddrSlp = require('bchaddrjs-slp')
const baseX = require('base-x')
const CreateHash = require('create-hash')
const base58 = require('bs58')
const coinExtends = require('./bitcoinjs-extensions')

function publicKeyToAddress (childPublicKey, coinSymbol) {
  switch (coinSymbol) {
    case 'ETH':
      return ethUtil.toChecksumAddress(`0x${ethUtil.pubToAddress(childPublicKey, true).toString('hex')}`)
    case 'BTC':
      return (btcUtil.payments.p2pkh({ pubkey: childPublicKey })).address
    case 'XRP':
      return convertRippleAdrr((btcUtil.payments.p2pkh({ pubkey: childPublicKey })).address)
    case 'EOS':
      return EOSbufferToPublic(childPublicKey)
    case 'BCH':
      return bchaddr.toCashAddress((btcUtil.payments.p2pkh({ pubkey: childPublicKey })).address)
    case 'SLP':
      return bchaddrSlp.toSlpAddress((btcUtil.payments.p2pkh({ pubkey: childPublicKey })).address)
    default:
      return (btcUtil.payments.p2pkh({ pubkey: childPublicKey, network: coinExtends.getExtend(coinSymbol) })).address
  }
}
/**
 *
 * This function refer from https://github.com/iancoleman/bip39/tree/f32b24e3807426d235fa5d808543001b9ee3ba39
 *
 * Please check github for more detail
 *
 */
function EOSbufferToPublic (pubBuf) {
  const EOS_PUBLIC_PREFIX = 'EOS'
  const checksum = new CreateHash('rmd160').update(pubBuf).digest('hex').slice(0, 8)
  pubBuf = Buffer.concat([pubBuf, Buffer.from(checksum, 'hex')])
  return EOS_PUBLIC_PREFIX.concat(base58.encode(pubBuf))
}
/**
 *
 * This function refer from https://github.com/iancoleman/bip39/tree/f32b24e3807426d235fa5d808543001b9ee3ba39
 *
 * Please check github for more detail
 *
 */
function convertRippleAdrr (address) {
  return baseX('rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz').encode(
    baseX('123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz').decode(address)
  )
}

exports.publicKeyToAddress = publicKeyToAddress
