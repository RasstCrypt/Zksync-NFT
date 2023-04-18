import { Wallet, utils } from "zksync-web3";
import * as ethers from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";

// An example of a deploy script that will deploy and call a simple contract.
export default async function (hre: HardhatRuntimeEnvironment) {
    console.log(`Running deploy script for the SkullCrypt contract`);

    // // Initialize the wallet.
    const wallet = new Wallet("d629b8e2ac6ad1f99c2aa5a8b8818cd4b33b3f0cb310f3d67e6a910bee436828");

    // // Create deployer object and load the artifact of the contract you want to deploy.
    const deployer = new Deployer(hre, wallet);
    const artifact = await deployer.loadArtifact("SkullCrypt");

    // Estimate contract deployment fee
    //const SkullCrypt = "Hi there!";
    const deploymentFee = await deployer.estimateDeployFee(artifact, []);

    // Deposit funds to L2
    //const depositHandle = await deployer.zkWallet.deposit({
        //to: deployer.zkWallet.address,
        //token: utils.ETH_ADDRESS,
        //amount: deploymentFee.mul(2),
    //});

    // Wait until the deposit is processed on zkSync
    await depositHandle.wait();
    // Deploy this contract.The returned object will be of a `Contract` type, similarly to ones in `ethers`.
    // `greeting` is an argument for contract constructor.
    const parsedFee = ethers.utils.formatEther(deploymentFee.toString());
    console.log(`The deployment is estimated to cost ${parsedFee} ETH`);

    const SkullCryptContract = await deployer.deploy(artifact);

    //obtain the Constructor Arguments
    console.log("constructor args:" + SkullCryptContract.interface.encodeDeploy());

    // Show the contract info.
    const contractAddress = SkullCryptContract.address;
    console.log(`${artifact.contractName} was deployed to ${contractAddress}`);
}