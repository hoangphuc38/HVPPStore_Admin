import classNames from 'classnames/bind';
import styles from './OrderDetail.module.scss';
import DetailProductItem from '../../components/DetailProductItem';
import Accordion from '../../components/Accordion';
import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import orderAPI from '../../api/orderAPI';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotate } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function OrderDetail() {
    const STATUS_ORDER = [
        {
            number: 1,
            status: 'Pending'
        },
        {
            number: 2,
            status: 'Packaging'
        },
        {
            number: 3,
            status: 'Delivering'
        },
        {
            number: 4,
            status: 'Completed'
        },
    ]

    const param = useParams();

    const [statusSelectedOrder, setStatusSelectedOrder] = useState("");
    const [activeIndex, setActiveIndex] = useState(-1);
    const [orderDetail, setOrderDetail] = useState({});
    const [productInfo, setProductInfo] = useState([]);
    const [loading, setLoading] = useState(true);

    const HandleActiveIndex = (status) => {
        if (status === "Pending") {
            setActiveIndex(1);
        }
        else if (status === "Packaging") {
            setActiveIndex(2);
        }
        else if (status === "Delivering") {
            setActiveIndex(3);
        }
        else if (status === "Completed") {
            setActiveIndex(4);
        }
    }

    useEffect(() => {
        const fetchAPI = async () => {
            try {
                let orderID = parseInt(param.order_id);
                const response = await orderAPI.getDetailOrder(orderID)
                    .then((response) => {
                        setOrderDetail(response.order);
                        setProductInfo(response.products);
                        setStatusSelectedOrder(response.order.status);
                        HandleActiveIndex(response.order.status);
                    });
                console.log("Success: ", response);


                //Wait data to set productInfo

                setLoading(false);

            } catch (error) {
                console.log("Xảy ra lỗi: ", error);
            }
        }

        fetchAPI();
        console.log("Param: ", param);
    }, [])

    const HandleChangeStatus = async () => {
        let orderID = parseInt(param.order_id);
        if (activeIndex < 4) {
            setActiveIndex(activeIndex + 1);
            setStatusSelectedOrder(STATUS_ORDER[activeIndex].status);
            return await orderAPI.updateStatusOrder(orderID)
                .then(() => {
                    alert("Cập nhật trạng thái đơn hàng thành công")
                })
                .catch((error) => console.log(error));
        }
        else {
            setActiveIndex(4);
            setStatusSelectedOrder('Completed');
        }
    }

    const renderStatusOrderFontStyle = (statusSelectedOrder) => {
        if (statusSelectedOrder === 'Pending') {
            return <span className={cx('status-yellow')}>{statusSelectedOrder}</span>
        }
        else if (statusSelectedOrder === 'Packaging') {
            return <span className={cx('status-lightblue')}>{statusSelectedOrder}</span>
        }
        else if (statusSelectedOrder === 'Delivering') {
            return <span className={cx('status-blue')}>{statusSelectedOrder}</span>
        }
        else if (statusSelectedOrder === 'Completed') {
            return <span className={cx('status-green')}>{statusSelectedOrder}</span>
        }
        else {
            return <span className={cx('status-red')}>{statusSelectedOrder}</span>
        }
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
                        {
                            STATUS_ORDER.map((status, curIndex) => {
                                if (curIndex === 3) {
                                    return (
                                        <div className={activeIndex === curIndex + 1 ? cx('circle-active') : cx('circle')}
                                            onClick={HandleChangeStatus}
                                        >
                                            {status.number}
                                        </div>
                                    )
                                }
                                return (
                                    <>
                                        <div className={activeIndex === curIndex + 1 ? cx('circle-active') : cx('circle')}
                                            onClick={HandleChangeStatus}
                                        >
                                            {status.number}
                                        </div>
                                        <hr className={cx('line')} />
                                    </>
                                )
                            })
                        }
                    </div>
                </div>

                <div className={cx('status-text')}>{renderStatusOrderFontStyle(statusSelectedOrder)}</div>
            </div>

            {
                loading ? <FontAwesomeIcon icon={faRotate} spin />
                    :
                    <>
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
                                    <span className={cx('info')}>{orderDetail.name !== null ? orderDetail.name : 'null'}</span>
                                    <span className={cx('info')}>{orderDetail.phone !== null ? orderDetail.phone : 'null'}</span>
                                    <span className={cx('info')}>{orderDetail.address !== null ? orderDetail.address : 'null'}</span>
                                </div>
                            </div>
                        </div>

                        <Accordion item={
                            <>
                                {
                                    productInfo.map((product, index) => {
                                        return (
                                            <DetailProductItem data={product} key={index} />
                                        )
                                    })
                                }
                            </>
                        } />

                        <div className={cx('delivery-payment')}>
                            <div className={cx('title')}>
                                <div className={cx('icon-delivery-payment')}></div>
                                <span className={cx('text-title')}>VẬN CHUYỂN & THANH TOÁN</span>
                            </div>
                            <div className={cx('content')}>
                                <div className={cx('content-title')}>
                                    <span>Tổng giá trị đơn hàng:</span>
                                    <span>Phương thức vận chuyển:</span>
                                    <span>Phương thức thanh toán:</span>
                                </div>
                                <div className={cx('content-detail')}>
                                    <span className={cx('sum-order')}>{orderDetail.value !== null ? orderDetail.value + ' VND' : 'null'}</span>
                                    <span>{orderDetail.deliveryMethod !== null ? orderDetail.deliveryMethod : 'null'}</span>
                                    <span>{orderDetail.payMethod !== null ? orderDetail.payMethod : 'null'}</span>
                                </div>
                            </div>

                        </div>
                    </>
            }



        </div>
    );
}

export default OrderDetail;