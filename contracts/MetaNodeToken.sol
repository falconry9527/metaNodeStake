// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

// sepolia 合约地址: 0x24cD7079cA1329Bd083E436527C8C4B7c2942Fb7
contract MetaNodeToken is ERC20{
    constructor() ERC20("MetaNodeToken", "MetaNode"){
        // 初始供应量可以在这里定义，或者留空以便之后通过 mint 函数铸造
         _mint(msg.sender, 10000000*1_000_000_000_000_000_000);
    }
}