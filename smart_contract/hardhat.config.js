// https://eth-ropsten.alchemyapi.io/v2/u0erzxJ4T-pFLSZquHGvGQUuHVrHu48B

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/u0erzxJ4T-pFLSZquHGvGQUuHVrHu48B',
      accounts: [
        '24fd65fa63dce99f4361f78fc2a6bc6c6159f9f6ed5e1afcfb94a51d2cea9652',
      ],
    },
  },
};
