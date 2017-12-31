/* @flow */

import React from "react";
import { StyleSheet, View } from "react-native";
import { MemoryRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { NativeRouter, AndroidBackButton } from "react-router-native";
import { PersistGate } from "redux-persist/lib/integration/react";
import { withNetworkConnectivity } from "./vendor/react-native-offline/src";
import configureStore from "./store";

import Loading from "./components/Loading/index";
import FirstView from "./components/FirstView";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./components/Home/";
import Flights from "./components/Flights/";
import Luggages from "./components/Luggages/";
import LuggageMap from "./components/Luggages/LuggageMap";
import Account from "./components/Account";
import Settings from "./components/Settings";

import Intro from "./components/Intro";

const { store, persistor } = configureStore();

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

App = () => (
  <MemoryRouter>
    <AndroidBackButton>
      <View style={styles.container}>
        <Route exact path="/" component={Intro} />
        <Route path="/home" component={Home} />
        <Route path="/flights" component={Flights} />
        <Route path="/luggages" component={Luggages} />
        <Route path="/luggagemap" component={LuggageMap} />
        <Route path="/account" component={Account} />
        <Route path="/settings" component={Settings} />
      </View>
    </AndroidBackButton>
  </MemoryRouter>
);

App = withNetworkConnectivity({
  withRedux: true,
  timeout: 3000,
  pingServerUrl: "https://google.com",
  withExtraHeadRequest: true,
  checkConnectionInterval: 3000
})(App);

export default () => (
  <NativeRouter>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<Loading />}>
        <App />
      </PersistGate>
    </Provider>
  </NativeRouter>
);
