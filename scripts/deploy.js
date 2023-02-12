const contractName = "TOONSBOX_TOKEN";

async function main() {
  const Contract = await hre.ethers.getContractFactory(contractName);
  // if you need to add constructor arguments for the particular game, add them here:
  const contract = await Contract.deploy();
  console.log(`${contractName} deployed to address: ${contract.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
