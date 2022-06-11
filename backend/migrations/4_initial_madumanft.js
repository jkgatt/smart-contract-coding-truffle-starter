const MadumaNft = artifacts.require("MadumaNFT");

module.exports = function (deployer) {
  deployer.deploy(MadumaNft);
};
