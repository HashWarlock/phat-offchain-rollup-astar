import "dotenv/config";
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    // Shibuya faucet: use #shibuya-faucet room in https://discord.gg/astarnetwork
    shibuya: {
      url: "https://evm.shibuya.astar.network",
      chainId: 81,
      accounts: [ process.env['SHIBUYA_SK']! ]
    },

    // Astar community faucet (please don't abuse): https://as-faucet.xyz/en/astar#
    astar: {
      url: "https://evm.astar.network",
      chainId: 592,
      accounts: [ process.env['ASTAR_SK']! ]
    },

    // Shiden community faucet (please don't abuse): https://as-faucet.xyz/en/shiden#
    shiden: {
      url: "https://evm.shiden.astar.network",
      chainId: 336,
      accounts: [ process.env['SHIDEN_SK']! ]
    },
    mumbai: {
      url: process.env['MUMBAI_API'],
      accounts: [process.env['MUMBAI_SK']!],
      chainId: 80001,
    }
  },
  etherscan: {
    // substitute subscan API key
    apiKey: process.env['POLYGONSCAN_MUMBAI_API_KEY'],
  },
};

export default config;
