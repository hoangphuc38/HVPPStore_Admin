import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import Button from '../../components/Button';
import { AddIcon } from '../../components/Icons';
import { useContext, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import ProductItem from '../../components/ProductItem';
import config from '../../config';
import productAPI from '../../api/productAPI';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotate } from '@fortawesome/free-solid-svg-icons';
import { ProductContext } from '../../contexts/productContext';

const cx = classNames.bind(styles);

function Product() {
    const optionClothes = [
        'Tất cả',
        'AC Milan', 'Argentina', 'Bayern Munich', 'Brazil', 'Liverpool',
        'Germany', 'Real Madrid',
    ];
    const optionSeasons = [
        'Tất cả', '1988/1989', '1995/1996', '1998/1999', '2000/2001',
        '2004/2005', '2006/2007', '2009/2010',
    ];
    const optionSortProducts = [
        'Chung',
        'Sản phẩm bán chạy nhất',
        'Sản phẩm bán ít nhất',
    ]

    const defaultOptionClothes = 'Chung';
    const defaultOptionSeasons = 'Mùa giải';

    const { products, setProducts } = useContext(ProductContext);
    const [currentPage, setCurrentPage] = useState(1);
    const [removeItems, setRemoveItems] = useState([]);
    const [sortOption, setSortOption] = useState("Lọc sản phẩm");
    const [loading, setLoading] = useState(true);

    //fetch API
    useEffect(() => {
        const fetchAPI = async () => {
            try {
                const params = { page: 1, productPerPage: 5 }
                const response = await productAPI.getAll(params);
                console.log("Success: ", response);
                setProducts(response);
                setLoading(false);

            } catch (error) {
                console.log("Xảy ra lỗi: ", error);
            }
        }

        fetchAPI();
    }, []);

    //Functions
    const handlePageClick = async (event) => {
        setLoading(true);
        try {
            setCurrentPage(event.selected + 1);
            console.log("current page: ", event.selected + 1);
            const params = { page: event.selected + 1, productPerPage: 5 }
            const response = await productAPI.getAll(params);
            console.log("Success: ", response);
            setProducts(response);
            setLoading(false);

        } catch (error) {
            console.log("Xảy ra lỗi: ", error);
            setLoading(false);
        }
    }

    const HandleDeleteProduct = async (product) => {
        const params = { page: 1, productPerPage: 5 }
        return await productAPI.deleteProduct(product.id)
            .then(() => {
                productAPI.getAll(params).then((res) => {
                    setProducts(res);
                })
            })
            .catch((error) => console.log(error));
    }

    const addtoRemoveItems = (product) => {
        removeItems.push(product.id);
    }

    const HandleDeleteAllRemoveItems = () => {
        const params = { page: 1, productPerPage: 5 }
        removeItems.forEach((productID) => {
            productAPI.deleteProduct(productID);
        })
        productAPI.getAll(params).then((res) => {
            setProducts(res);
        })
    }

    const sortSale = async (option) => {
        setSortOption(option);

        if (option === "Sản phẩm bán chạy nhất") {
            return await productAPI.getDescendingSaleList()
                .then((res) => {
                    setProducts(res);
                    console.log("List:", res)
                })
                .catch((error) => console.log(error));
        }

        else if (option === "Sản phẩm bán ít nhất") {
            return await productAPI.getAscendingSaleList()
                .then((res) => {
                    setProducts(res);
                    console.log("List: ", res);
                })
                .catch((error) => console.log(error));
        }

        else {
            const params = { page: 1, productPerPage: 5 }
            return await productAPI.getAll(params)
                .then((res) => {
                    setProducts(res);
                })
                .catch((error) => console.log(error));
        }
    }

    const sortCategoryClub = async (option) => {
        if (option !== 'Tất cả') {
            return await productAPI.getByClub(option)
                .then((res) => {
                    setProducts(res);
                    console.log("List:", res)
                })
                .catch((error) => console.log(error));
        }
        else {
            const params = { page: 1, productPerPage: 5 }
            return await productAPI.getAll(params)
                .then((res) => {
                    setProducts(res);
                })
                .catch((error) => console.log(error));
        }
    }

    const sortCategorySeason = async (option) => {
        if (option !== 'Tất cả') {
            return await productAPI.getBySeason(option)
                .then((res) => {
                    setProducts(res);
                    console.log("List:", res)
                })
                .catch((error) => console.log(error));
        }
        else {
            const params = { page: 1, productPerPage: 5 }
            return await productAPI.getAll(params)
                .then((res) => {
                    setProducts(res);
                })
                .catch((error) => console.log(error));
        }
    }

    return (
        <div className={cx('content')}>
            <div className={cx('sortbars-and-button')}>
                <div className={cx('sortbars')}>
                    <Dropdown controlClassName={cx('Dropdown-control')}
                        arrowClosed={<span className={cx('arrow-closed')} />}
                        arrowOpen={<span className={cx('arrow-open')} />}
                        menuClassName={cx('menu-open')}
                        onChange={(e) => sortCategoryClub(e.value)}
                        options={optionClothes}
                        value={defaultOptionClothes}
                        placeholder="Select" />

                    <Dropdown controlClassName={cx('Dropdown-control-season')}
                        arrowClosed={<span className={cx('arrow-closed')} />}
                        arrowOpen={<span className={cx('arrow-open')} />}
                        onChange={(e) => sortCategorySeason(e.value)}
                        menuClassName={cx('menu-open')}
                        options={optionSeasons}
                        value={defaultOptionSeasons}
                        placeholder="Select" />
                </div>
                <Button to={config.routes.addProduct}
                    className={cx('add-product-btn')}
                    primary
                    leftIcon={<AddIcon width={30} height={30} />}>Thêm sản phẩm</Button>

                <Button href={config.routes.addProduct}
                    className={cx('add-product-btn-mobile')}
                    primary>Thêm sản phẩm</Button>

                <a href={config.routes.addProduct}
                    className={cx('add-product-btn-mobile-icon')}>
                    <AddIcon width={20} height={20} />
                </a>
            </div>
            <div className={cx('product-table-wrapper')}>
                <div className={cx('product-table')}>
                    <div className={cx('functions')}>
                        <Button onClick={HandleDeleteAllRemoveItems}
                            red
                            className={cx('delete-btn')}>Xóa sản phẩm đã chọn</Button>

                        <button onClick={HandleDeleteAllRemoveItems}
                            className={cx('delete-btn-mobile')}>Xóa tất cả</button>

                        <Dropdown controlClassName={cx('Dropdown-control-sort')}
                            arrowClosed={<span className={cx('arrow-closed-sort')} />}
                            arrowOpen={<span className={cx('arrow-open-sort')} />}
                            onChange={(e) => sortSale(e.value)}
                            menuClassName={cx('menu-open')}
                            options={optionSortProducts}
                            value={sortOption}
                            placeholder="Select" />
                    </div>
                    {loading ? <FontAwesomeIcon icon={faRotate} spin />
                        : <div className={cx('table-content')}>
                            {
                                products.length > 0 &&
                                products.map((product) => {
                                    return (
                                        <ProductItem key={product.id}
                                            data={product}
                                            deleteItem={() => addtoRemoveItems(product)}
                                            onClick={() => HandleDeleteProduct(product)}
                                            href={`/product/${product.id}`} />
                                    )
                                })
                            }

                        </div>
                    }

                </div>


            </div>
            <div className={cx('pagination-container')}>
                <ReactPaginate
                    nextLabel=">"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    pageCount={5}
                    previousLabel="<"
                    renderOnZeroPageCount={null}
                    containerClassName={cx('pagination')}
                    previousLinkClassName={cx('paginationLink')}
                    nextLinkClassName={cx('paginationLink')}
                    disabledClassName={cx('paginationDisabled')}
                    activeClassName={cx('paginationActive')}
                />
            </div>



        </div>

    );
}

export default Product;