export const showDrawerPreview = () => ({
    type: 'SHOW_DRAWER_PREVIEW',
  });
  
  export const hideDrawerPreview = () => ({
    type: 'HIDE_DRAWER_PREVIEW',
  });

  export const htmlFromEditor = (html) => {
      return {
        type: 'HTML_FROM_EDITOR',
        payload: html
      }
  }