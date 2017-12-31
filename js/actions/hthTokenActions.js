import hther from "../modules/hthTokenService";

export const requestBalance = () => ({
  type: "BALANCE_REQUEST",
  isFetching: true
});

export const receiveBalance = hthTokenBalance => ({
  type: "BALANCE_SUCCESS",
  isFetching: false,
  hthTokenBalance
});

export const receiveDataError = error => ({
  type: "DATA_ERROR",
  isFetching: false,
  error
});

export const getHthBalance = () => {
  function thunk(dispatch, getState) {
    dispatch(requestBalance());
    // dispatch({ type: "GET_BALANCE", payload: { key } });
    const address = getState().app.specificNetworkAddress.address;
    return new Promise((resolve, reject) => {
      hther
        .getBalance(address)
        .then(hthTokenBalance => {
          dispatch(receiveBalance(hthTokenBalance));
          resolve(hthTokenBalance);
        })
        .catch(error => {
          dispatch(receiveDataError(error));
          reject(new Error(error));
        });
    });
  }

  thunk.interceptInOffline = true;
  thunk.meta = {
    retry: true
  };
  return thunk;
};
