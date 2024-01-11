import axiosClient from "./axiosClient";

class OrderAPI {
    getAll = () => {
        const url = `Orders/get-orders?orderType=0&month=0&customerID=-1&today=false`;
        return axiosClient.get(url)
    }

    getDetailOrder = (orderID) => {
        const url = `OrderDetails/get-detail/${orderID}`;
        return axiosClient.get(url, { orderID });
    }

    updateStatusOrder = (orderID) => {
        const url = `Orders/update-status/${orderID}`;
        return axiosClient.put(url);
    }

    searchProduct = (params) => {
        const url = `Products/filter-by?names=${params.name}&club=false&nation=false&minPrice=0&maxPrice=10000000&sortBy=Name&descending=false&sizeS=false&sizeM=false&sizeL=false&sizeXL=false&page=1&productPerPage=8`;
        return axiosClient.get(url, { params })
    }
}

const orderAPI = new OrderAPI();
export default orderAPI;