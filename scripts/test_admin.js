const { expect } = require("chai");
const { ethers, upgrades } = require("hardhat");


// 链上测试脚本
describe("MetaNodeToken test)", function () {

    it("test function : addPool ...", async function () {

    const MetaNodeStake = await ethers.getContractAt("MetaNodeStake", "0x7e547571ca68fc1B47cFD4bD118C011377A0152d");
    const pool = await MetaNodeStake.addPool(ethers.ZeroAddress, 500, 100, 20, true);
    console.log(pool);
    })


});