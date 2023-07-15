require("@nomicfoundation/hardhat-toolbox");

const PRIVATE_KEY =
  "a237d23838b297feebfe5e615c1772f3a3bbb650f990802707083520134cbc62";
const INFURA_API_KEY = "3917b72abea64f19b1161bb4108f10b6";

module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [PRIVATE_KEY],
    },
  },
};