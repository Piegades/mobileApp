const hthToken = (
  state = {
    isFetching: false,
    hthTokenBalance: null
  },
  action
) => {
  switch (action.type) {
    case "BALANCE_REQUEST":
      return {
        ...state,
        isFetching: true
      };
    case "BALANCE_SUCCESS":
      return {
        ...state,
        isFetching: false,
        hthTokenBalance: action.hthTokenBalance
      };
    case "BALANCE_ERROR":
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    default:
      return state;
  }
};

export default hthToken;
