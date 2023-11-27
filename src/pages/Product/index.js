import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import Button from '../../components/Button';
import { AddIcon } from '../../components/Icons';
import { useState } from 'react';
import ProductItem from '../../components/ProductItem';
import config from '../../config';

const cx = classNames.bind(styles);

function Product() {
    const products = [
        {
            id: '001',
            image: 'https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog-MAN/default/dw21a150b7/images/large/701225667001_pp_01_mcfc.png?sw=400&sh=400&sm=fit',
            description: 'Áo Real Madrid màu đen mùa 2009-2010',
            price: '500.000đ',
            stars: '5',
            sold: '2.0',
        },
        {
            id: '002',
            image: 'https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog-MAN/default/dw21a150b7/images/large/701225667001_pp_01_mcfc.png?sw=400&sh=400&sm=fit',
            description: 'Áo Real Madrid màu đen mùa 2023-2024',
            price: '200.000đ',
            stars: '5',
            sold: '4.0',
        },
        {
            id: '003',
            image: 'https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog-MAN/default/dw21a150b7/images/large/701225667001_pp_01_mcfc.png?sw=400&sh=400&sm=fit',
            description: 'Áo Arsenal màu đen mùa 2009-2010',
            price: '300.000đ',
            stars: '5',
            sold: '3.0',
        },
        {
            id: '004',
            image: 'https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog-MAN/default/dw21a150b7/images/large/701225667001_pp_01_mcfc.png?sw=400&sh=400&sm=fit',
            description: 'Áo Arsenal màu đen mùa 2023-2024',
            price: '250.000đ',
            stars: '5',
            sold: '9.0',
        },
        {
            id: '005',
            image: 'https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog-MAN/default/dw21a150b7/images/large/701225667001_pp_01_mcfc.png?sw=400&sh=400&sm=fit',
            description: 'Áo Real Madrid màu đen mùa 2008-2009',
            price: '290.000đ',
            stars: '5',
            sold: '2.5',
        },

    ];

    const optionClothes = [
        'Tất cả', 'Real Madrid', 'Arsenal'
    ];
    const optionSeasons = [
        'Tất cả', '2008-2009', '2009-2010', '2023-2024'
    ];
    const optionSortProducts = [
        'Chung',
        'Sản phẩm bán được nhiều nhất',
        'Sản phẩm bán được ít nhất',
    ]

    const defaultOptionClothes = 'Chung';
    const defaultOptionSeasons = 'Mùa giải';
    const defaultOptionSortProducts = 'Lọc sản phẩm';

    const [removeItems, setRemoveItems] = useState([]);
    const [sortList, setSortList] = useState(products);

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
            </div>
            <div className={cx('product-table-wrapper')}>
                <div className={cx('product-table')}>
                    <div className={cx('functions')}>
                        <Button onClick={HandleDeleteAllRemoveItems} red>Xóa sản phẩm đã chọn</Button>

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