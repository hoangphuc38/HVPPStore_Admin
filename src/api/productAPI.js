import axiosClient from "./axiosClient";

class ProductAPI {
    getAll = (params) => {
        const url = `Products/filter-by?club=false&nation=false&minPrice=0&maxPrice=10000000&sortBy=Name&descending=false&sizeS=false&sizeM=false&sizeL=false&sizeXL=false&page=${params.page}&productPerPage=${params.productPerPage}`;
        return axiosClient.get(url, { params })
    }

    getDetailProduct = (params) => {
        const url = `Products/get-by-id/${params.id}`
        return axiosClient.get(url, { params })
    }

    searchProduct = (value) => {
        const url = `Products/get-by-search/${value}/1/5`;
        return axiosClient.get(url, { value })
    }

    getTopSelling = (month, year) => {
        const url = `Products/top-selling/${month}/${year}`
        return axiosClient.get(url, { month, year });
    }

    getDescendingSaleList = () => {
        const url = `Products/filter-by?club=false&nation=false&minPrice=0&maxPrice=10000000&sortBy=Sold&descending=false&sizeS=false&sizeM=false&sizeL=false&sizeXL=false&page=1&productPerPage=5`
        return axiosClient.get(url);
    }
}

const productAPI = new ProductAPI();
export default productAPI;