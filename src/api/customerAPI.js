import axiosClient from "./axiosClient";

class CustomerAPI {
    getAll = () => {
        const url = 'Customers/get-all';
        return axiosClient.get(url);
    }

    searchCustomer = (params) => {
        const url = `Products/filter-by?names=${params.name}&club=false&nation=false&minPrice=0&maxPrice=10000000&sortBy=Name&descending=false&sizeS=false&sizeM=false&sizeL=false&sizeXL=false&page=1&productPerPage=8`;
        return axiosClient.get(url, { params })
    }
}

const customerAPI = new CustomerAPI();
export default customerAPI;