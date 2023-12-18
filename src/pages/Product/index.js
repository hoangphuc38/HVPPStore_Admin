import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import Button from '../../components/Button';
import { AddIcon } from '../../components/Icons';
import { useEffect, useState } from 'react';
import ProductItem from '../../components/ProductItem';
import config from '../../config';
import productAPI from '../../api/productAPI';

const cx = classNames.bind(styles);

function Product() {
    const optionClothes = [
        'Tất cả', 'Real Madrid', 'Arsenal'
    ];
    const optionSeasons = [
        'Tất cả', '2008-2009', '2009-2010', '2023-2024'
    ];
    const optionSortProducts = [
        'Chung',
        'Sản phẩm bán chạy nhất',
        'Sản phẩm bán ít nhất',
    ]

    const defaultOptionClothes = 'Chung';
    const defaultOptionSeasons = 'Mùa giải';
    const defaultOptionSortProducts = 'Lọc sản phẩm';

    const [removeItems, setRemoveItems] = useState([]);
    const [products, setProducts] = useState({});
    const [sortList, setSortList] = useState([]);

    //fetch API
    useEffect(() => {
        const fetchAPI = async () => {
            try {
                const params = { page: 1, productPerPage: 5 }
                const response = await productAPI.getAll(params);
                console.log("Success: ", response);
                setProducts(response);
                setSortList(response);

            } catch (error) {
                console.log("Xảy ra lỗi: ", error);
            }
        }

        fetchAPI();
    }, [products]);

    //Functions
    const HandleDeleteProduct = (product) => {
        let currentProducts = products;
        currentProducts = currentProducts.filter(item => item.id !== product.id);
        setSortList(currentProducts);
    }

    const addtoRemoveItems = (product) => {
        let removeList = removeItems;
        let selectedList = products;
        selectedList = selectedList.filter(item => item.id === product.id);
        removeList.push(selectedList[0]);

        setRemoveItems(removeList);
    }

    const HandleDeleteAllRemoveItems = () => {
        let currentProducts = products;
        currentProducts = currentProducts.filter(item => !removeItems.find(product => item.id === product.id));

        setSortList(currentProducts);
    }

    const sortSale = (option) => {
        if (option === "Sản phẩm bán được ít nhất") {
            let ascendingSale = [...sortList].sort((a, b) => a.sold - b.sold);
            console.log("Sắp xếp dưới lên: ", ascendingSale);
            setSortList(ascendingSale);
        }
        else if (option === "Sản phẩm bán được nhiều nhất") {
            let descendingSale = [...sortList].sort((a, b) => b.sold - a.sold);
            console.log("Sắp xếp trên xuống: ", descendingSale);
            setSortList(descendingSale);
        }
        else {
            setSortList(products);
        }
    }

    const sortCategory = (option) => {
        if (option === "Tất cả") {
            setSortList(products);
        }
        else {
            let sortedList = [...products].filter(product => product.description.includes(option))
            console.log(sortedList);
            setSortList(sortedList);
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
                        onChange={(e) => sortCategory(e.value)}
                        options={optionClothes}
                        value={defaultOptionClothes}
                        placeholder="Select" />

                    <Dropdown controlClassName={cx('Dropdown-control-season')}
                        arrowClosed={<span className={cx('arrow-closed')} />}
                        arrowOpen={<span className={cx('arrow-open')} />}
                        onChange={(e) => sortCategory(e.value)}
                        menuClassName={cx('menu-open')}
                        options={optionSeasons}
                        value={defaultOptionSeasons}
                        placeholder="Select" />
                </div>
                <Button href={config.routes.addProduct}
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
                            value={defaultOptionSortProducts}
                            placeholder="Select" />
                    </div>
                    <div className={cx('table-content')}>
                        {
                            sortList.length > 0 &&
                            sortList.map((product) => {
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
                </div>

            </div>

        </div>

    );
}

export default Product;