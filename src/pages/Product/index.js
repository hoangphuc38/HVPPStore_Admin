import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import Button from '../../components/Button';
import { AddIcon } from '../../components/Icons';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Product() {
    const [product, setProduct] = useState([]);

    const optionClothes = [
        'Áo 1', 'Áo 2'
    ];
    const optionSeasons = [
        '2008', '2009', '2010'
    ];
    const itemProducts = [
        {
            image: '',
            description: '',
            price: '',
            stars: '',
            isDelete: false,
        }
    ]
    const defaultOptionClothes = 'Chung';
    const defaultOptionSeasons = 'Mùa giải';

    setProduct(itemProducts);

    return (
        <div className={cx('content')}>
            <div className={cx('sortbars-and-button')}>
                <div className={cx('sortbars')}>
                    <Dropdown controlClassName={cx('Dropdown-control')}
                        arrowClassName={cx('Dropdown-arrow')}
                        options={optionClothes}
                        value={defaultOptionClothes}
                        placeholder="Select" />

                    <Dropdown controlClassName={cx('Dropdown-control-season')}
                        arrowClassName={cx('Dropdown-arrow-season')}
                        options={optionSeasons}
                        value={defaultOptionSeasons}
                        placeholder="Select" />
                </div>
                <Button className={cx('add-product-btn')} primary leftIcon={<AddIcon />}>Thêm sản phẩm</Button>
            </div>
            <div className={cx('product-list')}>

            </div>
        </div>

    );
}

export default Product;