pragma solidity ^0.8.0;

contract Test {

  uint public v;
  uint private x;

  function ret() public view returns(uint){
    return v;
  }

  function retX() private view returns(uint){
    return x;
  }
}