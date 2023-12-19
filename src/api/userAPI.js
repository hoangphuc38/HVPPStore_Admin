import axiosClient from "./axiosClient";

class UserAPI {
    login = (email, password) => {
        const url = 'Accounts/login';
        return axiosClient.post(url, { email, password });
    }
}

const userAPI = new UserAPI();
export default userAPI;