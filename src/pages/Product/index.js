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
        { id: '001', image: '', description: 'Áo Real Madrid màu đen mùa 2023-2024', price: '200.000đ', stars: '5', isDelete: false },
        { id: '002', image: '', description: 'Áo Real Madrid màu đen mùa 2023-2024', price: '200.000đ', stars: '5', isDelete: false },
        { id: '003', image: '', description: 'Áo Real Madrid màu đen mùa 2023-2024', price: '200.000đ', stars: '5', isDelete: false },
        { id: '004', image: '', description: 'Áo Real Madrid màu đen mùa 2023-2024', price: '200.000đ', stars: '5', isDelete: false },

    ]);

    const optionClothes = [
        'Áo 1', 'Áo 2'
    ];
    const optionSeasons = [
        '2008', '2009', '2010'
    ];

    const defaultOptionClothes = 'Chung';
    const defaultOptionSeasons = 'Mùa giải';


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
            <div className={cx('product-list')}>
                {
                    products.length > 0 &&
                    products.map((product) => {
                        return (
                            <ProductItem key={product.id} data={product} />
                        )
                    })

                }
            </div>
        </div>

    );
}

export default Product;