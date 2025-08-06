# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

hardhat 基础命令
```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.js
```

hardhat 依赖安装
```
npm init hardhat
npm install  @openzeppelin/hardhat-upgrades 
npm install @chainlink/contracts
```

部署命令
```
npx hardhat clean && npx hardhat compile

npx hardhat run scripts/deploy_stake.js --network sepolia
```


概念解释:
```
LP流动性挖矿 :LP流动性挖矿 是去中心化金融(DeFi)中的一种激励机制，用户通过提供流动性来获得代币奖励

提供流动性: 是指用户将加密货币 存入流动性池中，成为流动性提供者(Liquidity Provider, LP)的行为
LP代币: 当用户向流动性池存入两种代币时(如ETH和USDT)，会获得代表池中份额的LP代币

主要收益来源
交易手续费：流动性提供者分享池中交易产生的手续费
挖矿奖励：项目方发放的激励代币
LP代币抵押： 可以获得平台币
```
