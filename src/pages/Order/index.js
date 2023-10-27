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
            status: 'Chờ xác nhận',
        },
        {
            order_id: 'HVPP205',
            customer_name: 'Hoàng Phúc',
            time_ordered: '30/09/2023',
            order_value: '3.000.000đ',
            status: 'Chờ xác nhận',
        },
    ]

    const optionStatusOrders = [
        'Chờ xác nhận',
        'Đang vận chuyển',
        'Đã nhận',
        'Đã hủy'
    ];

    const defaultOptionStatusOrders = 'Trạng thái đơn hàng';

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



        </div>
    );
}

export default Order;