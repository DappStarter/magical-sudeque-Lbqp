require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope arctic surge short bitter birth soccer prosper grace merry flock gaze'; 
let testAccounts = [
"0x3e619893716c437d5a8741a5cc8a6d0056b25d305aec10f1bdffcdbcbd92a64d",
"0x0afb84345b37bf4c681c254e04a81d3117f0ae33f2ee18a7dcc823904b576dcd",
"0xa27125d89c9941858d189efa4c78309801f08fbaf9b26cbd00b2fdc0cbc64dc1",
"0xfdea663cc828dbb4cb436fade37a23262b8ebed6a914aa7c6062a9aaf32ef8a1",
"0x317cd09449f51ced40df17b5212fb46016d87346a98cfa48d54c56878423a96f",
"0xc876958b1ae3ee1f5ef4d6c0a578a2d1f9f86ab314f25e3fb448b477b44a3db8",
"0x9b43acc02340c944131a732007b13dde593a93e71c467f87fb0518d4abe51ab1",
"0x6d122b76dfacd710ee05ae02bb046a2724550e92bfcb57397c07783c42b6ca97",
"0xf7300fa27b5637e1b98b705795ea6a09c4fc21cdf16736db19f7d60a2ab18a87",
"0x0649d6c4df84586f89a0e9cda26ba538203a57c173768cdd5dbac533b33f5d0e"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

