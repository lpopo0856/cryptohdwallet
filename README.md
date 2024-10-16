# CryptoHDWallet

[![Standard - JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

## Overview

CryptoHDWallet is an HD wallet address generator that separates public and private keys. It supports generating multiple cryptocurrency addresses without exposing the private key.

As an HD wallet, it only requires you to remember one mnemonic phrase.

This project follows the relevant specifications of [BIP-44](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki).

## Supported Cryptocurrencies

- [BTC](https://bitcoin.org/)
- [ETH](https://ethereum.org/)
- [BCH](https://www.bitcoincash.org/)
- [SLP](https://simpleledger.cash/)
- [BSV](https://bitcoinsv.com/)
- [DASH](https://www.dash.org/)
- [LTC](https://litecoin.org/)
- [DOGE](https://dogecoin.com/)
- [EOS](https://eos.io/)
- [XRP](https://ripple.com/xrp/)
- [NAV](https://navcoin.org/en)
- [STRAT](https://www.stratisplatform.com/)

## Getting Started

### Installation

```shell
$ npm i --save cryptohdwallet
```

Add script to your **package.json** file

``` json
"scripts": {
    "init-wallet": "crypto-hdwallet init"
},
```

### Initialize with CLI Tool

Run the init-wallet command in your project directory:

``` shell
$   npm run init-wallet
```

The CLI tool will guide you through setting up a crypto-root-keys.json file in the root directory of your project.


Usage
-----

**example:**

```js
var cryptohdwallet = require('cryptohdwallet');

// Number of addresses derived from the root, should be less than 2^31
var count = 0;

// Define your coin symbol in uppercase
var mainBTCAddress = cryptohdwallet.getAddress('BTC', count, 'main');
var changeBTCAddress = cryptohdwallet.getAddress('BTC', count, 'change');

console.log(mainBTCAddress);
// => '19rF4MDgHLcqMUWBqPEPQgZ65cz549h9CX'
console.log(changeBTCAddress);
// => '13CmhUZ27p5Z26P6ELBmTsrxUTkafxLmDT'

// Ethereum does not use a change address, always use 'main' as the type
var ETHAddress = cryptohdwallet.getAddress('ETH', count, 'main');

console.log(ETHAddress);
// => '0xF444640DE9531335eFC535147b131343c74258d0'
```


Useful Link
----------
- https://github.com/cryptocoinjs/hdkey/tree/3f3c0b5cedb98f971835b5116ebea05b3c09422a
- https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki
- https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki
- https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki
- https://iancoleman.io/bip39/


License
-------

MIT
