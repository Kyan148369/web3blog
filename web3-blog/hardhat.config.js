require("@nomiclabs/hardhat-waffle");
require('dotenv').config()


module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
      chainId: 80001
    },
     mumbai: {
       url: "https://polygon-mumbai.infura.io/v3/2d8a18f63c6c4dd8b38e49ae39b00561",
       accounts: [`${process.env.PRIVATE_KEY}`]

     },
    // polygon: {
    //   url: "https://polygon-rpc.com/",
    //   accounts: [process.env.pk]
    // }
  }
};