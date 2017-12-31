import thunk from "redux-thunk";
import { applyMiddleware, createStore, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { createNetworkMiddleware } from "./vendor/react-native-offline/src";
import createSensitiveStorage from "redux-persist-sensitive-storage";

import rootReducer from "./reducers/index";

// Maybe use it for add another layer of security
// https://stackoverflow.com/questions/45137911/react-native-persist-and-encrypt-user-token-redux-persist-transform-encrypt-er

const reduxPersistConfig = {
  key: "root",
  storage: createSensitiveStorage({
    keychainService: "myKeychain", // CHANGE THE PASSWORD -- use fingerprint => https://github.com/mCodex/react-native-sensitive-info#protect-your-item-with-fingerprint
    sharedPreferencesName: "mySharedPrefs" // CHANGE THE PASSWORD -- use fingerprint =^
  }),
  backlist: ["network"] // For now because a bug with react-native offline
  // https://github.com/rauliyohmc/react-native-offline/issues/35
};

const networkMiddleware = createNetworkMiddleware();

const reducer = persistReducer(reduxPersistConfig, rootReducer);

export default function configureStore() {
  let store;
  if (__DEV__ && window.__REDUX_DEVTOOLS_EXTENSION__) {
    store = createStore(
      reducer,
      compose(
        applyMiddleware(networkMiddleware, thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      )
    );
  } else {
    store = createStore(
      reducer,
      compose(applyMiddleware(networkMiddleware, thunk))
    );
  }

  const persistor = persistStore(store);
  return { store, persistor };
}
