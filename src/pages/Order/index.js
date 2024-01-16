import classNames from 'classnames/bind';
import styles from './Order.module.scss';
import Dropdown from 'react-dropdown';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotate } from '@fortawesome/free-solid-svg-icons';
import OrderSearchBar from '../../components/SearchBar/OrderSearchBar'
import orderAPI from '../../api/orderAPI';

const cx = classNames.bind(styles);

function Order() {
    const [orderList, setOrderList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAPI = async () => {
            try {
                const response = await orderAPI.getAll();
                console.log("Success: ", response);

                let defaultList = response.sort((d1, d2) => {
                    const statusComparision = statusOrder.indexOf(d1.status) - statusOrder.indexOf(d2.status);
                    if (statusComparision !== 0) {
                        return statusComparision
                    }
                    else {
                        return new Date(d2.timeCreate) - new Date(d1.timeCreate);
                    }
                });
                setOrderList(defaultList);
                setLoading(false);

            } catch (error) {
                console.log("Xảy ra lỗi: ", error);
            }
        }

        fetchAPI();
    }, []);

    const optionStatusOrders = [
        'Tất cả',
        'Pending',
        'Packaging',
        'Delivering',
        'Completed',
        'Cancelled'
    ];

    const defaultOptionStatusOrders = 'Trạng thái đơn hàng';
    const statusOrder = [
        'Pending',
        'Packaging',
        'Delivering',
        'Completed',
        'Cancelled'
    ]

    //Functions
    const sortStatusOrder = async (option) => {
        if (option === 'Tất cả') {
            const response = await orderAPI.getAll();
            let sortList =
                response.sort((d1, d2) => {
                    const statusComparision = statusOrder.indexOf(d1.status) - statusOrder.indexOf(d2.status);
                    if (statusComparision !== 0) {
                        return statusComparision
                    }
                    else {
                        return new Date(d2.timeCreate) - new Date(d1.timeCreate);
                    }
                });

            setOrderList(sortList);
        }
        else {
            const response = await orderAPI.getAll();
            let sortList = response.filter(order => order.status === option);
            setOrderList(sortList);
        }
    }

    const formatDate = (date) => {
        const inputDate = new Date(date);

        const year = inputDate.getUTCFullYear();
        const month = (inputDate.getMonth() + 1).toString().padStart(2, "0");
        const day = inputDate.getDate().toString().padStart(2, "0");
        const time = inputDate.getHours().toString().padStart(2, "0")
            + ':'
            + inputDate.getMinutes().toString().padStart(2, "0");

        const formattedDate = `${time} ` + `${day}/${month}/${year}`;
        console.log("ngày gốc: ", inputDate);
        console.log("ngày: ", day);
        console.log("tháng: ", month);
        console.log("năm: ", year);
        console.log(formattedDate);
        return formattedDate;
    }

    const renderStatusOrderFontStyle = (val) => {
        if (val.status === 'Pending') {
            return <span className={cx('status-yellow')}>{val.status}</span>
        }
        else if (val.status === 'Packaging') {
            return <span className={cx('status-lightblue')}>{val.status}</span>
        }
        else if (val.status === 'Delivering') {
            return <span className={cx('status-blue')}>{val.status}</span>
        }
        else if (val.status === 'Completed') {
            return <span className={cx('status-green')}>{val.status}</span>
        }
        else {
            return <span className={cx('status-red')}>{val.status}</span>
        }
    }

    return (
        <div className={cx('container')}>
            <div className={cx('search-and-sortbar')}>
                <OrderSearchBar placeholder="Tìm kiếm đơn hàng" />
                <div className={cx('sortbar')}>
                    <Dropdown controlClassName={cx('Dropdown-control')}
                        arrowClosed={<span className={cx('arrow-closed')} />}
                        arrowOpen={<span className={cx('arrow-open')} />}
                        menuClassName={cx('menu-open')}
                        onChange={(e) => sortStatusOrder(e.value)}
                        options={optionStatusOrders}
                        value={defaultOptionStatusOrders}
                        placeholder="Select" />
                </div>
            </div>
            <div className={cx('order-counter')}>
                {
                    orderList.length > 0
                        ? <span>Tất cả {orderList.length} đơn hàng</span>
                        : <span>Không tìm thấy đơn hàng</span>
                }
            </div>

            <div className={cx('order-table')}>
                <div className={cx('table-content')}>
                    <div className={cx('header-title')}>
                        <span>Mã đơn hàng</span>
                        <span>Tên khách hàng</span>
                        <span>Thời gian</span>
                        <span>Giá trị đơn hàng</span>
                        <span>Trạng thái</span>
                    </div>

                    {
                        loading ? <FontAwesomeIcon icon={faRotate} spin />
                            :
                            <div className={cx('detail-infos')}>
                                {
                                    orderList.map((val, key) => {
                                        return (
                                            <div className={cx('info-wrapper')}>
                                                <Link className={cx('info')} to={`/order/${val.id}`}>
                                                    <span className={cx('id')}>{val.id}</span>
                                                    <span className={cx('name')}>{val.name !== null ? val.name : 'null'}</span>
                                                    <span className={cx('time')}>{formatDate(val.timeCreate)}</span>
                                                    <span className={cx('value')}>{val.value}đ</span>
                                                    {renderStatusOrderFontStyle(val)}
                                                </Link>
                                            </div>

                                        )
                                    })
                                }
                            </div>
                    }


                </div>
            </div>

        </div>
    );
}

export default Order;