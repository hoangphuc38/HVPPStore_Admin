import classNames from 'classnames/bind';
import styles from './Order.module.scss';
import SearchBar from '../../components/SearchBar';
import Dropdown from 'react-dropdown';

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
            customer_name: 'Hoàng Phúc',
            time_ordered: '30/09/2023',
            order_value: '3.000.000đ',
            status: 'Đã nhận',
        },
        {
            order_id: 'HVPP205',
            customer_name: 'Hoàng Phúc',
            time_ordered: '30/09/2023',
            order_value: '3.000.000đ',
            status: 'Đã hủy',
        },
        {
            order_id: 'HVPP205',
            customer_name: 'Hoàng Phúc',
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
            return <td className={cx('status-yellow')}>{val.status}</td>
        }
        else if (val.status === 'Đã nhận') {
            return <td className={cx('status-green')}>{val.status}</td>
        }
        else if (val.status === 'Đang vận chuyển') {
            return <td className={cx('status-blue')}>{val.status}</td>
        }
        else {
            return <td className={cx('status-red')}>{val.status}</td>
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
                <table>
                    <tr>
                        <th>Mã đơn hàng</th>
                        <th>Tên khách hàng</th>
                        <th>Thời gian</th>
                        <th>Giá trị đơn hàng</th>
                        <th>Trạng thái</th>
                    </tr>
                    {ORDER_INFOS.map((val, key) => {
                        return (
                            <tr key={key}>
                                <td>{val.order_id}</td>
                                <td>{val.customer_name}</td>
                                <td>{val.time_ordered}</td>
                                <td>{val.order_value}</td>
                                {renderStatusOrderFontStyle(val)}
                            </tr>
                        )
                    })}
                </table>
            </div>

        </div>
    );
}

export default Order;