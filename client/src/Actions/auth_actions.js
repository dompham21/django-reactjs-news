export const fetchLoginAction = (dataToSubmit, navigate) => {
    return {
      type: 'AUTH_LOGIN',
      dataToSubmit,
      navigate
    }
}

export const loginActionSuccess = (data) => {
  return {
    type: 'AUTH_LOGIN_SUCCESS',
    data
  }
}

export const loginActionFailed = (error) => {
  return {
    type: 'AUTH_LOGIN_FAILED',
    payload: error
  }
}

export const fetchRegisterAction = (dataToSubmit, navigate) => {
  return {
    type: 'AUTH_REGISTER',
    dataToSubmit,
    navigate
    
  }
}

export const registerActionSuccess = (dataToSubmit) => {
return {
  type: 'AUTH_REGISTER_SUCCESS',
  dataToSubmit
}
}

export const registerActionFailed = (error) => {
return {
  type: 'AUTH_REGISTER_FAILED',
  payload: error
}
}