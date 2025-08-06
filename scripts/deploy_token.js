// scripts/deploy.js
const { ethers, upgrades } = require("hardhat");

async function main() {
  const [signer] = await ethers.getSigners()

    const MetaNodeToken = await ethers.getContractFactory('MetaNodeToken')
    const metaNodeToken = await MetaNodeToken.deploy()
    console.log("Deploying metaNodeToken...");
    await metaNodeToken.waitForDeployment();
    const metaNodeTokenAddress = await metaNodeToken.getAddress();
    console.log("MetaNodeToken (proxy) deployed to:", metaNodeTokenAddress);


}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });