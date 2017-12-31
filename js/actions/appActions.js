const mnid = require("mnid");

export const connectUport = data => {
  const specificNetworkAddress = mnid.decode(data.address);
  return {
    type: "CONNECT_UPORT",
    data,
    specificNetworkAddress
  };
};

export const logoutUport = data => ({
  type: "LOGOUT_SUCCESS",
  data
});
