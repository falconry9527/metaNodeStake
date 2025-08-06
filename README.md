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

npx hardhat run scripts/deploy.js --network sepolia
```
