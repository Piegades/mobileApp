export const dataSaver = (
  state = {
    isSending: false,
    message: '',
    publicKey: '',
  },
  action
) => {
  switch (action.type) {
    case 'SAVE_REQUEST':
      return {
        ...state,
        isSending: true,
      };
    case 'SAVE_SUCCESS':
      return {
        ...state,
        isSending: false,
      };
    case 'SAVE_ERROR':
      return {
        ...state,
        isSending: false,
        message: action.message,
      };
    case 'PUBLIC_KEY':
      return {
        ...state,
        publicKey: action.publicKey,
      };
    default:
      return state;
  }
};

const data = (
  state = {
    isFetching: false,
    message: '',
    data: [],
  },
  action
) => {
  switch (action.type) {
    case 'DATA_REQUEST':
      return {
        ...state,
        key: action.key,
        isFetching: true,
      };
    case 'DATA_SUCCESS':
      return {
        ...state,
        isFetching: false,
      };
    case 'DATA_ERROR':
      return {
        ...state,
        isFetching: false,
        message: action.message,
        data: [],
      };
    case 'NEW_DATA':
      return {
        ...state,
        key: action.key,
      };
    case 'NEW_BIOLOGICAL_INFORMATIONS':
      return {
        ...state,
        biologicalInformations: action.data.data,
      };
    case 'NEW_ILLNESSES_HISTORY':
      return {
        ...state,
        illnessesHistory: action.data.data,
      };
    default:
      return state;
  }
};

export default data;
