import classNames from 'classnames/bind';
import { AddIcon, AddImageIcon, BackIcon, BackMobileIcon, NextIcon, NextMobileIcon } from '../../components/Icons';
import Button from '../../components/Button';
import styles from './ProductAddNew.module.scss';
import Dropdown from 'react-dropdown';
import { useState } from 'react';

const cx = classNames.bind(styles);

function ProductAddNew() {
    const optionSeasons = [
        '1988/1989', '1995/1996', '1998/1999', '2000/2001',
        '2004/2005', '2006/2007', '2009/2010',
    ];

    const NUM_OF_IMAGES = 4;
    const defaultOptionSeasons = optionSeasons[0];
    const [productImages, setProductImages] = useState(['', '', '', '']);
    const [mainImage, setMainImage] = useState('');
    const [index, setIndex] = useState(0);

    const HandleNextImage = () => {
        console.log("anh hien tai: ", mainImage);
        if (index < NUM_OF_IMAGES - 1) {
            setIndex(index + 1);
            setMainImage(productImages[index + 1]);
        } else {
            setIndex(0);
            setMainImage(productImages[0]);
        }
    }

    const HandleBackImage = () => {
        if (index > 0) {
            setIndex(index - 1);
            setMainImage(productImages[index - 1]);
        }
        else {
            setIndex(NUM_OF_IMAGES - 1);
            setMainImage(productImages[NUM_OF_IMAGES - 1]);
        }
    }

    return (
        <div className={cx('container')}>
            <div className={cx('image-function')}>
                <div className={cx('image-buttons')}>
                    <div className={cx('circle-back')} onClick={HandleBackImage}>
                        <BackIcon width={30} height={30} />
                    </div>
                    <div onClick={HandleBackImage}>
                        <NextMobileIcon width={35} height={35} className={cx('circle-next-mobile')} />
                    </div>


                    <div className={cx('image-product')}>

                        <div className={cx('add-image-btn')}>
                            <input type='file' id='file' className={cx('image-upload')} />
                            <label htmlFor='file' className={cx('image-icon')}>
                                <AddImageIcon width={30} height={30} />
                            </label>
                        </div>

                        <div className={cx('add-image-btn-mobile')}>
                            <input type='file' id='file' className={cx('image-upload')} />
                            <label htmlFor='file' className={cx('image-icon')}>
                                <AddImageIcon width={23} height={23} />
                            </label>
                        </div>
                    </div>

                    <div className={cx('circle-next')} onClick={HandleNextImage}>
                        <NextIcon width={30} height={30} />
                    </div>
                    <div onClick={HandleNextImage}>
                        <BackMobileIcon width={35} height={35} className={cx('circle-back-mobile')} />
                    </div>

                </div>
                <div className={cx('num-of-image')}>
                    {
                        productImages.map((image, curIndex) => {
                            return (
                                <div className={curIndex === index ? cx('circle-active') : cx('circle')}></div>
                            )
                        })
                    }
                </div>
                <div className={cx('buttons')}>
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
                        <AddIcon width={30} height={30} />
                    </button>
                    <button className={cx('add-size-btn-mobile')}>
                        <AddIcon width={25} height={25} />
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