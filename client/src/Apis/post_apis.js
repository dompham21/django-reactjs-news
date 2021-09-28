import axiosService from "../Helper/axiosService";

export const getPost = () => {
    return axiosService.get(`/api/post`,{
        params: {
            page: 2
        }
    });
};

