console.log("This is a test");
// console.log(web3.eth.getBalance("0x407d73d8a49eeb85d32cf465507dd71d507100c1")web3.eth.getBalance("0x407d73d8a49eeb85d32cf465507dd71d507100c1"));

var Test = artifacts.require("Test");

contract('Test', function (accounts){
  it('should test that the ret function returns 0', function(){
    Test.deployed().then(function(instance) {
      instance.ret().call().then(function(a){
        assert(a == 0);
      });
    })
  })
});