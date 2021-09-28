import jwtDecode from 'jwt-decode';
import axiosService from './axiosService';

const isValidToken = (accessToken) => {
    if (!accessToken) {
      return false;
    }
    try {
        const decoded = jwtDecode(accessToken);
        if(decoded && decoded.exp) {
            const currentTime = Date.now() / 1000;
            
            return decoded.exp > currentTime;
        }
        return false;
    } catch (error) {
        return false;
    }
   
};


const setSession = (accessToken) => {
    if (accessToken) {
      localStorage.setItem('accessToken', accessToken);
      axiosService.instance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    } else {
      localStorage.removeItem('accessToken');
      delete  axiosService.instance.defaults.headers.common.Authorization;
    }
};

export { isValidToken, setSession };
