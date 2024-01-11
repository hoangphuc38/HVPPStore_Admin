import axiosClient from "./axiosClient";

class CustomerAPI {
    getAll = () => {
        const url = 'Customers/get-all';
        return axiosClient.get(url);
    }

    getbyID = (customerID) => {
        const url = `Customers/get-by-id/${customerID}`;
        return axiosClient.get(url, { customerID });
    }

    searchCustomer = (name) => {
        const url = `Customers/search-by-name?name=${name}`;
        return axiosClient.get(url, { name })
    }
}

const customerAPI = new CustomerAPI();
export default customerAPI;