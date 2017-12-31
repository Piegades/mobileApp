const uport = (
  state = {
    uport: null,
    specificNetworkAddress: null,
  },
  action
) => {
  switch (action.type) {
    case 'CONNECT_UPORT':
      return {
        ...state,
        uport: action.data,
        specificNetworkAddress: action.specificNetworkAddress,
        whisper: {
         	pubKey: "0x041c6d034d4610e2da5a2feb713ceedf734f0e5030fb4eccff9e9c69f3b6e0096d4f3f4aabec6f5da6e88f52fcf30cca7a04177595f0ba4710f4849fc1dc123ea6",
				  sig: "2c83922ee3b79599d922d4b98cec51f7f13ad5f87d5d222b8df14865c75b8d29",
		
        }
      };
    case 'LOGOUT':
      return {
        ...state,
        uport: null,
        specificNetworkAddress: null,
      };
    default:
      return state;
  }
};

export default uport;
