const hre = require("hardhat");

async function main() {
  const lock = await hre.ethers.deployContract("Crowdfund", [
    100,
    100,
    "test",
    "0xeEB5fce994AaF685D0D396484e7943ba5A06bfd6",
  ]);

  await lock.deployed();
  console.log(`deployed to ${lock.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});