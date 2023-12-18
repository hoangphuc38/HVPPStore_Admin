import axiosClient from "./axiosClient";

class OrderAPI {
    getAll = (params) => {
        const url = `Products/filter-by?club=false&nation=false&minPrice=0&maxPrice=10000000&sortBy=Name&descending=false&sizeS=false&sizeM=false&sizeL=false&sizeXL=false&page=${params.page}&productPerPage=${params.productPerPage}`;
        return axiosClient.get(url, { params })
    }

    searchProduct = (params) => {
        const url = `Products/filter-by?names=${params.name}&club=false&nation=false&minPrice=0&maxPrice=10000000&sortBy=Name&descending=false&sizeS=false&sizeM=false&sizeL=false&sizeXL=false&page=1&productPerPage=8`;
        return axiosClient.get(url, { params })
    }
}

const orderAPI = new OrderAPI();
export default orderAPI;