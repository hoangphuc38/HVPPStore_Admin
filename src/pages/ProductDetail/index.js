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
    const params = useParams();

    const NUM_OF_IMAGES = 4;
    const [productDetail, setProductDetail] = useState({});
    const [productImages, setProductImages] = useState([]);
    const [productSizes, setProductSizes] = useState([]);
    const [mainImage, setMainImage] = useState('');
    const [index, setIndex] = useState(0);
    const [openEditDialog, setOpenEditDialog] = useState(false);

    useEffect(() => {
        const fetchAPI = async () => {
            try {
                const response = await productAPI.getDetailProduct(params);
                console.log("ID product: ", params.id);
                console.log("Success: ", response);
                setProductDetail(response);

                //Get list Images
                let imageList = [
                    response.urlMain,
                    response.urlSub1,
                    response.urlSub2,
                    response.urlThumb,
                ]
                setProductImages(imageList);
                setMainImage(imageList[0]);

                //Get list of Size
                let productSize = [
                    {
                        size: 'S',
                        quantity: response.sizeS,
                    },
                    {
                        size: 'M',
                        quantity: response.sizeM,
                    },
                    {
                        size: 'L',
                        quantity: response.sizeL,
                    },
                    {
                        size: 'XL',
                        quantity: response.sizeXL,
                    },
                ];
                setProductSizes(productSize);

            } catch (error) {
                console.log("Xảy ra lỗi: ", error);
            }
        }

        fetchAPI();
    }, []);

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
                        <img src={mainImage !== 'string' && mainImage !== '' ? mainImage : defaultImage}
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
                        <img src={mainImage !== 'string' && mainImage !== '' ? mainImage : defaultImage}
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
                        productImages.map((image, curIndex) => {
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

                <div className={cx('name-product')}>
                    <p>Câu lạc bộ</p>
                    <input className={cx('name-input')}
                        type="text"
                        value={productDetail.club} />
                </div>

                <div className={cx('name-product')}>
                    <p>Quốc gia</p>
                    <input className={cx('name-input')}
                        type="text"
                        value={productDetail.nation} />
                </div>

                <div className={cx('name-product')}>
                    <p>Khu vực</p>
                    <input className={cx('name-input')}
                        type="text"
                        value={productDetail.groupName} />
                </div>

                <div className={cx('name-product')}>
                    <p>Mùa giải</p>
                    <input className={cx('name-input')}
                        type="text"
                        value={productDetail.season} />
                </div>

                <div className={cx('price-product')}>
                    <p>Giá sản phẩm</p>
                    <input className={cx('price-input')}
                        type="text"
                        placeholder='VND'
                        value={productDetail.price + '  VND'} />
                </div>

                <div className={cx('size-product')}>
                    <p>Kích cỡ</p>
                    <div className={cx('size-list')}>
                        {
                            productSizes.map((item, key) => {
                                if (item.quantity > 0) {
                                    return (
                                        <SizeButton size={item.size}
                                            key={key}
                                            quantity={item.quantity}
                                            className={cx('button-size')} />
                                    )
                                }
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
                    <EditQuantitySizeForm closeDialog={HandleCloseEditDialog} data={productSizes} />
                )
            }
        </div>
    );
}

export default ProductDetail;