const Piggy = artifacts.require("PiggyBank");

module.exports = function (deployer) {
  deployer.deploy(Piggy);
};
