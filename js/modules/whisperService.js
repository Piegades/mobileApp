import Web3 from "web3";
import { uport } from "./uportSetup"; //web3 maybe in the futur
import { decodeFromHex, encodeToHex } from "./hexutils";

const defaultRecipientPubKey =
  "0x04ffb2647c10767095de83d45c7c0f780e483fb2221a1431cb97a5c61becd3c22938abfe83dd6706fc1154485b80bc8fcd94aea61bf19dd3206f37d55191b9a9c4";
const asymKeyId =
  "0x046cd466461c09afc290775928a315db7a163ea4feee31a0fe310520805eab07e5ae034f741d15f737e3650639877c2ecb7e73ffc27fea1411a8d19ceade8fc06c";
const defaultTopic = "0x5a4ea131";

const web3 = new Web3(
  new Web3.providers.HttpProvider("https://933056e0.ngrok.io")
);
/*
// It's fucking wokring!!!!!!!!!!!!!!!!!!!!
uport.attestCredentials({
  sub: "2oiSDedvWjc85fhSXscAdVhFEgJ1YzTZCmY", // this.props.uport.address
  claim: { kantum: { bloodType: "AB+" }},
  exp: new Date().getTime() + 30 * 24 * 60 * 60 * 1000, // 30 days from now
  uriHandler: log => {
    console.log(log);
  }
});
*/
const whisperService = {
  data() {
    let data = {
      msgs: [],
      text: "",
      symKeyId: null,
      name: "",
      asymKeyId: null,
      sympw: "",
      asym: true,
      configured: false,
      topic: defaultTopic,
      recipientPubKey: defaultRecipientPubKey,
      asymPubKey: ""
    };

    web3.shh
      .newKeyPair()
      .then(id => {
        data.asymKeyId = id;
        return web3.shh
          .getPublicKey(id)
          .then(pubKey => (data.pubKey = pubKey))
          .catch(console.log);
      })
      .catch(console.log);
    return data;
  },

  sendMessage(payload, asymKeyId, recipientPubKey) {
    let postData = {
      ttl: 7,
      topic: "0x07678231",
      powTarget: 2.01,
      powTime: 100,
      payload: encodeToHex(JSON.stringify(payload))
    };

    postData.pubKey =
      "0x048957f2de476859b930df76dec2b1df1299e5a53d54c438e2c3ffcaf0e6fa9a744a96b8f7ca0da174dfd352ead2a4b518cd93af8d141ca2ec3a593143101cd070";
    postData.sig =
      "5134917535fa000afa4b0290623d857cc9b5beb1c6ea1f9b7cbc4dd553e28310";

    web3.shh.post(postData, (error, result) => {
      if (error) {
        console.log(error);
      }
      console.log(result);
    });
  },

  configWithKey() {
    let filter = {
      topics: ["0xdeadbeef"]
    };

    filter.privateKeyID =
      "5134917535fa000afa4b0290623d857cc9b5beb1c6ea1f9b7cbc4dd553e28310";

    web3.shh.newMessageFilter(filter).then(filterId => {
      setInterval(() => {
        web3.shh.getFilterMessages(filterId).then(messages => {
          for (let msg of messages) {
            let message = decodeFromHex(msg.payload);
            console.log(message);
          }
        });
      }, 1000);
    });
    this.configured = true;
  }
};

whisperService.data();

whisperService.sendMessage(
  "caca des iles caraibes",
  asymKeyId,
  defaultRecipientPubKey
);
/*
whisperService.configWithKey((error, result) => {
  if (error) {
    console.log(error);
  } else {
    console.log(result);
  }
});
*/
export default whisperService;
