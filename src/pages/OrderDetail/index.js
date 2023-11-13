import classNames from 'classnames/bind';
import styles from './OrderDetail.module.scss';
import { useState } from 'react';
import DetailProductItem from '../../components/DetailProductItem';

const cx = classNames.bind(styles);

function OrderDetail() {
    const PRODUCTS_INFO = [
        {
            imageProduct: '../../images/Ao-real-madrid-san-khach-2023-1.webp',
            nameProduct: 'Áo Real Madrid mùa giải 2023 - 2024',
            quantityProduct: '4',
            sizeProduct: 'XL',
            sumPrice: '2.000.000',
        },
        {
            imageProduct: '../../images/Ao-real-madrid-san-khach-2023-1.webp',
            nameProduct: 'Áo Real Madrid mùa giải 2023 - 2024',
            quantityProduct: '4',
            sizeProduct: 'XL',
            sumPrice: '2.000.000',
        },
    ];
    const delivery_payment = {
        sumOrder: '4.000.000',
        deliveryOrder: 'Bình thường',
        paymentMethod: 'Visa',
    }

    const [isOpen, setIsOpen] = useState(false);

    const openProductList = () => {
        setIsOpen(true);
        console.log("Open ->");
    }

    const closeProductList = () => {
        setIsOpen(false);
        console.log("Close ->");
    }

    return (
        <div className={cx('container')}>
            <div className={cx('order-status')}>
                <div className={cx('title')}>
                    <div className={cx('icon-status')}></div>
                    <span className={cx('text-title')}>TRẠNG THÁI ĐƠN HÀNG</span>
                </div>

                <div className={cx('status-bar-container')}>
                    <div className={cx('status-bar')}>
                        <div className={cx('circle')}>1</div>
                        <hr className={cx('line')} />
                        <div className={cx('circle')}>2</div>
                        <hr className={cx('line')} />
                        <div className={cx('circle')}>3</div>
                        <hr className={cx('line')} />
                        <div className={cx('circle')}>4</div>
                        <hr className={cx('line')} />
                        <div className={cx('circle')}>5</div>
                    </div>
                </div>

                <div className={cx('status-text')}>CHỜ XÁC NHẬN</div>
            </div>

            <div className={cx('customer-info')}>
                <div className={cx('title')}>
                    <div className={cx('icon-customer-info')}></div>
                    <span className={cx('text-title')}>THÔNG TIN NGƯỜI NHẬN</span>
                </div>

                <div className={cx('detail-info')}>
                    <div className={cx('detail-title')}>
                        <span className={cx('title-info')}>Tên khách hàng:</span>
                        <span className={cx('title-info')}>Số điện thoại:</span>
                        <span className={cx('title-info')}>Địa chỉ:</span>
                    </div>

                    <div className={cx('detail')}>
                        <span className={cx('info')}>Hoàng Phúc</span>
                        <span className={cx('info')}>0123456789</span>
                        <span className={cx('info')}>Xã Tân Lập, Dĩ An, Bình Dương</span>
                    </div>
                </div>
            </div>

            {
                isOpen
                    ?
                    <div className={cx('product-list')}>
                        <div className={cx('title-wrapper-open')}>
                            <div className={cx('title')}>
                                <div className={cx('icon-product-list')}></div>
                                <span className={cx('text-title')}>DANH SÁCH SẢN PHẨM</span>
                            </div>
                            <div className={cx('icon-sortdown-close')} onClick={closeProductList}></div>
                        </div>

                        <div className={cx('products-info')}>
                            {
                                PRODUCTS_INFO.map((product, key) => {
                                    return (
                                        <DetailProductItem data={product} key={key} />
                                    )
                                })
                            }
                        </div>

                    </div>
                    :
                    <div className={cx('product-list')}>
                        <div className={cx('title-wrapper')}>
                            <div className={cx('title')}>
                                <div className={cx('icon-product-list')}></div>
                                <span className={cx('text-title')}>DANH SÁCH SẢN PHẨM</span>
                            </div>
                            <div className={cx('icon-sortdown')} onClick={openProductList}></div>
                        </div>
                    </div>


            }

            <div className={cx('delivery-payment')}>
                <div className={cx('title')}>
                    <div className={cx('icon-delivery-payment')}></div>
                    <span className={cx('text-title')}>PHƯƠNG THỨC VẬN CHUYỂN & THANH TOÁN</span>
                </div>
                <div className={cx('content')}>
                    <div className={cx('content-title')}>
                        <p>Tổng giá trị đơn hàng:</p>
                        <p>Phương thức vận chuyển:</p>
                        <p>Phương thức thanh toán:</p>
                    </div>
                    <div className={cx('content-detail')}>
                        <span className={cx('sum-order')}>{delivery_payment.sumOrder}</span>
                        <span>{delivery_payment.deliveryOrder}</span>
                        <span>{delivery_payment.paymentMethod}</span>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default OrderDetail;