const { expect } = require("chai");
const { ethers, upgrades } = require("hardhat");


// 本地测试脚本
describe("MetaNodeStake test)", function () {

    it("test function : addPool ...", async function () {
        // 一.部署合约 
        // 1. 部署 token
        const metaNodeTokenF = await ethers.getContractFactory('MetaNodeToken')
        const metaNodeToken = await metaNodeTokenF.deploy()
        console.log("deploying metaNodeToken...");

        await metaNodeToken.waitForDeployment();
        const metaNodeTokenAddress = await metaNodeToken.getAddress();
        console.log("stake deployed to:", metaNodeTokenAddress);

        // 2.部署 stake
        // 质押起始区块高度,可以去 sepolia上面读取最新的区块高度
        const startBlock = 8923173;
        // 质押结束的区块高度,sepolia 出块时间是12s,想要质押合约运行x秒,那么endBlock = startBlock+x/12
        const endBlock = 9923173;
        // 每个区块奖励的MetaNode token的数量
        const metaNodePerBlock = ethers.parseUnits("100", 18); // 每区块奖励1个MetaNode（18位精度）
        const stakeFactory = await hre.ethers.getContractFactory("MetaNodeStake");
        console.log("Deploying MetaNodeStake...");
        const stakeProxy = await upgrades.deployProxy(
            stakeFactory,
            [metaNodeTokenAddress, startBlock, endBlock, metaNodePerBlock],
            { initializer: "initialize" }
        );
        console.log("deploying stake ...");
        await stakeProxy.waitForDeployment();
        console.log("stake deployed to:", await stakeProxy.getAddress());

        // 二.测试功能
        [owner, seller, bidder1, bidder2] = await ethers.getSigners();
        // 1. addPool
        await stakeProxy.connect(owner).addPool(ethers.ZeroAddress, 500, 100, 20, true);

    })


});