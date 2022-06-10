var PiggyBank = artifacts.require("PiggyBank");

const ERROR_MSG = 'Not enough time has passed to withdraw the donations';

contract('PiggyBank', function(accounts){
  it('Should test that the piggy bank cannot be broken before a minute', async function(){
    let instance = await PiggyBank.deployed();
    try{
      let breakPiggyBank = await instance.breakPiggyBank.call();
    } catch(err){
      assert.include(err.message, ERROR_MSG, "The error message should contain not enough time.")
    }
  });

});