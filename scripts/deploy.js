const hre = require("hardhat");
// const { ethers } = require("hardhat");
async function main() {
    Contra = await hre.ethers.getContractFactory("DStorage");
    contract = await Contra.deploy();
    await contract.deployed();
    console.log(contract.address);
}
main()