const UportConnect = require("../vendor/uport-connect");
const Connect = UportConnect.ConnectCore;
const SimpleSigner = UportConnect.SimpleSigner;

const Web3 = require("web3");
const web3 = new Web3();

import { Linking } from "react-native";
import URL from "url-parse";
import qs from "qs";

const rpcUrl = "https://rinkeby.infura.io/5ysRjN9mODHFf7aqQqzp";

const uriHandler = url => {
  console.log(url);
  Linking.openURL(url);
};

const uport = new Connect("Piegādes", {
  clientId: "2oqPNs2XH7Yf4LdtspN6WhB3EQW2cReYar1",
  network: "rinkeby",
  signer: SimpleSigner(
    "c3e44d722d463752066e37758a353e34d69ff4dfefa15ff18f8298c4d4f4ef9b"
  ),
  uriHandler: uriHandler,
  rpcUrl
});

uport.topicFactory = name => {
  const id = Math.random()
    .toString(36)
    .substring(2, 14);
  const path = `/uport/${id}`;
  const url = `kant://kantumid:${path}`;
  let handler;
  let cancel;

  const topic = new Promise((resolve, reject) => {
    handler = event => {
      if (event.url) {
        const url = URL(event.url, true);
        if (url.pathname === path) {
          if (url.hash) {
            console.log(url.hash);
            const params = qs.parse(url.hash.slice(1));
            Linking.removeEventListener("url", handler);
            resolve(params[name]);
          } else {
            console.log("no hash");
            reject();
          }
        } else {
          console.log("ignoring request");
        }
      }
    };
    Linking.addEventListener("url", handler);

    cancel = () => {
      Linking.removeEventListener("url", handler);
      resolve();
    };
  });
  topic.url = url;
  topic.cancel = cancel;
  return topic;
};

web3.setProvider(uport.getProvider());

export { web3, uport };
