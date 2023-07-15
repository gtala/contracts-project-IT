require("@nomicfoundation/hardhat-toolbox");

const PRIVATE_KEY = "";
const INFURA_API_KEY = "";

module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [PRIVATE_KEY],
    },
  },
};