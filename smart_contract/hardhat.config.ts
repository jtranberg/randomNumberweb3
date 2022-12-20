import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import 'dotenv/config';

//0xbF6222Bab3aE081Cf23138763C37A3d664747402


const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: process.env.ALCHEMY_API,
      accounts: [process.env.PRIVATE_KEY !== undefined ? process.env.PRIVATE_KEY: '']
    }
  }
};

export default config;
