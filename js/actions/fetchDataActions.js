import dater from "../modules/dataService";

/*
 * ADD ENCRYPTION SUPPORT MORE INFORMATIONS IN LAST VERSION OF KANTUMID /!\ CANNOT USE IN PROD
 */

export const newBiologicalInformations = data => ({
  type: "NEW_BIOLOGICAL_INFORMATIONS",
  data
});

export const newIllnessesHistory = data => ({
  type: "NEW_ILLNESSES_HISTORY",
  data
});

export const newData = data => dispatch => {
  console.log(data);
  if (data.key === "biologicalInformations") {
    dispatch(newBiologicalInformations(data));
  } else if (data.key === "illnessesHistory") {
    dispatch(newIllnessesHistory(data));
  }

  return {
    type: "NEW_DATA",
    data
  };
};

export const requestData = key => ({
  type: "DATA_REQUEST",
  isFetching: true,
  key
});

export const receiveData = data => ({
  type: "DATA_SUCCESS",
  isFetching: false,
  data
});

export const receiveDataError = message => ({
  type: "DATA_ERROR",
  isFetching: false,
  message
});

export const fetchData = key => {
  function thunk(dispatch, getState) {
    dispatch(requestData(key));
    dispatch({ type: "FETCH_DATA", payload: { key } });
    const address = getState().app.specificNetworkAddress.address;
    return new Promise((resolve, reject) => {
      dater
        .get(key, address)
        .then(responseData => {
          dispatch(newData(responseData)); //  dispatch({type: NEW_DATA, payload: responseData});
          dispatch(receiveData(responseData));
          resolve(responseData);
        })
        .catch(message => {
          dispatch(receiveDataError(message));
          reject(new Error(message));
        });
    });
  }

  thunk.interceptInOffline = true;
  thunk.meta = {
    retry: true
  };
  return thunk;
};
