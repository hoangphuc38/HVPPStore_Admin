import classNames from 'classnames/bind';
import styles from './ProductDetail.module.scss';
import { AddImageIcon, BackIcon, BackMobileIcon, EditIcon, NextIcon, NextMobileIcon } from '../../components/Icons';
import Button from '../../components/Button';
import Dropdown from 'react-dropdown';
import SizeButton from '../../components/SizeButton';
import { useEffect, useState } from 'react';
import EditQuantitySizeForm from '../../components/EditQuantitySizeForm';
import { useParams } from 'react-router-dom';
import productAPI from '../../api/productAPI';
import defaultImage from '../../images/default-image.jpg';

const cx = classNames.bind(styles);

function ProductDetail() {
    const PRODUCT_DETAIL = {
        productName: 'Áo Real Madrid màu đen mùa giải 2022-2023',
        productPrice: '500.000',
        productSeason: '2022 - 2023',
        productSize: [
            {
                size: 'L',
                quantity: 10,
            },
            {
                size: 'XL',
                quantity: 20,
            },
            {
                size: 'M',
                quantity: 30,
            },
        ],
        productDescription: 'Áo ngon, chất lượng',
        productImages: [
            'https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog-MAN/default/dw21a150b7/images/large/701225667001_pp_01_mcfc.png?sw=400&sh=400&sm=fit',
            'https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dw34725556/product-sets/mancity-23/away_kids_set_bg2324.png?sw=1600&sh=1600&sm=fit',
            'https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog-MAN/default/dwe19c4448/images/large/701225698001_pp_01_mcfc.png?sw=1600&sh=1600&sm=fit',
            'https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog-MAN/default/dw78dae72f/images/large/701225658001_pp_01_mcfc.png?sw=1600&sh=1600&sm=fit',
        ],
    }

    const optionSeasons = [
        '2008 - 2009',
        '2010 - 2011',
        '2017 - 2018',
        '2022 - 2023',
    ];

    const params = useParams();

    const [productDetail, setProductDetail] = useState({});

    useEffect(() => {
        const fetchAPI = async () => {
            try {
                const response = await productAPI.getDetailProduct(params);
                console.log("ID product: ", params.id);
                console.log("Success: ", response);
                setProductDetail(response);

            } catch (error) {
                console.log("Xảy ra lỗi: ", error);
            }
        }

        fetchAPI();
    }, []);

    const defaultOptionSeasons = productDetail.productSeason;
    console.log("Mùa: ", productDetail.productSeason)
    const [index, setIndex] = useState(0);
    const [mainImage, setMainImage] = useState(PRODUCT_DETAIL.productImages[0]);
    const [openEditDialog, setOpenEditDialog] = useState(false);

    const HandleNextImage = () => {
        console.log("anh hien tai: ", mainImage);
        if (index < PRODUCT_DETAIL.productImages.length - 1) {
            setIndex(index + 1);
            setMainImage(PRODUCT_DETAIL.productImages[index + 1]);
        } else {
            setIndex(0);
            setMainImage(PRODUCT_DETAIL.productImages[0]);
        }
    }

    const HandleBackImage = () => {
        console.log("anh hien tai: ", mainImage);
        if (index > 0) {
            setIndex(index - 1);
            setMainImage(PRODUCT_DETAIL.productImages[index - 1]);
        }
        else {
            setIndex(PRODUCT_DETAIL.productImages.length - 1);
            setMainImage(PRODUCT_DETAIL.productImages[PRODUCT_DETAIL.productImages.length - 1]);
        }
    }

    const HandleOpenEditDialog = () => {
        setOpenEditDialog(true);
    }

    const HandleCloseEditDialog = () => {
        setOpenEditDialog(false);
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
                        <img src={productDetail.urlMain !== 'string' ? productDetail.urlMain : defaultImage}
                            alt='product-thumb'
                            className={cx('product-thumb')} />
                        <div className={cx('add-image-btn')}>
                            <input type='file' id='file' className={cx('image-upload')} />
                            <label htmlFor='file' className={cx('image-icon')}>
                                <AddImageIcon width={30} height={30} />
                            </label>
                        </div>
                    </div>

                    <div className={cx('image-product-mobile')}>
                        <img src={productDetail.urlMain !== 'string' ? productDetail.urlMain : defaultImage}
                            alt='product-thumb'
                            className={cx('product-thumb')} />
                        <div className={cx('add-image-btn-mobile')}>
                            <input type='file' id='file' className={cx('image-upload')} />
                            <label htmlFor='file' className={cx('image-icon')}>
                                <AddImageIcon width={25} height={25} />
                            </label>
                        </div>
                    </div>

                    <div onClick={HandleNextImage}>
                        <BackMobileIcon width={35} height={35} className={cx('circle-back-mobile')} />
                    </div>

                    <div className={cx('circle-next')} onClick={HandleNextImage}>
                        <NextIcon width={30} height={30} />
                    </div>
                </div>
                <div className={cx('num-of-image')}>
                    {
                        PRODUCT_DETAIL.productImages.map((image, curIndex) => {
                            return (
                                <div className={curIndex === index ? cx('circle-active') : cx('circle')}></div>
                            )
                        })
                    }

                </div>
                <div className={cx('buttons')}>
                    <Button className={cx('button-size')} red>Xóa ảnh</Button>
                    <Button className={cx('button-size')} primary>Lưu ảnh</Button>
                </div>

            </div>

            <div className={cx('information')}>
                <div className={cx('name-product')}>
                    <p>Tên sản phẩm</p>
                    <input className={cx('name-input')}
                        type="text"
                        value={productDetail.name} />
                </div>

                <div className={cx('price-product')}>
                    <p>Giá sản phẩm</p>
                    <input className={cx('price-input')}
                        type="text"
                        placeholder='VND'
                        value={productDetail.price + '  $'} />
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
                            PRODUCT_DETAIL.productSize.map((item, key) => {
                                return (
                                    <SizeButton size={item.size}
                                        key={key}
                                        quantity={item.quantity}
                                        className={cx('button-size')} />
                                )
                            })
                        }
                        <button className={cx('add-size-btn')} onClick={HandleOpenEditDialog}>
                            <EditIcon width="20px" height="20px" />
                        </button>
                    </div>
                </div>

                <div className={cx('info-product')}>
                    <p>Thông tin sản phẩm</p>
                    <textarea type="text"
                        className={cx('info-input')}
                        cols="40"
                        rows="5"
                        value={productDetail.description}>
                    </textarea>
                </div>

                <div className={cx('save-cancel-buttons')}>
                    <Button className={cx('cancel-button')} red>Hủy</Button>
                    <Button className={cx('cancel-button')} primary>Lưu</Button>
                </div>
            </div>

            {
                openEditDialog &&
                (
                    <EditQuantitySizeForm closeDialog={HandleCloseEditDialog} data={PRODUCT_DETAIL.productSize} />
                )
            }
        </div>
    );
}

export default ProductDetail;