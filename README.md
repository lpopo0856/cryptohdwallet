# CryptoHDWallet

## This project is a HD wallet address generator with private and public key separated. 

It can be used to generate multiple kinds of cryptocurrency address without exposing the private key. 

And because it is a HD wallet, you only need to remember one mnemonic.

This project complies with the relevant specifications of [BIP-44](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki)

## Supported cryptocurrency

[BTC](https://bitcoin.org/) , [ETH](https://ethereum.org/) , [BCH](https://www.bitcoincash.org/) , [SLP](https://simpleledger.cash/) , [BSV](https://bitcoinsv.com/) , [DASH](https://www.dash.org/) , [LTC](https://litecoin.org/) , [DOGE](https://dogecoin.com/) , [EOS](https://eos.io/) , [XRP](https://ripple.com/xrp/) , [NAV](https://navcoin.org/en)  , [STRAT](https://www.stratisplatform.com/)


Getting Started
------------
### Install

``` shell
$   npm i --save cryptohdwallet
```

### Initialize with CLI Tool

Run the init command in your project directory:

``` shell
$   cryptohdwallet init
```

The cli tool will help you setup a **crypto-root-keys.json** file in the root directory of your project.


Usage
-----

**example:**

```js
var cryptohdwallet = require('cryptohdwallet');

// number of the address derived from root, should be lower than 2^31
var count = 0;

// you should define your coin symbol at upper case
var mainBTCAddress = cryptohdwallet.getAddress('BTC', count,'main');
var changeBTCAddress = cryptohdwallet.getAddress('BTC', count,'change');

console.log(mainBTCAddress);
// => '19rF4MDgHLcqMUWBqPEPQgZ65cz549h9CX'
console.log(changeBTCAddress);
// => '13CmhUZ27p5Z26P6ELBmTsrxUTkafxLmDT'

// ethereum has no change address, you should always use 'main' as type
var ETHAddress = cryptohdwallet.getAddress('ETH', count,'main');

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
