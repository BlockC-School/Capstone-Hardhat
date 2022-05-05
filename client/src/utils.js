import { ethers } from "ethers";
import Dex from "./contract/Dex.json";
import ERC20Abi from "./contract/ERC20abi.json";
const DEX_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

const getWeb3 = () => {
  return new Promise(async (resolve, reject) => {
    // let provider = await detectEthereumProvider();
    // if (provider) {
    // await provider.request({ method: "eth_requestAccounts" });
    try {
      const web3 = new ethers.providers.JsonRpcProvider(
        "http://127.0.0.1:8545",
        31337
      );
      resolve(web3);
    } catch (err) {
      reject(err);
    }
    // }
    reject("Install Metamask");
  });
};

const getContracts = async (web3) => {
  const dex = new ethers.Contract(DEX_ADDRESS, Dex.abi, web3);
  const tokens = await dex.getTokens();
  const tokenContracts = tokens.reduce(
    (acc, token) => ({
      ...acc,
      [ethers.utils.toUtf8String(token.ticker)]: new ethers.Contract(
        token.tokenAddress,
        ERC20Abi,
        web3
      ),
    }),
    {}
  );
  return { dex, ...tokenContracts };
};

export { getWeb3, getContracts };
