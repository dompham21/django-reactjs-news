
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
      default:
        return state;
    }
  };
  
  export default reducer;