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

    getAscendingSaleList = () => {
        const url = `Products/filter-by?club=true&nation=true&minPrice=0&maxPrice=10000000&sortBy=Sold&descending=false&sizeS=false&sizeM=false&sizeL=false&sizeXL=false&page=1&productPerPage=5`;
        return axiosClient.get(url);
    }

    getDescendingSaleList = () => {
        const url = `Products/filter-by?club=true&nation=true&minPrice=0&maxPrice=10000000&sortBy=Sold&descending=true&sizeS=false&sizeM=false&sizeL=false&sizeXL=false&page=1&productPerPage=5`;
        return axiosClient.get(url);
    }

    getByClub = (club) => {
        const url = `Products/filter-by?names=${club}&club=false&nation=false&minPrice=0&maxPrice=10000000&sortBy=Name&sizeS=false&sizeM=false&sizeL=false&sizeXL=false&page=1&productPerPage=5`;
        return axiosClient.get(url);
    }

    getBySeason = (season) => {
        const url = `Products/filter-by?seasons=${season}&club=false&nation=false&minPrice=0&maxPrice=10000000&sortBy=Name&sizeS=false&sizeM=false&sizeL=false&sizeXL=false&page=1&productPerPage=5`;
        return axiosClient.get(url);
    }

    deleteProduct = (id) => {
        const url = `Products/delete/${id}`;
        return axiosClient.delete(url);
    }

    addProduct = (name, club, nation, season, price, sizeS, sizeM, sizeL, sizeXL, description, urlMain, urlSub1, urlSub2, urlThumb) => {
        const url = `Products/new-product`;
        return axiosClient.postForm(url, {
            Name: name,
            Club: club,
            Nation: nation,
            Season: season,
            Price: price,
            SizeS: sizeS,
            SizeM: sizeM,
            SizeL: sizeL,
            SizeXL: sizeXL,
            Description: description,
            UrlMain: urlMain,
            UrlSub1: urlSub1,
            UrlSub2: urlSub2,
            UrlThumb: urlThumb
        });
    }

    updateProduct = (productID, name, club, nation, season, price, sizeS, sizeM, sizeL, sizeXL, description, urlMain, urlSub1, urlSub2, urlThumb) => {
        const url = `Products/update/${productID}`;
        return axiosClient.put(url, {
            productId: productID,
            Name: name,
            Club: club,
            Nation: nation,
            Season: season,
            Price: price,
            SizeS: sizeS,
            SizeM: sizeM,
            SizeL: sizeL,
            SizeXL: sizeXL,
            Description: description,
            UrlMain: urlMain,
            UrlSub1: urlSub1,
            UrlSub2: urlSub2,
            UrlThumb: urlThumb
        })
    }
}

const productAPI = new ProductAPI();
export default productAPI;