require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give glove fresh speak notice crime remember snake imitate prize flower turkey'; 
let testAccounts = [
"0x193ad54858a213206db1f95abe166af4b4e54d671e2d11bb777c1850ed9f90e6",
"0x1f3b4fbc15cb709f0f71065cdf3a187f7ee8321ced00a3bec4e54fbd5cf4b010",
"0x44b6a025d10838917b75678579ecd91e2639894937a87bf5d69933e1192e6b4e",
"0xb3e119c36d64abbef98626adbb1ccab66a9db4c1119d2a29709f03b5fd48668b",
"0xea98154698c96cc24c4daf22fee38e65f22c548401e17f031f9a8fb92db0254b",
"0x90f18835a5653945cd4212370cb398e759e3df2546b2a9b8aec97569f1bd76b0",
"0xbfb1a98bf0079ad5a072c20a2bc5f94c6df6504beeb4bc253e4e5396fb81f27f",
"0x1836db06a82ff65d52b693c9c4a5423a232e8bfe74ab3e996f84261519c16a43",
"0x74ea2169835f6f9d0f87daa3f3b2cdbbc2b64ed26ffe7593419b1347b37a4e51",
"0x00ea94d3801c5a1bc9d8dedcc048fa3e64c1b881dbd66da7243fe10d03e6f99b"
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
            version: '^0.5.11'
        }
    }
};
