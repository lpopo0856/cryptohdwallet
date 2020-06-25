const fs = require('fs');
const constants = require('bip44-constants');
const bip39 = require('bip39');
const HDKey = require('hdkey');
const assert = require('assert');
const secp256k1 = require('secp256k1');
const crypto = require('crypto');
const pKeyToAddress = require('./pKeyToAddress');

function getAddress(coin_symbol, address_index = 0, accountType = 'main') {

    assert(accountType === 'main' || accountType === 'change', 'Not support type')

    var rootKeyList = JSON.parse(fs.readFileSync('./crypto-root-keys.json', 'utf8'));

    assert(rootKeyList[accountType][coin_symbol], 'Not support coin')

    var coin = rootKeyList[accountType][coin_symbol];

    var childPublicKey = (getPublicKeyFromRoot(bufferFromHex(coin.chainCode), address_index, bufferFromHex(coin.rootKey))).publicKey;

    return pKeyToAddress.publicKeyToAddress(childPublicKey, coin_symbol);
}

function getPublicKeyFromRoot(chainCode, index, publicKey) {
    var indexBuffer = Buffer.allocUnsafe(4)
    indexBuffer.writeUInt32BE(index, 0)

    // Normal child
    // data = serP(point(kpar)) || ser32(index)
    //      = serP(Kpar) || ser32(index)
    var data = Buffer.concat([publicKey, indexBuffer])

    var I = crypto.createHmac('sha512', chainCode).update(data).digest()
    var IL = I.slice(0, 32)

    try {
        PKey = Buffer.from(secp256k1.publicKeyTweakAdd(Buffer.from(publicKey), IL, true))
        assert(PKey.length === 33 || PKey.length === 65, 'Public key must be 33 or 65 bytes.')
        assert(secp256k1.publicKeyVerify(PKey) === true, 'Invalid public key')
        var newPublicKey = Buffer.from(secp256k1.publicKeyConvert(PKey, true))
        // throw if IL >= n || (g**IL + publicKey) is infinity
    } catch (err) {
        // In case parse256(IL) >= n or Ki is the point at infinity, one should proceed with the next value for i
        return this.deriveChild(chainCode, index + 1, publicKey)
    }

    var result = {
        publicKey: newPublicKey,
        _index: index
    };

    return result
}

function bufferFromHex(hex_content) {
    return Buffer.from(hex_content, 'hex');
}

exports.getAddress = getAddress;