// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract PiggyBank {

    uint minimumTimeWithdrawal = 1 minutes;

    uint public piggy;
    address payable owner;
    uint256 deadline;

    constructor() {
        owner = payable(address(msg.sender));
        deadline = block.timestamp + minimumTimeWithdrawal;
    }

    modifier onlyOwner {
        require(owner == msg.sender, "You are not the owner!");
        _;
    }

    function payMe() public payable{
        piggy += msg.value;
    }

    function breakPiggyBank() public payable onlyOwner{
        require(block.timestamp > deadline, "Not enough time has passed to withdraw the donations");
        selfdestruct(owner);
    }
}