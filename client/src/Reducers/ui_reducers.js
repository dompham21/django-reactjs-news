
const initialState = {
    showDrawerPreview: false,
    htmlFromEditor: '',
};

  
const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SHOW_DRAWER_PREVIEW': {
        return {
          ...state,
          showDrawerPreview: true,
        };
      }
      case 'HIDE_DRAWER_PREVIEW': {
        return {
          ...state,
          showDrawerPreview: false,
        };
      }
      case 'HTML_FROM_EDITOR': {
          return {
              ...state,
              htmlFromEditor: action.payload
          }
      }
      default:
        return state;
    }
  };
  
  export default reducer;