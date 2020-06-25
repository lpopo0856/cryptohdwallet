const fs = require('fs');
const constants = require('bip44-constants');
const bip39 = require('bip39');
const HDKey = require('hdkey');
const assert = require('assert');

function createMasterWallet(lengthOfMnemonic = 12) {

    assert(lengthOfMnemonic <= 24 && lengthOfMnemonic >= 12, 'INVALID_ENTROPY')

    let c = lengthOfMnemonic * 11 / 33;
    let m = c * 32;

    assert(m % 32 === 0, 'INVALID_ENTROPY')
    
    // random mnemonic
    const mnemonic = bip39.generateMnemonic(m);
    // binary seed buffer
    const binarySeed = bip39.mnemonicToSeedSync(mnemonic);
    // hex
    const masterSeed = binarySeed.toString('hex');
    console.log('\x1b[33m%s\x1b[0m',`mnemonic: ${mnemonic}`);
    console.log('\x1b[32m%s\x1b[0m',`seed: ${masterSeed}`);
    console.log('\x1b[41m%s\x1b[0m',`WARNING: Keep your mnemonic carefully, it's the ONLY way to access your cryptocurrency.`);
    return mnemonic;
}

function getContantValueOfCoin(coinSymbol) {
    return (constants.filter((item) => item[1] === coinSymbol))[0];
}

function initRootPubKey(mnemonic) {
    createRootPubKey(mnemonic, 'main');
    createRootPubKey(mnemonic, 'change');
    return 'Success!';
}

function createRootPubKey(mnemonic, type) {
    let typeNum = 0;

    if (type === 'main') {
        typeNum = 0
    } else if (type === 'change') {
        typeNum = 1
    } else {
        throw new TypeError('Not support type');
    }

    const hdkey = HDKey.fromMasterSeed(bip39.mnemonicToSeedSync(mnemonic));

    if (!fs.existsSync('./crypto-root-keys.json')) {
        fs.writeFileSync('./crypto-root-keys.json', JSON.stringify({}), 'utf8');
    }

    const cryptoList = JSON.parse(fs.readFileSync(`${__dirname}/crypto-wallet-setting.json`, 'utf8'));
    const rootKeyList = JSON.parse(fs.readFileSync('./crypto-root-keys.json', 'utf8'));
    // reset the main root keys
    rootKeyList[`${type}`] = {};
    cryptoList.crypto.forEach((cryptoSet) => {
        const coinConstant = (getContantValueOfCoin(cryptoSet.name))[0];
        const childKeyRoot = hdkey.derive(`m/44'/${coinConstant - 2147483648}'/${typeNum}'/0`);
        rootKeyList[`${type}`][cryptoSet.name] = {
            chainCode: childKeyRoot.chainCode.toString('hex'),
            rootKey: childKeyRoot.publicKey.toString('hex'),
            UTXO: cryptoSet.UTXO,
        };
    });
    const jsonRootKeyList = JSON.stringify(rootKeyList);
    fs.writeFileSync('./crypto-root-keys.json', jsonRootKeyList, 'utf8');
    return;
}

exports.createMasterWallet = createMasterWallet;
exports.initRootPubKey = initRootPubKey;