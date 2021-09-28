import axiosService from "../Helper/axiosService";


export const postLoginApi = (dataToSubmit) => {
    const { email, password } = dataToSubmit
    return axiosService.post(`/api/login`,{
       email: "",
       password: ""
    });
}