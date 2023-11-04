import classNames from 'classnames/bind';
import { AddIcon, AddImageIcon, BackIcon, NextIcon } from '../../components/Icons';
import Button from '../../components/Button';
import styles from './ProductAddNew.module.scss';
import Dropdown from 'react-dropdown';

const cx = classNames.bind(styles);

function ProductAddNew() {
    const optionSeasons = [
        '2008 - 2009',
        '2010 - 2011',
        '2017 - 2018',
        '2022 - 2023'
    ];

    const defaultOptionSeasons = optionSeasons[0];

    return (
        <div className={cx('container')}>
            <div className={cx('image-function')}>
                <div className={cx('image-buttons')}>
                    <div className={cx('circle-back')}>
                        <BackIcon />
                    </div>

                    <div className={cx('image-product')}>
                        <button className={cx('add-image-btn')}>
                            <AddImageIcon />
                        </button>
                    </div>

                    <div className={cx('circle-next')}>
                        <NextIcon />
                    </div>
                </div>
                <div className={cx('num-of-image')}>
                    <div className={cx('circle')}></div>
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
                    <input className={cx('name-input')} type="text" />
                </div>

                <div className={cx('price-product')}>
                    <p>Giá sản phẩm</p>
                    <input className={cx('price-input')} type="text" placeholder='VND' />
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
                    <button className={cx('add-size-btn')}>
                        <AddIcon />
                    </button>
                </div>

                <div className={cx('info-product')}>
                    <p>Thông tin sản phẩm</p>
                    <textarea type="text" className={cx('info-input')} cols="40" rows="5"></textarea>
                </div>

                <div className={cx('save-cancel-buttons')}>
                    <Button className={cx('cancel-button')} red>Hủy</Button>
                    <Button className={cx('cancel-button')} orange>Lưu</Button>
                </div>
            </div>
        </div>
    );
}

export default ProductAddNew;