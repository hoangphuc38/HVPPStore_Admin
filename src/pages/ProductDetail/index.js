import classNames from 'classnames/bind';
import styles from './ProductDetail.module.scss';
import { AddIcon, AddImageIcon, BackIcon, NextIcon } from '../../components/Icons';
import Button from '../../components/Button';
import Dropdown from 'react-dropdown';
import SizeButton from '../../components/SizeButton';
import image from '../../images/Ao-real-madrid-san-khach-2023-1.webp';

const cx = classNames.bind(styles);

function ProductDetail() {
    const PRODUCT_DETAIL = {
        productName: 'Áo Real Madrid màu đen mùa giải 2022-2023',
        productPrice: '500.000',
        productSeason: '2022 - 2023',
        productSize: ['S', 'M', 'L'],
        productDescription: 'Áo ngon, chất lượng',
        productImages: ['1', '2', '3', '4'],

    }

    const optionSeasons = [
        '2008 - 2009',
        '2010 - 2011',
        '2017 - 2018',
        '2022 - 2023'
    ];

    const defaultOptionSeasons = PRODUCT_DETAIL.productSeason;

    return (
        <div className={cx('container')}>
            <div className={cx('image-function')}>
                <div className={cx('image-buttons')}>
                    <div className={cx('circle-back')}>
                        <BackIcon />
                    </div>

                    <div className={cx('image-product')}>
                        <img src={image} alt='product-thumb' className={cx('product-thumb')} />
                        <button className={cx('add-image-btn')}>
                            <AddImageIcon />
                        </button>
                    </div>

                    <div className={cx('circle-next')}>
                        <NextIcon />
                    </div>
                </div>
                <div className={cx('num-of-image')}>
                    {
                        PRODUCT_DETAIL.productImages.map((image) => {
                            return (
                                <div className={cx('circle')}></div>
                            )
                        })
                    }

                </div>
                <div className={cx('buttons')}>
                    <Button className={cx('button-size')} green>Thêm ảnh</Button>
                    <Button className={cx('button-size')} red>Xóa ảnh</Button>
                    <Button className={cx('button-size')} orange>Lưu ảnh</Button>
                </div>

            </div>

            <div className={cx('information')}>
                <div className={cx('name-product')}>
                    <p>Tên sản phẩm</p>
                    <input className={cx('name-input')}
                        type="text"
                        value={PRODUCT_DETAIL.productName} />
                </div>

                <div className={cx('price-product')}>
                    <p>Giá sản phẩm</p>
                    <input className={cx('price-input')}
                        type="text"
                        placeholder='VND'
                        value={PRODUCT_DETAIL.productPrice + '  VND'} />
                </div>

                <div className={cx('season-product')}>
                    <p>Mùa giải</p>
                    <Dropdown controlClassName={cx('Dropdown-control')}
                        arrowClosed={<span className={cx('arrow-closed')} />}
                        arrowOpen={<span className={cx('arrow-open')} />}
                        menuClassName={cx('menu-open')}
                        options={optionSeasons}
                        value={defaultOptionSeasons}
                        placeholder="Select" />
                </div>

                <div className={cx('size-product')}>
                    <p>Kích cỡ</p>
                    <div className={cx('size-list')}>
                        {
                            PRODUCT_DETAIL.productSize.map((size, key) => {
                                return (
                                    <SizeButton size={size} key={key} />
                                )
                            })
                        }
                        <button className={cx('add-size-btn')}>
                            <AddIcon />
                        </button>
                    </div>
                </div>

                <div className={cx('info-product')}>
                    <p>Thông tin sản phẩm</p>
                    <textarea type="text"
                        className={cx('info-input')}
                        cols="40"
                        rows="5"
                        value={PRODUCT_DETAIL.productDescription}>
                    </textarea>
                </div>

                <div className={cx('save-cancel-buttons')}>
                    <Button className={cx('cancel-button')} red>Hủy</Button>
                    <Button className={cx('cancel-button')} orange>Lưu</Button>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;