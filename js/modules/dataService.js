import registryArtifact from "uport-registry";
import IPFS from "ipfs-mini";
import bs58 from "bs58";
import { web3, uport } from "./uportSetup";

const ipfs = new IPFS({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https"
});

const UportRegistryContract = uport
  .contract(registryArtifact.abi)
  .at("0x2cc31912b2b0f3075a87b3640923d45a26cef3ee");

const HthTokenContractWeb3 = new web3.eth.Contract(
  registryArtifact.abi,
  "0x2cc31912b2b0f3075a87b3640923d45a26cef3ee"
);

const base58ToHex = b58 => {
  const hexBuffer = new Buffer(bs58.decode(b58));
  return hexBuffer.toString("hex");
};

const hexToBase58 = hexString => {
  const buffer = new Buffer(hexString, "hex");
  return bs58.encode(buffer);
};

const dataService = {
  get(key, address) {
    return new Promise((resolve, reject) => {
      UportRegistryContractWeb3.methods
        .get(key, address, address)
        .call({ from: address }, (error, ipfsHashHex) => {
          if (error) {
            console.log(error);
            reject(new Error("An error is occured when calling the contract"));
          }
          if (
            ipfsHashHex === "0x" ||
            ipfsHashHex ===
              "0x0000000000000000000000000000000000000000000000000000000000000000"
          ) {
            resolve([]);
          }
          const ipfsHash = hexToBase58(`1220${ipfsHashHex.slice(2)}`);
          ipfs.catJSON(ipfsHash, (err, data) => {
            if (err !== null) {
              reject(new Error("Failed to get object from IPFS"));
              return;
            }
            resolve(data);
          });
        });
    });
  },

  // IDEA get address in function
  set(key, address, data) {
    return new Promise((resolve, reject) => {
      ipfs.addJSON(data, (error, ipfsHash) => {
        if (error !== null) {
          console.log(error);
          reject(error);
        }
        const ipfsHashHex = base58ToHex(ipfsHash);
        const regSafeIpfs = `0x${ipfsHashHex.slice(4)}`;
        UportRegistryContract.set(key, address, regSafeIpfs)
          .then(txHash => {
            console.log(txHash);
            resolve(txHash);
          })
          .catch(reject);
      });
    });
  }
};

export default dataService;
