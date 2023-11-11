import classNames from 'classnames/bind';
import styles from './Order.module.scss';
import SearchBar from '../../components/SearchBar';
import Dropdown from 'react-dropdown';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Order() {
    const ORDER_INFOS = [
        {
            order_id: 'HVPP205',
            customer_name: 'Hoàng Phúc',
            time_ordered: '30/09/2023',
            order_value: '3.000.000đ',
            status: 'Chờ xác nhận',
        },
        {
            order_id: 'HVPP205',
            customer_name: 'Vũ Phạm Đình Thái',
            time_ordered: '30/09/2023',
            order_value: '3.000.000đ',
            status: 'Đã nhận',
        },
        {
            order_id: 'HVPP205',
            customer_name: 'Lê Văn Phú',
            time_ordered: '30/09/2023',
            order_value: '3.000.000đ',
            status: 'Đã hủy',
        },
        {
            order_id: 'HVPP205',
            customer_name: 'Phạm Nguyễn Đình Thái',
            time_ordered: '30/09/2023',
            order_value: '3.000.000đ',
            status: 'Đang vận chuyển',
        },
    ]

    const optionStatusOrders = [
        'Chờ xác nhận',
        'Đang vận chuyển',
        'Đã nhận',
        'Đã hủy'
    ];

    const defaultOptionStatusOrders = 'Trạng thái đơn hàng';

    const renderStatusOrderFontStyle = (val) => {
        if (val.status === 'Chờ xác nhận') {
            return <span className={cx('status-yellow')}>{val.status}</span>
        }
        else if (val.status === 'Đã nhận') {
            return <span className={cx('status-green')}>{val.status}</span>
        }
        else if (val.status === 'Đang vận chuyển') {
            return <span className={cx('status-blue')}>{val.status}</span>
        }
        else {
            return <span className={cx('status-red')}>{val.status}</span>
        }
    }

    return (
        <div className={cx('container')}>
            <div className={cx('search-and-sortbar')}>
                <SearchBar placeholder="Tìm kiếm đơn hàng" />
                <div className={cx('sortbar')}>
                    <Dropdown controlClassName={cx('Dropdown-control')}
                        arrowClosed={<span className={cx('arrow-closed')} />}
                        arrowOpen={<span className={cx('arrow-open')} />}
                        menuClassName={cx('menu-open')}
                        options={optionStatusOrders}
                        value={defaultOptionStatusOrders}
                        placeholder="Select" />
                </div>
            </div>
            <div className={cx('order-counter')}>
                {
                    ORDER_INFOS.length > 0
                        ? <span>Tất cả {ORDER_INFOS.length} đơn hàng</span>
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

                    <div className={cx('detail-infos')}>
                        {
                            ORDER_INFOS.map((val, key) => {
                                return (
                                    <div className={cx('info-wrapper')}>
                                        <Link className={cx('info')} to={`/order/${val.order_id}`}>
                                            <span className={cx('id')}>{val.order_id}</span>
                                            <span className={cx('name')}>{val.customer_name}</span>
                                            <span className={cx('time')}>{val.time_ordered}</span>
                                            <span className={cx('value')}>{val.order_value}</span>
                                            {renderStatusOrderFontStyle(val)}
                                        </Link>
                                    </div>

                                )
                            })
                        }
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Order;