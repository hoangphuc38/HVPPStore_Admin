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
    const optionStatusOrders = [
        'Tất cả',
        'Chờ xác nhận',
        'Đã xác nhận',
        'Đang vận chuyển',
        'Chờ nhận',
        'Đã nhận',
        'Đã hủy'
    ];

    const defaultOptionStatusOrders = 'Trạng thái đơn hàng';
    const statusOrder = [
        'Chờ xác nhận',
        'Đã xác nhận',
        'Đang vận chuyển',
        'Chờ nhận',
        'Đã nhận',
        'Đã hủy'
    ]

    //set default list according to Status of Order

    const [orderList, setOrderList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAPI = async () => {
            try {
                const response = await orderAPI.getAll();
                console.log("Success: ", response);
                setOrderList(response);
                setLoading(false);

            } catch (error) {
                console.log("Xảy ra lỗi: ", error);
            }
        }

        fetchAPI();
    }, []);


    //Functions
    const sortStatusOrder = (option) => {

    }

    const formatDate = (date) => {
        const inputDate = new Date(date);

        const year = inputDate.getUTCFullYear();
        const month = (inputDate.getMonth()).toString().padStart(2, "0");
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
        else if (val.status === 'Payment') {
            return <span className={cx('status-green')}>{val.status}</span>
        }
        else if (val.status === 'Đang vận chuyển') {
            return <span className={cx('status-blue')}>{val.status}</span>
        }
        else if (val.status === 'Đã xác nhận') {
            return <span className={cx('status-lightblue')}>{val.status}</span>
        }
        else if (val.status === 'Chờ nhận') {
            return <span className={cx('status-lightgreen')}>{val.status}</span>
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