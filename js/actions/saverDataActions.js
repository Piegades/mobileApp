import { showNotification, hideNotification } from "./notificationsActions";
import { newData } from "./fetchDataActions";

import dater from "../modules/dataService";

export const saveDataRequest = () => ({
  type: "SAVE_REQUEST",
  isSending: true
});

export const saveDataSuccess = () => ({
  type: "SAVE_SUCCESS",
  isSending: false
});

export const saveDataError = message => ({
  type: "SAVE_ERROR",
  isSending: false,
  message
});

export const getPublicKey = publicKey => ({
  type: "PUBLIC_KEY",
  publicKey
});

export const showSpinner = () => dispatch => {
  dispatch(saveDataRequest());
};

export const saveData = (key, data) => {
  function thunk(dispatch, getState) {
    const address = getState().app.specificNetworkAddress.address;
    const secureData = {
      userAddress: address,
      key,
      time: new Date(),
      id: address + Date.now(),
      data
    };
    dater
      .set(key, address, secureData)
      .then(() => {
        dispatch(saveDataSuccess());
        dispatch(newData(secureData));
        dispatch(showNotification("sentOk"));
        setTimeout(() => {
          dispatch(hideNotification("sentOk"));
        }, 5000);
      })
      .catch(message => {
        dispatch(saveDataError(message));
      });
  }

  thunk.interceptInOffline = true;
  thunk.meta = {
    retry: false, // for know because we need to go on the uPort moblile app for accept the request. Ehn switching on the mobile sdk it will be ok
    dismiss: ["NAVIGATE_BACK"]
  };
  return thunk;
};
