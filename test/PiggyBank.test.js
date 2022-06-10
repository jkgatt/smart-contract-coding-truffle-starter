const { time } = require("@openzeppelin/test-helpers");

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

  it('Should test that the piggy bank can be broken after a minute', async function(){
    let duration = time.duration.minutes(1);
    let instance = await PiggyBank.deployed();
    await time.increase(duration);
    let breakPiggyBank = await instance.breakPiggyBank.call();
  });

});