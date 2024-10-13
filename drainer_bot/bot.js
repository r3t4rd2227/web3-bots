require('dotenv').config();
const { ethers } = require('ethers');

// Load environment variables
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const RECIPIENT_ADDRESS = process.env.RECIPIENT_ADDRESS;

// RPC URLs for different networks
const ALCHEMY_ETH_URL = process.env.ALCHEMY_ETH_URL;  // Ethereum
const ALCHEMY_BASE_URL = process.env.ALCHEMY_BASE_URL;  // Base
const BNB_RPC_URL = process.env.BNB_RPC_URL;  // Binance Smart Chain
const ARB_RPC_URL = process.env.ARB_RPC_URL;  // Arbitrum

// Create providers for each chain
const ethProvider = new ethers.JsonRpcProvider(ALCHEMY_ETH_URL);
const baseProvider = new ethers.JsonRpcProvider(ALCHEMY_BASE_URL);
const bnbProvider = new ethers.JsonRpcProvider(BNB_RPC_URL);
const arbProvider = new ethers.JsonRpcProvider(ARB_RPC_URL);

// Create wallets for each provider
const ethWallet = new ethers.Wallet(PRIVATE_KEY, ethProvider);
const baseWallet = new ethers.Wallet(PRIVATE_KEY, baseProvider);
const bnbWallet = new ethers.Wallet(PRIVATE_KEY, bnbProvider);
const arbWallet = new ethers.Wallet(PRIVATE_KEY, arbProvider);

// Function to check balance and send tokens on a given chain
async function checkAndSend(wallet, provider, chainName) {
  try {
    // Use provider.getBalance to get the wallet's balance
    const balance = await provider.getBalance(wallet.address);
    console.log(`Balance on ${chainName}: ${ethers.formatEther(balance)} ETH`);

    // Minimum balance to keep in the wallet
    const threshold = ethers.parseEther('0.00005');  // Adjust this as needed

    if (balance > threshold) {
      // Get the gas price
      const feeData = await provider.getFeeData();
      let gasPrice = feeData.gasPrice;

      // Default to 10 gwei if gasPrice is undefined or invalid
//      if (!gasPrice) {
//        gasPrice = ethers.utils.parseUnits('10', 'gwei'); // Fallback to 10 gwei if not available
  //    } else {
            // Convert BigInt to BigNumber
//      gasPrice = ethers.BigNumber.from(gasPrice.toString()); // Ensure gasPrice is a BigNumber
  //    }

      console.log(gasPrice)
      console.log(gasprice.toString())

      const gasLimit = ethers.BigNumber.from(21000);  // Standard gas limit for a transfer
      const totalGasCost = gasPrice.mul(gasLimit);

      console.log("total gas cost calculated");
      // Calculate how much to send, after accounting for gas fees
      const amountToSend = balance.sub(totalGasCost);

      if (amountToSend > 0) {
        // Send the transaction
        const tx = await wallet.sendTransaction({
          to: RECIPIENT_ADDRESS,
          value: amountToSend,
          gasPrice: gasPrice,
          gasLimit: gasLimit,
        });

        console.log(`Transaction Hash on ${chainName}: ${tx.hash}`);
      } else {
        console.log(`Insufficient balance on ${chainName} to cover gas fees.`);
      }
    } else {
      console.log(`Balance on ${chainName} is below the threshold.`);
    }
  } catch (error) {
    console.error(`Error on ${chainName}:`, error);
  }
}

// Function to check and send tokens across all chains
async function checkAllChains() {
  await checkAndSend(ethWallet, ethProvider, 'Ethereum');
  await checkAndSend(baseWallet, baseProvider, 'Base');
  await checkAndSend(bnbWallet, bnbProvider, 'Binance Smart Chain');
  await checkAndSend(arbWallet, arbProvider, 'Arbitrum');
}

// Run the check and send function every minute
setInterval(checkAllChains, 60000);