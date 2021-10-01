
const initialState = {
   loading: false,
   
};

  
const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'AUTH_LOGIN': {
        return {
          ...state,
          loading: true,
        };
      }
      case 'AUTH_LOGIN_FAILED': {
        return {
          ...state,
          loading: false,
        }
      }
      case 'AUTH_LOGIN_SUCCESS': {
        return {
          ...state,
          loading: false,
        }
      }
      case 'AUTH_REGISTER': {
        return {
          ...state,
          loading: true,
        };
      }
      case 'AUTH_REGISTER_FAILED': {
        return {
          ...state,
          loading: false,
        }
      }
      case 'AUTH_REGISTER_SUCCESS': {
        return {
          ...state,
          loading: false,
        }
      }
      default:
        return state;
    }
  };
  
  export default reducer;