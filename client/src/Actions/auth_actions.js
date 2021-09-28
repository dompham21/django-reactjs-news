export const fetchLoginAction = (dataToSubmit) => {
    return {
      type: 'AUTH_LOGIN',
      dataToSubmit
    }
}