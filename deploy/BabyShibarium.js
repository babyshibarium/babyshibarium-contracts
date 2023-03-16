module.exports = async (hre) => {
  const accounts = await hre.getNamedAccounts();
  const deployer = accounts.admin;

  console.log((await hre.ethers.provider.getBalance(deployer)).toString());

  const {address: lib} = await hre.deployments.deploy("IterableMapping", {from: deployer, log: true,});

  const {address} = await hre.deployments.deploy("BabyShibarium", {
    from: deployer,
    args: [
      // bsc
      "0x55d398326f99059ff775485246999027b3197955",
      "0x10ed43c718714eb63d5aa57b78b54704e256024e",
      "0x27aE6B2585CF99E95e4018d38356406Fd72C3443",

      // // testnet
      // "0x337610d27c682E347C9cD60BD4b3b107C9d34dDd",
      // "0xD99D1c33F9fC3444f8101754aBC46c52416550D1",
      // "0x27aE6B2585CF99E95e4018d38356406Fd72C3443",
    ],
    log: true,
    libraries: {
      IterableMapping: lib,
    }
  });

  console.log((await hre.ethers.provider.getBalance(deployer)).toString());
};

module.exports.tags = ["BabyShibarium"];