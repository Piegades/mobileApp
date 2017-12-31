import { combineReducers } from "redux";
import { reducer as network } from "../vendor/react-native-offline/src";
import app from "./uportReducer";
import data, { dataSaver } from "./dataReducer";
import hthToken from "./hthTokenReducer";
import notifications from "./notificationsReducer";

const appReducer = combineReducers({
  app,
  dataSaver,
  data,
  hthToken,
  notifications,
  network
});

/*   Clears the store state on logout    */
const rootReducer = (state, action) => {
  if (action.type === "LOGOUT_SUCCESS") {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
