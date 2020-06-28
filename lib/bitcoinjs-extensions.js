/**
 *
 * This file refer from https://github.com/iancoleman/bip39/tree/f32b24e3807426d235fa5d808543001b9ee3ba39
 *
 * wrote by @iancoleman , Please check github for more detail
 *
 */

// libs_bitcoin_networks_shadow = {
//   messagePrefix: 'unused',
//   bip32: {
//     public: 0xEE80286A,
//     private: 0xEE8031E8
//   },
//   pubKeyHash: 0x3f,
//   scriptHash: 0x7d,
//   wif: 0xbf
// }

// libs_bitcoin_networks_shadowtn = {
//   messagePrefix: 'unused',
//   bip32: {
//     public: 0x76C0FDFB,
//     private: 0x76C1077A
//   },
//   pubKeyHash: 0x7f,
//   scriptHash: 0xc4,
//   wif: 0xff
// }

// libs_bitcoin_networks_clam = {
//   messagePrefix: 'unused',
//   bip32: {
//     public: 0xa8c26d64,
//     private: 0xa8c17826
//   },
//   pubKeyHash: 0x89,
//   scriptHash: 0x0D,
//   wif: 0x85
// }

// libs_bitcoin_networks_crown = {
//   messagePrefix: 'unused',
//   bip32: {
//     public: 0x0488b21e,
//     private: 0x0488ade4
//   },
//   pubKeyHash: 0x00,
//   scriptHash: 0x05,
//   wif: 0x80,
//   toNewAddress: function(oldAddress)
//   {
//     var ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'
//     var b58 =  libs_basex(ALPHABET);

//     var addrBytes = b58_decode(oldAddress);

//     var hash160 = libs_buffer_Buffer_from(new Uint16Array(23));
//     hash160[0]= 0x01; //C
//     hash160[1]= 0x75; //R
//     hash160[2]= 0x07; //W
//     addrBytes_copy(hash160, 3, 1, 21);

//     var checksum = libs_bitcoin_crypto_hash256(hash160).subarray(0, 4);
//     var binaryAddr = libs_buffer_Buffer_from(new Uint16Array(27));
//     binaryAddr_set(hash160,0);
//     checksum_copy(binaryAddr, 23, 0, 4);
//     var newAddress = b58_encode(binaryAddr);
//     return newAddress;
//   }
// };

const libsBitcoinNetworksDash = {
  messagePrefix: 'unused',
  bip32: {
    public: 0x0488b21e,
    private: 0x0488ade4
  },
  pubKeyHash: 0x4c,
  scriptHash: 0x10,
  wif: 0xcc
}

// libs_bitcoin_networks_maza = {
//   messagePrefix: 'unused',
//   bip32: {
//     public: 0x0488b21e,
//     private: 0x0488ade4
//   },
//   pubKeyHash: 0x32,
//   scriptHash: 0x09,
//   wif: 0xe0
// }

// libs_bitcoin_networks_dashtn = {
//   messagePrefix: 'unused',
//   bip32: {
//     public: 0x043587cf,
//     private: 0x04358394
//   },
//   pubKeyHash: 0x8c,
//   scriptHash: 0x13,
//   wif: 0xef
// }

// libs_bitcoin_networks_game = {
//   messagePrefix: 'unused',
//   bip32: {
//     public: 0x0488b21e,
//     private: 0x0488ade4
//   },
//   pubKeyHash: 0x26,
//   scriptHash: 0x05,
//   wif: 0xa6
// }

// libs_bitcoin_networks_namecoin = {
//   messagePrefix: 'unused',
//   bip32: {
//     public: 0x0488b21e,
//     private: 0x0488ade4
//   },
//   pubKeyHash: 0x34,
//   scriptHash: 0x0D,
//   wif: 0x80
// }

// libs_bitcoin_networks_peercoin = {
//   messagePrefix: 'unused',
//   bip32: {
//     public: 0x0488b21e,
//     private: 0x0488ade4
//   },
//   pubKeyHash: 0x37,
//   scriptHash: 0x75,
//   wif: 0xb7
// }

// libs_bitcoin_networks_axe = {
//   messagePrefix: 'unused',
//   bip32: {
//     public: 0x0488b21e,
//     private: 0x0488ade4
//   },
//   pubKeyHash: 0x37,
//   scriptHash: 0x10, // TODO set this correctly
//   wif: 0xcc
// }

// libs_bitcoin_networks_slimcoin = {
//   messagePrefix: 'unused',
//   bip32: {
//     public: 0xef6adf10,
//     private: 0xef69ea80
//   },
//   pubKeyHash: 0x3f,
//   scriptHash: 0x7d,
//   wif: 0x46
// }

// libs_bitcoin_networks_slimcointn = {
//   messagePrefix: 'unused',
//   bip32: {
//     public: 0x043587CF,
//     private: 0x04358394
//   },
//   pubKeyHash: 0x6f,
//   scriptHash: 0xc4,
//   wif: 0x57
// }

const libsBitcoinNetworksDogecoin = {
  messagePrefix: '\x19Dogecoin Signed Message:\n',
  bip32: {
    public: 0x02facafd,
    private: 0x02fac398
  },
  pubKeyHash: 0x1e,
  scriptHash: 0x16,
  wif: 0x9e
}

// libs_bitcoin_networks_dogecointestnet = {
//   messagePrefix: '\x19Dogecoin Signed Message:\n',
//   bip32: {
//     public: 0x043587cf,
//     private: 0x04358394
//   },
//   pubKeyHash: 0x71,
//   scriptHash: 0xc4,
//   wif: 0xf1
// }

// libs_bitcoin_networks_denarius = {
//   messagePrefix: '\x19Denarius Signed Message:\n',
//   bip32: {
//     public: 0x0488b21e,
//     private: 0x0488ade4
//   },
//   pubKeyHash: 0x1e,
//   scriptHash: 0x5a,
//   wif: 0x9e
// }

// libs_bitcoin_networks_neblio = {
//   messagePrefix: '\x18Neblio Signed Message:\n',
//   bip32: {
//     public: 0x0488b21e,
//     private: 0x0488ade4
//   },
//   pubKeyHash: 0x35,
//   scriptHash: 0x70,
//   wif: 0xb5
// }

// libs_bitcoin_networks_viacoin = {
//   messagePrefix: '\x18Viacoin Signed Message:\n',
//   bip32: {
//     public: 0x0488b21e,
//     private: 0x0488ade4
//   },
//   pubKeyHash: 0x47,
//   scriptHash: 0x21,
//   wif: 0xc7
// }

// libs_bitcoin_networks_viacointestnet = {
//   messagePrefix: '\x18Viacoin Signed Message:\n',
//   bip32: {
//     public: 0x043587cf,
//     private: 0x04358394
//   },
//   pubKeyHash: 0x7f,
//   scriptHash: 0xc4,
//   wif: 0xff
// }

// libs_bitcoin_networks_gamerscoin = {
//   messagePrefix: '\x19Gamerscoin Signed Message:\n',
//   bip32: {
//     public: 0x019da462,
//     private: 0x019d9cfe
//   },
//   pubKeyHash: 0x26,
//   scriptHash: 0x05,
//   wif: 0xA6
// }

// libs_bitcoin_networks_jumbucks = {
//   messagePrefix: '\x19Jumbucks Signed Message:\n',
//   bip32: {
//     public: 0x037a689a,
//     private: 0x037a6460
//   },
//   pubKeyHash: 0x2b,
//   scriptHash: 0x05,
//   wif: 0xab
// }

// libs_bitcoin_networks_zetacoin = {
//   messagePrefix: '\x18Zetacoin Signed Message:\n',
//   bip32: {
//     public: 0x0488b21e,
//     private: 0x0488ade4
//   },
//   pubKeyHash: 0x50,
//   scriptHash: 0x09,
//   wif: 0xe0
// }

// libs_bitcoin_networks_myriadcoin = {
//   messagePrefix: 'unused',
//   bip32: {
//     public: 0x0488b21e,
//     private: 0x0488ade4
//   },
//   pubKeyHash: 0x32,
//   scriptHash: 0x09,
//   wif: 0xb2
// }

// libs_bitcoin_networks_bolivarcoin = {
//   messagePrefix: 'Bolivarcoin Signed Message:\n',
//   bip32: {
//     public: 0x0488b21e,
//     private: 0x0488ade4
//   },
//   pubKeyHash: 0x55,
//   scriptHash: 0x05,
//   wif: 0xD5
// }

// libs_bitcoin_networks_onixcoin = {
//   messagePrefix: 'ONIX Signed Message:\n',
//   bip32: {
//     public: 0x0488b21e,
//     private: 0x0488ade4
//   },
//   pubKeyHash: 0x4B,
//   scriptHash: 0x05,
//   wif: 0xCB
// }

// libs_bitcoin_networks_lkrcoin = {
//   messagePrefix: '\x18LKRcoin Signed Message:\n',
//   bip32: {
//     public: 0x0488b21e,
//     private: 0x0488ade4
//   },
//   pubKeyHash: 0x30,
//   scriptHash: 0x55,
//   wif: 0xB0
// }

// libs_bitcoin_networks_pivx = {
//   messagePrefix: 'unused',
//   bip32: {
//     public: 0x022d2533,
//     private: 0x0221312b
//   },
//   pubKeyHash: 0x1e,
//   scriptHash: 0x0d,
//   wif: 0xd4
// }

// libs_bitcoin_networks_pivxtestnet = {
//   messagePrefix: 'unused',
//   bip32: {
//     public: 0x3a8061a0,
//     private: 0x3a805837
//   },
//   pubKeyHash: 0x8b,
//   scriptHash: 0x13,
//   wif: 0xef
// }

// libs_bitcoin_networks_fix = {
//   messagePrefix: 'unused',
//   bip32: {
//     public: 0x022d2533,
//     private: 0x0221312b
//   },
//   pubKeyHash: 0x23,
//   scriptHash: 0x5F,
//   wif: 0x3C
// }

// libs_bitcoin_networks_fixtestnet = {
//   messagePrefix: 'unused',
//   bip32: {
//     public: 0x3a8061a0,
//     private: 0x3a805837
//   },
//   pubKeyHash: 0x4c,
//   scriptHash: 0x89,
//   wif: 0xED
// }

// libs_bitcoin_networks_fujicoin = {
//   messagePrefix: '\x19FujiCoin Signed Message:\n',
//   bip32: {
//     public: 0x0488b21e,
//     private: 0x0488ade4
//   },
//   pubKeyHash: 0x24,
//   scriptHash: 0x10,
//   wif: 0xa4
// }

// libs_bitcoin_networks_nubits = {
//   messagePrefix: '\x18Nu Signed Message:\n',
//   bip32: {
//     public: 0x0488b21e,
//     private: 0x0488ade4
//   },
//   pubKeyHash: 0x19,
//   scriptHash: 0x1a,
//   wif: 0x96
// }

// libs_bitcoin_networks_bgold = {
//   messagePrefix: '\x1DBitcoin Gold Signed Message:\n',
//   bip32: {
//     public: 0x0488b21e,
//     private: 0x0488ade4
//   },
//   pubKeyHash: 38,
//   scriptHash: 23,
//   wif: 128
// }

// libs_bitcoin_networks_monacoin = {
//   messagePrefix: '\x18Monacoin Signed Message:\n',
//   bip32: {
//     public: 0x0488b21e,
//     private: 0x0488ade4
//   },
//   pubKeyHash: 0x32,
//   scriptHash: 0x37,
//   wif: 0xb0
// }

const libsBitcoinNetworksLitecoinXprv = {
  messagePrefix: '\x19Litecoin Signed Message:\n',
  bip32: {
    public: 0x0488b21e,
    private: 0x0488ade4
  },
  pubKeyHash: 0x30,
  scriptHash: 0x32,
  wif: 0xb0
}

// libs_bitcoin_networks_komodo = {
//   messagePrefix: '\x18Komodo Signed Message:\n',
//   bip32: {
//     public: 0x0488B21E,
//     private: 0x0488ADE4
//   },
//   pubKeyHash: 0x3c,
//   scriptHash: 0x55,
//   wif: 0xbc
// }

// libs_bitcoin_networks_blackcoin = {
//   messagePrefix: '\x18BlackCoin Signed Message:\n',
//   bip32: {
//     public: 0x02CFBEDE,
//     private: 0x02CFBF60
//   },
//   pubKeyHash: 0x19,
//   scriptHash: 0x55,
//   wif: 0x99
// }

// libs_bitcoin_networks_beetlecoin = {
//   messagePrefix: '\x19Beetlecoin Signed Message:\n',
//   bip32: {
//     public: 0x0488b21e,
//     private: 0x0488ade4
//   },
//   pubKeyHash: 0x1A,
//   scriptHash: 0x55,
//   wif: 0x99
// }

// libs_bitcoin_networks_adcoin = {
//   messagePrefix: '\x18AdCoin Signed Message:\n',
//   bip32: {
//     public: 0x0488B21E,
//     private: 0x0488ADE4
//   },
//   pubKeyHash: 0x17,
//   scriptHash: 0x05,
//   wif: 0xb0
// }

// libs_bitcoin_networks_asiacoin = {
//   messagePrefix: '\x18AsiaCoin Signed Message:\n',
//   bip32: {
//     public: 0x0488b21e,
//     private: 0x0488ade4
//   },
//   pubKeyHash: 0x17,
//   scriptHash: 0x08,
//   wif: 0x97
// }

// libs_bitcoin_networks_auroracoin = {
//   messagePrefix: '\x18AuroraCoin Signed Message:\n',
//   bip32: {
//     public: 0x0488b21e,
//     private: 0x0488ade4
//   },
//   pubKeyHash: 0x17,
//   scriptHash: 0x05,
//   wif: 0x97
// }

// libs_bitcoin_networks_bata = {
//   messagePrefix: '\x18Bata Signed Message:\n',
//   bip32: {
//     public: 0xA40C86FA,
//     private: 0xA40B91BD
//   },
//   pubKeyHash: 0x19,
//   scriptHash: 0x05,
//   wif: 0xa4
// }

// libs_bitcoin_networks_belacoin = {
//   messagePrefix: '\x18BelaCoin Signed Message:\n',
//   bip32: {
//     public: 0x0488b21e,
//     private: 0x0488ade4
//   },
//   pubKeyHash: 0x19,
//   scriptHash: 0x05,
//   wif: 0x99
// }

// libs_bitcoin_networks_atom = {
//   messagePrefix: '\x18Bitcoin Signed Message:\n',
//   bip32: {
//     public: 0x0488B21E,
//     private: 0x0488ADE4
//   },
//   pubKeyHash: 0x17,
//   scriptHash: 0x0a,
//   wif: 0x80
// }

// libs_bitcoin_networks_bitcoinplus = {
//   messagePrefix: '\x18BitcoinPlus Signed Message:\n',
//   bip32: {
//     public: 0x0488b21e,
//     private: 0x0488ade4
//   },
//   pubKeyHash: 0x19,
//   scriptHash: 0x08,
//   wif: 0x99
// }

// libs_bitcoin_networks_bitcloud = {
//   messagePrefix: '\x18BitCloud Signed Message:\n',
//   bip32: {
//     public: 0x0488B21E,
//     private: 0x0488ADE4
//   },
//   pubKeyHash: 0x19,
//   scriptHash: 0x05,
//   wif: 0x99
// }

// libs_bitcoin_networks_bitcore = {
//   messagePrefix: '\x18BitCore Signed Message:\n',
//   bip32: {
//     public: 0x0488B21E,
//     private: 0x0488ADE4
//   },
//   pubKeyHash: 0x03,
//   scriptHash: 0x7D,
//   wif: 0x80
// }

// libs_bitcoin_networks_bitsend = {
//   messagePrefix: '\x18Bitsend Signed Message:\n',
//   bip32: {
//     public: 0x0488B21E,
//     private: 0x0488ADE4
//   },
//   pubKeyHash: 0x66,
//   scriptHash: 0x05,
//   wif: 0xcc
// }

// libs_bitcoin_networks_britcoin = {
//   messagePrefix: '\x18BritCoin Signed Message:\n',
//   bip32: {
//     public: 0x0488b21e,
//     private: 0x0488ade4
//   },
//   pubKeyHash: 0x19,
//   scriptHash: 0x55,
//   wif: 0x99
// }

// libs_bitcoin_networks_canadaecoin = {
//   messagePrefix: '\x18Canada eCoin Signed Message:\n',
//   bip32: {
//     public: 0x0488b21e,
//     private: 0x0488ade4
//   },
//   pubKeyHash: 0x1c,
//   scriptHash: 0x05,
//   wif: 0x9c
// }

// libs_bitcoin_networks_cannacoin = {
//   messagePrefix: '\x18Cannacoin Signed Message:\n',
//   bip32: {
//     public: 0x0488b21e,
//     private: 0x0488ade4
//   },
//   pubKeyHash: 0x1c,
//   scriptHash: 0x05,
//   wif: 0x9c
// }

// libs_bitcoin_networks_cranepay = {
//   messagePrefix: '\x18Bitcoin Signed Message:\n',
//   bip32: {
//     public: 0x0488b21e,
//     private: 0x0488ade4
//   },
//   pubKeyHash: 28,
//   scriptHash: 10,
//   wif: 123
// }

// libs_bitcoin_networks_cryptoescudo = {
//   messagePrefix: '\x18Cryptoescudo Signed Message:\n',
//   bip32: {
//     public: 0x0488b21e,
//     private: 0x0488ade4
//   },
//   pubKeyHash: 0x1c,
//   scriptHash: 0x05,
//   wif: 0x9c
// }

// libs_bitcoin_networks_clubcoin = {
//   messagePrefix: '\x18ClubCoin Signed Message:\n',
//   bip32: {
//     public: 0x0488B21E,
//     private: 0x0488ADE4
//   },
//   pubKeyHash: 0x1c,
//   scriptHash: 0x55,
//   wif: 0x99
// }

// libs_bitcoin_networks_compcoin = {
//   messagePrefix: '\x18CompCoin Signed Message:\n',
//   bip32: {
//     public: 0x0488b21e,
//     private: 0x0488ade4
//   },
//   pubKeyHash: 0x1c,
//   scriptHash: 0x55,
//   wif: 0x9c
// }

// libs_bitcoin_networks_crave = {
//   messagePrefix: '\x18DarkNet Signed Message:\n',
//   bip32: {
//     public: 0x0488B21E,
//     private: 0x0488ADE4
//   },
//   pubKeyHash: 0x46,
//   scriptHash: 0x55,
//   wif: 0x99
// }

// libs_bitcoin_networks_defcoin = {
//   messagePrefix: '\x18defcoin Signed Message:\n',
//   bip32: {
//     public: 0x0488b21e,
//     private: 0x0488ade4
//   },
//   pubKeyHash: 0x1e,
//   scriptHash: 0x05,
//   wif: 0x9e
// }

// libs_bitcoin_networks_diamond = {
//   messagePrefix: '\x18Diamond Signed Message:\n',
//   bip32: {
//     public: 0x0488B21E,
//     private: 0x0488ADE4
//   },
//   pubKeyHash: 0x5a,
//   scriptHash: 0x08,
//   wif: 0xda
// }

// libs_bitcoin_networks_digibyte = {
//   messagePrefix: '\x19DigiByte Signed Message:\n',
//   bip32: {
//     public: 0x0488B21E,
//     private: 0x0488ADE4
//   },
//   pubKeyHash: 0x1e,
//   scriptHash: 0x05,
//   wif: 0x80
// }

// libs_bitcoin_networks_digitalcoin = {
//   messagePrefix: '\x18Digitalcoin Signed Message:\n',
//   bip32: {
//     public: 0x9e0488B2,
//     private: 0x0488ADE4
//   },
//   pubKeyHash: 0x1e,
//   scriptHash: 0x05,
//   wif: 0x9e
// }

// libs_bitcoin_networks_ecoin = {
//   messagePrefix: '\x18eCoin Signed Message:\n',
//   bip32: {
//     public: 0x0488b21e,
//     private: 0x0488ade4
//   },
//   pubKeyHash: 0x5c,
//   scriptHash: 0x14,
//   wif: 0xdc
// }

// libs_bitcoin_networks_edrcoin = {
//   messagePrefix: '\x18EDRcoin Signed Message:\n',
//   bip32: {
//     public: 0x0488b21e,
//     private: 0x0488ade4
//   },
//   pubKeyHash: 0x5d,
//   scriptHash: 0x1c,
//   wif: 0xdd
// }

// libs_bitcoin_networks_egulden = {
//   messagePrefix: '\x18Egulden Signed Message:\n',
//   bip32: {
//     public: 0x0488B21E,
//     private: 0x0488ADE4
//   },
//   pubKeyHash: 0x30,
//   scriptHash: 0x05,
//   wif: 0xb0
// }

// libs_bitcoin_networks_einsteinium = {
//   messagePrefix: '\x18Einsteinium Signed Message:\n',
//   bip32: {
//     public: 0x0488b21e,
//     private: 0x0488ade4
//   },
//   pubKeyHash: 0x21,
//   scriptHash: 0x05,
//   wif: 0xa1
// }

// libs_bitcoin_networks_europecoin = {
//   messagePrefix: '\x18Bitcoin Signed Message:\n',
//   bip32: {
//     public: 0x0488B21E,
//     private: 0x0488ADE4
//   },
//   pubKeyHash: 0x21,
//   scriptHash: 0x05,
//   wif: 0xa8
// }

// libs_bitcoin_networks_exclusivecoin = {
//   messagePrefix: '\x18ExclusiveCoin Signed Message:\n',
//   bip32: {
//     public: 0x0488B21E,
//     private: 0x0488ADE4
//   },
//   pubKeyHash: 0x21,
//   scriptHash: 0x89,
//   wif: 0xa1
// }

// libs_bitcoin_networks_feathercoin = {
//   messagePrefix: '\x18Feathercoin Signed Message:\n',
//   bip32: {
//     public: 0x0488BC26,
//     private: 0x0488DAEE
//   },
//   pubKeyHash: 0x0e,
//   scriptHash: 0x05,
//   wif: 0x8e
// }

// libs_bitcoin_networks_firstcoin = {
//   messagePrefix: '\x18FirstCoin Signed Message:\n',
//   bip32: {
//     public: 0x0488b21e,
//     private: 0x0488ade4
//   },
//   pubKeyHash: 0x23,
//   scriptHash: 0x05,
//   wif: 0xa3
// }

// libs_bitcoin_networks_flashcoin = {
//   messagePrefix: '\x18Flashcoin Signed Message:\n',
//   bip32: {
//     public: 0x0488b21e,
//     private: 0x0488ade4
//   },
//   pubKeyHash: 0x44,
//   scriptHash: 0x82,
//   wif: 0xc4
// }

// libs_bitcoin_networks_gcr = {
//   messagePrefix: '\x18GCR Signed Message:\n',
//   bip32: {
//     public: 0x0488B21E,
//     private: 0x0488ADE4
//   },
//   pubKeyHash: 0x26,
//   scriptHash: 0x61,
//   wif: 0x9a
// }

// libs_bitcoin_networks_gobyte = {
//   messagePrefix: '\x18DarkCoin Signed Message:\n',
//   bip32: {
//     public: 0x0488B21E,
//     private: 0x0488ADE4
//   },
//   pubKeyHash: 0x26,
//   scriptHash: 0x0a,
//   wif: 0xc6
// }

// libs_bitcoin_networks_gridcoin = {
//   messagePrefix: '\x18Gridcoin Signed Message:\n',
//   bip32: {
//     public: 0x0488b21e,
//     private: 0x0488ade4
//   },
//   pubKeyHash: 0x3e,
//   scriptHash: 0x55,
//   wif: 0xbe
// }

// libs_bitcoin_networks_groestlcoin = {
//   messagePrefix: '\x19GroestlCoin Signed Message:\n',
//   bip32: {
//     public: 0x0488b21e,
//     private: 0x0488ade4
//   },
//   pubKeyHash: 36,
//   scriptHash: 5,
//   wif: 128
// }

// libs_bitcoin_networks_groestlcointestnet = {
//   messagePrefix: '\x19GroestlCoin Signed Message:\n',
//   bip32: {
//     public: 0x043587cf,
//     private: 0x04358394
//   },
//   pubKeyHash: 0x6f,
//   scriptHash: 0xc4,
//   wif: 0xef
// }

// libs_bitcoin_networks_gulden = {
//   messagePrefix: '\x18Guldencoin Signed Message:\n',
//   bip32: {
//     public: 0x0488B21E,
//     private: 0x0488ADE4
//   },
//   pubKeyHash: 0x26,
//   scriptHash: 0x62,
//   wif: 0x62
// }

// libs_bitcoin_networks_helleniccoin = {
//   messagePrefix: '\x18helleniccoin Signed Message:\n',
//   bip32: {
//     public: 0x0488b21e,
//     private: 0x0488ade4
//   },
//   pubKeyHash: 0x30,
//   scriptHash: 0x05,
//   wif: 0xb0
// }

// libs_bitcoin_networks_hempcoin = {
//   messagePrefix: '\x18Hempcoin Signed Message:\n',
//   bip32: {
//     public: 0x0488b21e,
//     private: 0x0488ade4
//   },
//   pubKeyHash: 0x28,
//   scriptHash: 0x08,
//   wif: 0xa8
// }

// libs_bitcoin_networks_insane = {
//   messagePrefix: '\x18INSaNe Signed Message:\n',
//   bip32: {
//     public: 0x0488B21E,
//     private: 0x0488ADE4
//   },
//   pubKeyHash: 0x66,
//   scriptHash: 0x39,
//   wif: 0x37
// }

// libs_bitcoin_networks_iop = {
//   messagePrefix: '\x18IoP Signed Message:\n',
//   bip32: {
//     public: 0x2780915F,
//     private: 0xAE3416F6
//   },
//   pubKeyHash: 0x75,
//   scriptHash: 0xae,
//   wif: 0x31
// }

// libs_bitcoin_networks_ixcoin = {
//   messagePrefix: '\x18Ixcoin Signed Message:\n',
//   bip32: {
//     public: 0x0488B21E,
//     private: 0x0488ADE4
//   },
//   pubKeyHash: 0x8a,
//   scriptHash: 0x05,
//   wif: 0x80
// }

// libs_bitcoin_networks_kobocoin = {
//   messagePrefix: '\x18Kobocoin Signed Message:\n',
//   bip32: {
//     public: 0x0488B21E,
//     private: 0x0488ADE4
//   },
//   pubKeyHash: 0x23,
//   scriptHash: 0x1c,
//   wif: 0xa3
// }

// libs_bitcoin_networks_landcoin = {
//   messagePrefix: '\x18Landcoin Signed Message:\n',
//   bip32: {
//     public: 0x0488B21E,
//     private: 0x0488ADE4
//   },
//   pubKeyHash: 0x30,
//   scriptHash: 0x7a,
//   wif: 0xb0
// }

// libs_bitcoin_networks_lbry = {
//   messagePrefix: '\x18LBRYcrd Signed Message:\n',
//   bip32: {
//     public: 0x0488B21E,
//     private: 0x0488ADE4
//   },
//   pubKeyHash: 0x55,
//   scriptHash: 0x7a,
//   wif: 0x1c
// }

// libs_bitcoin_networks_linx = {
//   messagePrefix: '\x18LinX Signed Message:\n',
//   bip32: {
//     public: 0x0488b21e,
//     private: 0x0488ade4
//   },
//   pubKeyHash: 0x4b,
//   scriptHash: 0x05,
//   wif: 0xcb
// }

// libs_bitcoin_networks_litecointestnet = {
//   messagePrefix: '\x18Litecoin Signed Message:\n',
//   bip32: {
//     public: 0x043587cf,
//     private: 0x04358394
//   },
//   pubKeyHash: 0x6f,
//   scriptHash: 0xc4,
//   wif: 0xef
// }
// libs_bitcoin_networks_litecoincash = {
//   messagePrefix: '\x18Litecoin Signed Message:\n',
//   bip32: {
//     public: 0x0488B21E,
//     private: 0x0488ADE4
//   },
//   pubKeyHash: 0x1c,
//   scriptHash: 0x05,
//   wif: 0xb0
// }

// libs_bitcoin_networks_lynx = {
//   messagePrefix: '\x18Lynx Signed Message:\n',
//   bip32: {
//     public: 0x0488B21E,
//     private: 0x0488ADE4
//   },
//   pubKeyHash: 0x2d,
//   scriptHash: 0x32,
//   wif: 0xad
// }

// libs_bitcoin_networks_megacoin = {
//   messagePrefix: '\x18Megacoin Signed Message:\n',
//   bip32: {
//     public: 0x0488B21E,
//     private: 0x0488ADE4
//   },
//   pubKeyHash: 0x32,
//   scriptHash: 0x05,
//   wif: 0xB2
// }

// libs_bitcoin_networks_minexcoin = {
//   messagePrefix: '\x18Bitcoin Signed Message:\n',
//   bip32: {
//     public: 0x0488B21E,
//     private: 0x0488ADE4
//   },
//   pubKeyHash: 0x4b,
//   scriptHash: 0x05,
//   wif: 0x80
// }

const libsBitcoinNetworksNavcoin = {
  messagePrefix: '\x18Navcoin Signed Message:\n',
  bip32: {
    public: 0x0488B21E,
    private: 0x0488ADE4
  },
  pubKeyHash: 0x35,
  scriptHash: 0x55,
  wif: 0x96
}

// libs_bitcoin_networks_neoscoin = {
//   messagePrefix: '\x18NeosCoin Signed Message:\n',
//   bip32: {
//     public: 0x0488B21E,
//     private: 0x0488ADE4
//   },
//   pubKeyHash: 0x35,
//   scriptHash: 0x05,
//   wif: 0xb1
// }

// libs_bitcoin_networks_nix = {
//   messagePrefix: '\x18Nix Signed Message:\n',
//   bip32: {
//     public: 0x0488b21e,
//     private: 0x0488ade4
//   },
//   pubKeyHash: 0x26,
//   scriptHash: 0x35,
//   wif: 0x80
// }

// libs_bitcoin_networks_neurocoin = {
//   messagePrefix: '\x18PPCoin Signed Message:\n',
//   bip32: {
//     public: 0x0488B21E,
//     private: 0x0488ADE4
//   },
//   pubKeyHash: 0x35,
//   scriptHash: 0x75,
//   wif: 0xb5
// }

// libs_bitcoin_networks_newyorkc = {
//   messagePrefix: '\x18newyorkc Signed Message:\n',
//   bip32: {
//     public: 0x0488b21e,
//     private: 0x0488ade4
//   },
//   pubKeyHash: 0x3c,
//   scriptHash: 0x16,
//   wif: 0xbc
// }

// libs_bitcoin_networks_novacoin = {
//   messagePrefix: '\x18NovaCoin Signed Message:\n',
//   bip32: {
//     public: 0x0488b21e,
//     private: 0x0488ade4
//   },
//   pubKeyHash: 0x08,
//   scriptHash: 0x14,
//   wif: 0x88
// }

// libs_bitcoin_networks_nushares = {
//   messagePrefix: '\x18Nu Signed Message:\n',
//   bip32: {
//     public: 0x0488b21e,
//     private: 0x0488ade4
//   },
//   pubKeyHash: 0x3f,
//   scriptHash: 0x40,
//   wif: 0x95
// }

// libs_bitcoin_networks_okcash = {
//   messagePrefix: '\x18OKCash Signed Message:\n',
//   bip32: {
//     public: 0x03CC23D7,
//     private: 0x03CC1C73
//   },
//   pubKeyHash: 0x37,
//   scriptHash: 0x1c,
//   wif: 0x03
// }

// libs_bitcoin_networks_omnicore = {
//   messagePrefix: '\x18Bitcoin Signed Message:\n',
//   bip32: {
//     public: 0x0488B21E,
//     private: 0x0488ADE4
//   },
//   pubKeyHash: 0x00,
//   scriptHash: 0x05,
//   wif: 0x80
// }

// libs_bitcoin_networks_pesobit = {
//   messagePrefix: '\x18Pesobit Signed Message:\n',
//   bip32: {
//     public: 0x0488b21e,
//     private: 0x0488ade4
//   },
//   pubKeyHash: 0x37,
//   scriptHash: 0x55,
//   wif: 0xb7
// }

// libs_bitcoin_networks_pinkcoin = {
//   messagePrefix: '\x18Pinkcoin Signed Message:\n',
//   bip32: {
//     public: 0x0488b21e,
//     private: 0x0488ade4
//   },
//   pubKeyHash: 0x03,
//   scriptHash: 0x1c,
//   wif: 0x83
// }

// libs_bitcoin_networks_poswcoin = {
//   messagePrefix: '\x18Poswcoin Signed Message:\n',
//   bip32: {
//     public: 0x0488b21e,
//     private: 0x0488ade4
//   },
//   pubKeyHash: 0x37,
//   scriptHash: 0x55,
//   wif: 0xb7
// }

// libs_bitcoin_networks_potcoin = {
//   messagePrefix: '\x18Potcoin Signed Message:\n',
//   bip32: {
//     public: 0x0488b21e,
//     private: 0x0488ade4
//   },
//   pubKeyHash: 0x37,
//   scriptHash: 0x05,
//   wif: 0xb7
// }

// libs_bitcoin_networks_putincoin = {
//   messagePrefix: '\x18PutinCoin Signed Message:\n',
//   bip32: {
//     public: 0x0488b21e,
//     private: 0x0488ade4
//   },
//   pubKeyHash: 0x37,
//   scriptHash: 0x14,
//   wif: 0xb7
// }

// libs_bitcoin_networks_ravencoin = {
//   messagePrefix: '\x16Raven Signed Message:\n',
//   bip32: {
//     public: 0x0488B21E,
//     private: 0x0488ADE4
//   },
//   pubKeyHash: 0x3c,
//   scriptHash: 0x7a,
//   wif: 0x80
// }

// libs_bitcoin_networks_reddcoin = {
//   messagePrefix: '\x18Reddcoin Signed Message:\n',
//   bip32: {
//     public: 0x0488B21E,
//     private: 0x0488ADE4
//   },
//   pubKeyHash: 0x3d,
//   scriptHash: 0x05,
//   wif: 0xbd
// }

// libs_bitcoin_networks_revolutionvr = {
//   messagePrefix: '\x18Voxels Signed Message:\n',
//   bip32: {
//     public: 0x0488B21E,
//     private: 0x0488ADE4
//   },
//   pubKeyHash: 0x46,
//   scriptHash: 0x05,
//   wif: 0xc6
// }

// libs_bitcoin_networks_rsk = {
//   messagePrefix: '\x18RSK Signed Message:\n',
//   bip32: {
//     public: 0x0488b21e,
//     private: 0x0488ade4
//   },
//   // TODO defaulting to Bitcoin value, check this
//   pubKeyHash: 0x00,
//   // TODO defaulting to Bitcoin value, check this
//   scriptHash: 0x05,
//   // TODO defaulting to Bitcoin value, check this
//   wif: 0x80
// }

// libs_bitcoin_networks_rsktestnet = {
//   messagePrefix: '\x18RSK Testnet Signed Message:\n',
//   bip32: {
//     public: 0x043587cf,
//     private: 0x04358394
//   },
//   pubKeyHash: 0x6f,
//   scriptHash: 0xc4,
//   wif: 0xef
// }

// libs_bitcoin_networks_rubycoin = {
//   messagePrefix: '\x18Rubycoin Signed Message:\n',
//   bip32: {
//     public: 0x0488B21E,
//     private: 0x0488ADE4
//   },
//   pubKeyHash: 0x3c,
//   scriptHash: 0x55,
//   wif: 0xbc
// }

// libs_bitcoin_networks_safecoin = {
//   messagePrefix: '\x18Safecoin Signed Message:\n',
//   bip32: {
//     public: 0x0488b21e,
//     private: 0x0488ade4
//   },
//   pubKeyHash: 0x3d,
//   scriptHash: 0x56,
//   wif: 0xbd
// }

// libs_bitcoin_networks_salus = {
//   messagePrefix: '\x18Salus Signed Message:\n',
//   bip32: {
//     public: 0x0488B21E,
//     private: 0x0488ADE4
//   },
//   pubKeyHash: 0x3f,
//   scriptHash: 0xc4,
//   wif: 0xbf
// }

// libs_bitcoin_networks_smileycoin = {
//   messagePrefix: '\x18Smileycoin Signed Message:\n',
//   bip32: {
//     public: 0x1E562D9A,
//     private: 0x1E5631BC
//   },
//   pubKeyHash: 0x19,
//   scriptHash: 0x05,
//   wif: 0x05
// }

// libs_bitcoin_networks_solarcoin = {
//   messagePrefix: '\x18SolarCoin Signed Message:\n',
//   bip32: {
//     public: 0x0488b21e,
//     private: 0x0488ade4
//   },
//   pubKeyHash: 0x12,
//   scriptHash: 0x05,
//   wif: 0x92
// }

// libs_bitcoin_networks_stash = {
//   messagePrefix: '\x18Stash Signed Message:\n',
//   bip32: {
//     public: 0x0488b21e,
//     private: 0x0488ade4
//   },
//   pubKeyHash: 0x4c,
//   scriptHash: 0x10,
//   wif: 0xcc
// }

// libs_bitcoin_networks_stashtn = {
//   messagePrefix: '\x18Stash Test Signed Message:\n',
//   bip32: {
//     public: 0x043587cf,
//     private: 0x04358394
//   },
//   pubKeyHash: 0x8c,
//   scriptHash: 0x13,
//   wif: 0xef
// }

const libsBitcoinNetworksStratis = {
  messagePrefix: '\x18Stratis Signed Message:\n',
  bip32: {
    public: 0x0488B21E,
    private: 0x0488ADE4
  },
  pubKeyHash: 0x3f,
  scriptHash: 0x7d,
  wif: 0xbf
}

// libs_bitcoin_networks_stratistest = {
//   messagePrefix: '\x18Stratis Test Signed Message:\n',
//   bip32: {
//     public: 0x0488B21E,
//     private: 0x0488ADE4
//   },
//   pubKeyHash: 0x41,
//   scriptHash: 0x7d,
//   wif: 0xbf
// }

// libs_bitcoin_networks_syscoin = {
//   messagePrefix: '\x18Syscoin Signed Message:\n',
//   bip32: {
//     public: 0x0488B21E,
//     private: 0x0488ADE4
//   },
//   pubKeyHash: 0x3f,
//   scriptHash: 0x05,
//   wif: 0x80
// }

// libs_bitcoin_networks_toa = {
//   messagePrefix: '\x18TOA Signed Message:\n',
//   bip32: {
//     public: 0x0488b21e,
//     private: 0x0488ade4
//   },
//   pubKeyHash: 0x41,
//   scriptHash: 0x17,
//   wif: 0xc1
// }

// libs_bitcoin_networks_twins = {
//   messagePrefix: 'unused',
//   bip32: {
//     public: 0x022d2533,
//     private: 0x0221312b
//   },
//   pubKeyHash: 0x49,
//   scriptHash: 0x53,
//   wif: 0x42
// }

// libs_bitcoin_networks_twinstestnet = {
//   messagePrefix: 'unused',
//   bip32: {
//     public: 0x3a8061a0,
//     private: 0x3a805837
//   },
//   pubKeyHash: 0x4c,
//   scriptHash: 0x89,
//   wif: 0xED
// }

// libs_bitcoin_networks_ultimatesecurecash = {
//   messagePrefix: '\x18UltimateSecureCash Signed Message:\n',
//   bip32: {
//     public: 0xEE80286A,
//     private: 0xEE8031E8
//   },
//   pubKeyHash: 0x44,
//   scriptHash: 0x7d,
//   wif: 0xbf
// }

// libs_bitcoin_networks_unobtanium = {
//   messagePrefix: '\x18Unobtanium Signed Message:\n',
//   bip32: {
//     public: 0x0488B21E,
//     private: 0x0488ADE4
//   },
//   pubKeyHash: 0x82,
//   scriptHash: 0x1e,
//   wif: 0xe0
// }

// libs_bitcoin_networks_vcash = {
//   messagePrefix: '\x18Vcash Signed Message:\n',
//   bip32: {
//     public: 0x0488b21e,
//     private: 0x0488ade4
//   },
//   pubKeyHash: 0x47,
//   scriptHash: 0x08,
//   wif: 0xc7
// }

// libs_bitcoin_networks_verge = {
//   messagePrefix: '\x18VERGE Signed Message:\n',
//   bip32: {
//     public: 0x0488b21e,
//     private: 0x0488ade4
//   },
//   pubKeyHash: 0x1e,
//   scriptHash: 0x21,
//   wif: 0x9e
// }

// libs_bitcoin_networks_vertcoin = {
//   messagePrefix: '\x18Vertcoin Signed Message:\n',
//   bip32: {
//     public: 0x0488b21e,
//     private: 0x0488ade4
//   },
//   pubKeyHash: 0x47,
//   scriptHash: 0x05,
//   wif: 0x80
// }

// libs_bitcoin_networks_vivo = {
//   messagePrefix: '\x18DarkCoin Signed Message:\n',
//   bip32: {
//     public: 0x0488B21E,
//     private: 0x0488ADE4
//   },
//   pubKeyHash: 0x46,
//   scriptHash: 0x0a,
//   wif: 0xc6
// }

// libs_bitcoin_networks_vpncoin = {
//   messagePrefix: '\x18VpnCoin Signed Message:\n',
//   bip32: {
//     public: 0x0488b21e,
//     private: 0x0488ade4
//   },
//   pubKeyHash: 0x47,
//   scriptHash: 0x05,
//   wif: 0xc7
// }

// libs_bitcoin_networks_whitecoin = {
//   messagePrefix: '\x18Whitecoin Signed Message:\n',
//   bip32: {
//     public: 0x04887F1E,
//     private: 0x048894ED
//   },
//   pubKeyHash: 0x49,
//   scriptHash: 0x57,
//   wif: 0xc9
// }

// libs_bitcoin_networks_wincoin = {
//   messagePrefix: '\x18WinCoin Signed Message:\n',
//   bip32: {
//     public: 0x0488b21e,
//     private: 0x0488ade4
//   },
//   pubKeyHash: 0x49,
//   scriptHash: 0x1c,
//   wif: 0xc9
// }

// libs_bitcoin_networks_zcoin = {
//   messagePrefix: '\x18Zcoin Signed Message:\n',
//   bip32: {
//     public: 0x0488B21E,
//     private: 0x0488ADE4
//   },
//   pubKeyHash: 0x52,
//   scriptHash: 0x07,
//   wif: 0xd2
// }

const libsBitcoinNetworkZcash = {
  messagePrefix: '\x18Zcash Signed Message:\n',
  bip32: {
    public: 0x0488B21E,
    private: 0x0488ADE4
  },
  pubKeyHash: 0x1CB8,
  scriptHash: 0x1CBD,
  wif: 0x80
}

// libs_bitcoin_networks_xuez = {
//   messagePrefix: 'unused',
//   bip32: {
//     public: 0x022d2533,
//     private: 0x0221312b
//   },
//   pubKeyHash: 0x4b,
//   scriptHash: 0x12,
//   wif: 0xd4
// }

// libs_bitcoin_networks_bitcoinprivate = {
//   messagePrefix: '\x18BitcoinPrivate Signed Message:\n',
//   bip32: {
//     public: 0x0488B21E,
//     private: 0x0488ADE4
//   },
//   pubKeyHash: 0x1325,
//   scriptHash: 0x13AF,
//   wif: 0x80
// }

// libs_bitcoin_networks_bitcoinz = {
//   messagePrefix: '\x18BitcoinZ Signed Message:\n',
//   bip32: {
//     public: 0x0488B21E,
//     private: 0x0488ADE4
//   },
//   pubKeyHash: 0x1CB8,
//   scriptHash: 0x1CBD,
//   wif: 0x80
// }

// libs_bitcoin_networks_hush = {
//   messagePrefix: '\x18Hush Signed Message:\n',
//   bip32: {
//     public: 0x0488B21E,
//     private: 0x0488ADE4
//   },
//   pubKeyHash: 0x1CB8,
//   scriptHash: 0x1CBD,
//   wif: 0x80
// }

// libs_bitcoin_networks_hush3 = {
//   messagePrefix: '\x18Hush Signed Message:\n',
//   bip32: {
//     public: 0x0488B21E,
//     private: 0x0488ADE4
//   },
//   pubKeyHash: 0x3C,
//   scriptHash: 0x55,
//   wif: 0xBC
// }

// libs_bitcoin_networks_zclassic = {
//   messagePrefix: '\x18Zcash Signed Message:\n',
//   bip32: {
//     public: 0x0488B21E,
//     private: 0x0488ADE4
//   },
//   pubKeyHash: 0x1CB8,
//   scriptHash: 0x1CBD,
//   wif: 0x80
// }

// libs_bitcoin_networks_zencash = {
//   messagePrefix: '\x18Zcash Signed Message:\n',
//   bip32: {
//     public: 0x0488B21E,
//     private: 0x0488ADE4
//   },
//   pubKeyHash: 0x2089,
//   scriptHash: 0x2096,
//   wif: 0x80
// }

// libs_bitcoin_networks_energi = {
//   messagePrefix: 'DarkCoin Signed Message:\n',
//   bip32: {
//     public: 0x03B8C856,
//     private: 0xD7DC6E9F
//   },
//   pubKeyHash: 0x21,
//   scriptHash: 0x35,
//   wif: 0x6a
// }

// libs_bitcoin_networks_exchangecoin = {
//   messagePrefix: 'ExchangeCoin Signed Message:\n',
//   bip32: {
//     public: 0x0488B21E,
//     private: 0x0488ADE4
//   },
//   pubKeyHash: 0x21B9,
//   scriptHash: 0x34AF,
//   wif: 0x80
// }

// libs_bitcoin_networks_artax = {
//   messagePrefix: '\x18Artax Signed Message:\n',
//   bip32: {
//     public: 0x0488B21E,
//     private: 0x0488ADE4
//   },
//   pubKeyHash: 0x17,
//   scriptHash: 0x1CBD,
//   wif: 0x97
// }

// libs_bitcoin_networks_bitcoingreen = {
//   messagePrefix: '\x18BitcoinGreen Signed Message:\n',
//   bip32: {
//     public: 0x0488B21E,
//     private: 0x0488ADE4
//   },
//   pubKeyHash: 0x26,
//   scriptHash: 0x1CBD,
//   wif: 0x2E
// }

// libs_bitcoin_networks_anon = {
//   messagePrefix: '\x18ANON Signed Message:\n',
//   bip32: {
//     public: 0x0488b21e,
//     private: 0x0488ade4
//   },
//   pubKeyHash: 0x0582,
//   scriptHash: 0x5389,
//   wif: 0x80
// }

// libs_bitcoin_networks_projectcoin = {
//   messagePrefix: '\x18ProjectCoin Signed Message:\n',
//   bip32: {
//     public: 0x022D2533,
//     private: 0x0221312B
//   },
//   pubKeyHash: 0x37,
//   scriptHash: 0x08,
//   wif: 0x75
// }

// libs_bitcoin_networks_phore = {
//   messagePrefix: '\x18Phore Signed Message:\n',
//   bip32: {
//     public: 0x022D2533,
//     private: 0x0221312B
//   },
//   pubKeyHash: 0x37,
//   scriptHash: 0x0D,
//   wif: 0xD4
// }

// libs_bitcoin_networks_blocknode = {
//   messagePrefix: '\x18Blocknode Signed Message:\n',
//   bip32: {
//     public: 0x0488b21e,
//     private: 0x0488ade4
//   },
//   pubKeyHash: 0x19,
//   scriptHash: 0x3F,
//   wif: 0x4b
// }

// libs_bitcoin_networks_blocknode_testnet = {
//   messagePrefix: '\x18Blocknode Testnet Signed Message:\n',
//   bip32: {
//     public: 0x043587cf,
//     private: 0x04358394
//   },
//   pubKeyHash: 0x55,
//   scriptHash: 0x7d,
//   wif: 0x89
// }

// libs_bitcoin_networks_litecoinz = {
//   messagePrefix: '\x18LitecoinZ Signed Message:\n',
//   bip32: {
//     public: 0x0488B21E,
//     private: 0x0488ADE3
//   },
//   pubKeyHash: 0x0AB3,
//   scriptHash: 0x0AB8,
//   wif: 0x80
// }

// libs_bitcoin_networks_blockstamp = {
//   messagePrefix: '\x18BlockStamp Signed Message:\n',
//   bip32: {
//     public: 0x0488B21E,
//     private: 0x0488ADE4
//   },
//   pubKeyHash: 0x00,
//   scriptHash: 0x05,
//   wif: 0x80
// }

// libs_bitcoin_networks_deeponion = {
//   messagePrefix: 'x18DeepOnion Signed Message:\n',
//   bip32: {
//     public: 0x0488B21E,
//     private: 0x0488ADE4
//   },
//   pubKeyHash: 0x1F,
//   scriptHash: 0x4E,
//   wif: 0x9F
// }

// libs_bitcoin_networks_cpuchain = {
//   messagePrefix: 'x18CPUchain Signed Message:\n',
//   bip32: {
//     public: 0x0488B21E,
//     private: 0x0488ADE4
//   },
//   pubKeyHash: 0x1C,
//   scriptHash: 0x1E,
//   wif: 0x80
// }

// libs_bitcoin_networks_wagerr = {
//   messagePrefix: 'unused',
//   bip32: {
//     public: 0x022d2533,
//     private: 0x0221312b
//   },
//   pubKeyHash: 0x49,
//   scriptHash: 0x3f,
//   wif: 0xc7
// }

const libsBitcoinNetworksBitcoinsv = {
  messagePrefix: 'unused',
  bip32: {
    public: 0x0488b21e,
    private: 0x0488ade4
  },
  pubKeyHash: 0x00,
  scriptHash: 0x05,
  wif: 0x80
}

// libs_bitcoin_networks_monkeyproject = {
//   messagePrefix: 'Monkey Signed Message:\n',
//   bip32: {
//     public: 0x0488b21e,
//     private: 0x0488dde4
//   },
//   pubKeyHash: 0x33,
//   scriptHash: 0x1c,
//   wif: 0x37
// }

// libs_bitcoin_networks_rapids = {
//   messagePrefix: 'DarkNet Signed Message:\n',
//   bip32: {
//     public: 0x0488b21e,
//     private: 0x0488ade4
//   },
//   pubKeyHash: 0x3d,
//   scriptHash: 0x06,
//   wif: 0x2e
// }

// libs_bitcoin_networks_aryacoin = {
//   messagePrefix: '\x18Aryacoin Signed Message:\n',
//   bech32: 'arya',
//   bip32: {
//     public: 0x0488B21E,
//     private: 0x0488ADE4
//   },
//   pubKeyHash: 0x17,
//   scriptHash: 0x6f,
//   wif: 0x97
// }

// libs_bitcoin_networks_thought = {
//   messagePrefix: 'unused',
//   bip32: {
//     public: 0xFbC6A00D,
//     private: 0x5AEBD8C6
//   },
//   pubKeyHash: 0x07,
//   scriptHash: 0x09,
//   wif: 0x7B
// }

// libs_bitcoin_networks_elastos = {
//   messagePrefix: 'unused',
//   bip32: {
//     public: 0x0488B21E,
//     private: 0x0488ADE4
//   },
//   pubKeyHash: 0x21,
//   scriptHash: 0xc4, // TODO set this correctly, same as BTC for now
//   wif: 0xef // TODO set this correctly, same as BTC for now
// }

// libs_bitcoin_networks_sugarchain = {
//   messagePrefix: '\x18Sugarchain Signed Message:\n',
//   bip32: {
//     public: 0x0488B21E,
//     private: 0x0488ADE4
//   },
//   pubKeyHash: 0x3f,
//   scriptHash: 0x7d,
//   wif: 0x80
// }

// libs_bitcoin_networks_sugarchaintestnet = {
//   messagePrefix: '\x18Sugarchain Signed Message:\n',
//   bip32: {
//     public: 0x045f1cf6,
//     private: 0x045f18bc
//   },
//   pubKeyHash: 0x42,
//   scriptHash: 0x80,
//   wif: 0xef
// }

// // https://github.com/libs.bitcoinjs.lib/blob/3f6f5ef97a1ee1b8337865209282c0095e22b2e7/src/networks.js
// libs_bitcoin_networks_regtest = {
//   messagePrefix: '\x18Bitcoin Signed Message:\n',
//   bech32: 'bcrt',
//   bip32: {
//     public: 0x043587cf,
//     private: 0x04358394
//   },
//   pubKeyHash: 0x6f,
//   scriptHash: 0xc4,
//   wif: 0xef
// }

// libs_bitcoin_networks_argoneum = {
//   messagePrefix: 'unused',
//   bip32: {
//     public: 0x0488b21e,
//     private: 0x0488ade4
//   },
//   pubKeyHash: 0x32,
//   scriptHash: 0x61,
//   wif: 0xbf
// }

function getExtend (coinSymbol) {
  let result
  switch (coinSymbol) {
    case 'DASH':
      result = libsBitcoinNetworksDash
      break
    case 'ZEC':
      result = libsBitcoinNetworkZcash
      break
    case 'DOGE':
      result = libsBitcoinNetworksDogecoin
      break
    case 'BSV':
      result = libsBitcoinNetworksBitcoinsv
      break
    case 'LTC':
      result = libsBitcoinNetworksLitecoinXprv
      break
    case 'NAV':
      result = libsBitcoinNetworksNavcoin
      break
    case 'STRAT':
      result = libsBitcoinNetworksStratis
      break
  }
  return result
}

exports.getExtend = getExtend
