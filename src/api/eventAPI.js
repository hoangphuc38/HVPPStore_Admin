import axiosClient from "./axiosClient";

class EventAPI {
    getAll = () => {
        const url = 'Vouchers/get-all';
        return axiosClient.get(url)
    }

    searchEvent = (params) => {
        const url = `Products/filter-by?names=${params.name}&club=false&nation=false&minPrice=0&maxPrice=10000000&sortBy=Name&descending=false&sizeS=false&sizeM=false&sizeL=false&sizeXL=false&page=1&productPerPage=8`;
        return axiosClient.get(url, { params })
    }

    getEventById = (id) => {
        const url = `Vouchers/get-by-id/${id}`;
        return axiosClient.get(url, { id });
    }
}

const eventAPI = new EventAPI();
export default eventAPI;