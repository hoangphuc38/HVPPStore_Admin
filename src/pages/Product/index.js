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
    const [products, setProducts] = useState([
        {
            id: '001',
            image: '',
            description: 'Áo Real Madrid màu đen mùa 2023-2024',
            price: '200.000đ',
            stars: '5',
            sold: '2.0',
        },
        {
            id: '002',
            image: '',
            description: 'Áo Real Madrid màu đen mùa 2023-2024',
            price: '200.000đ',
            stars: '5',
            sold: '2.0',
        },
        {
            id: '003',
            image: '',
            description: 'Áo Real Madrid màu đen mùa 2023-2024',
            price: '200.000đ',
            stars: '5',
            sold: '2.0',
        },
        {
            id: '004',
            image: '',
            description: 'Áo Real Madrid màu đen mùa 2023-2024',
            price: '200.000đ',
            stars: '5',
            sold: '2.0',
        },
        {
            id: '005',
            image: '',
            description: 'Áo Real Madrid màu đen mùa 2023-2024',
            price: '200.000đ',
            stars: '5',
            sold: '2.0',
        },

    ]);

    const optionClothes = [
        'Áo 1', 'Áo 2'
    ];
    const optionSeasons = [
        '2008', '2009', '2010'
    ];
    const optionSortProducts = [
        'Sản phẩm bán được nhiều nhất',
        'Sản phẩm bán được ít nhất',
    ]

    const defaultOptionClothes = 'Chung';
    const defaultOptionSeasons = 'Mùa giải';
    const defaultOptionSortProducts = 'Lọc sản phẩm';

    //Functions
    const HandleDeleteProduct = (product) => {
        let currentProducts = products;
        currentProducts = currentProducts.filter(item => item.id !== product.id);
        setProducts(currentProducts);
    }


    return (
        <div className={cx('content')}>
            <div className={cx('sortbars-and-button')}>
                <div className={cx('sortbars')}>
                    <Dropdown controlClassName={cx('Dropdown-control')}
                        arrowClosed={<span className={cx('arrow-closed')} />}
                        arrowOpen={<span className={cx('arrow-open')} />}
                        menuClassName={cx('menu-open')}
                        options={optionClothes}
                        value={defaultOptionClothes}
                        placeholder="Select" />

                    <Dropdown controlClassName={cx('Dropdown-control-season')}
                        arrowClosed={<span className={cx('arrow-closed')} />}
                        arrowOpen={<span className={cx('arrow-open')} />}
                        menuClassName={cx('menu-open')}
                        options={optionSeasons}
                        value={defaultOptionSeasons}
                        placeholder="Select" />
                </div>
                <Button href={config.routes.addProduct} className={cx('add-product-btn')} primary leftIcon={<AddIcon />}>Thêm sản phẩm</Button>
            </div>
            <div className={cx('product-table-wrapper')}>
                <div className={cx('product-table')}>
                    <div className={cx('functions')}>
                        <Button red>Xóa sản phẩm đã chọn</Button>

                        <Dropdown controlClassName={cx('Dropdown-control-sort')}
                            arrowClosed={<span className={cx('arrow-closed-sort')} />}
                            arrowOpen={<span className={cx('arrow-open-sort')} />}
                            menuClassName={cx('menu-open')}
                            options={optionSortProducts}
                            value={defaultOptionSortProducts}
                            placeholder="Select" />
                    </div>
                    <div className={cx('table-content')}>
                        {
                            products.length > 0 &&
                            products.map((product) => {
                                return (
                                    <ProductItem data={product} onClick={() => HandleDeleteProduct(product)} href={`/product/${product.id}`} />
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