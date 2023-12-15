import axiosClient from "./axiosClient";

class ProductAPI {
    getAll = () => {
        const url = 'Products/get-all';
        return axiosClient.get(url);
    }
}

const productAPI = new ProductAPI();
export default productAPI;