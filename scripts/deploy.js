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


  // 1. 获取合约工厂
  const MetaNodeStake = await ethers.getContractFactory("MetaNodeStake");

  // 2. 设置初始化参数（根据你的initialize函数）
  // const metaNodeTokenAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; // 替换为实际MetaNode代币地址
  const startBlock = 8923173; // 替换为实际起始区块
  const endBlock = 9923173; // 替换为实际结束区块
  const metaNodePerBlock = ethers.parseUnits("1", 18); // 每区块奖励1个MetaNode（18位精度）

  // 3. 部署可升级代理合约
  const stake = await upgrades.deployProxy(
    MetaNodeStake,
    [metaNodeTokenAddress, startBlock, endBlock, metaNodePerBlock],
    { initializer: "initialize" }
  );
  console.log("Deploying MetaNodeStake...");
  await stake.waitForDeployment();

  // todo
  const stakeAddress = await stake.getAddress()
  const tokenAmount = await metaNodeToken.balanceOf(signer.address)
  let tx = await metaNodeToken.connect(signer).transfer(stakeAddress, tokenAmount)
  await tx.wait()

  console.log("MetaNodeStake (proxy) deployed to:", await stake.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });