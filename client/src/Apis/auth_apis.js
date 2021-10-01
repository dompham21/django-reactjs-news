import axiosService from "../Helper/axiosService";


export const postLoginApi = (dataToSubmit) => {
    const { username, password } = dataToSubmit
    return axiosService.post(`/api/token/`,{
       username: username,
       password: password
    });
}

export const postRegisterApi = (dataToSubmit) => {
    const { username, email, password, confirmPassword } = dataToSubmit
    return axiosService.post(`/api/register/`,{
        username: username,
        email: email,
        password: password,
        password2: confirmPassword,
        first_name: "dai",
	    last_name: "ca"
    });
}