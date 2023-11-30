import classNames from 'classnames/bind';
import styles from './Customer.module.scss';
import SearchBar from '../../components/SearchBar';

const cx = classNames.bind(styles);

function Customer() {
    const CUSTOMER_INFOS = [
        {
            customer_id: 'HVPP205',
            customer_name: 'Hoàng Phúc',
            numberphone: '0123456789',
            email: 'hoangphuc@gmail.com',
        },
        {
            customer_id: 'HVPP205',
            customer_name: 'Hoàng Phúc',
            numberphone: '0123456789',
            email: 'hoangphuc@gmail.com',
        },
        {
            customer_id: 'HVPP205',
            customer_name: 'Hoàng Phúc',
            numberphone: '0123456789',
            email: 'hoangphuc@gmail.com',
        },
    ]

    return (
        <div className={cx('container')}>
            <div className={cx('search-bar-wrapper')}>
                <SearchBar placeholder="Tìm kiếm khách hàng" href={'https://tiktok.fullstack.edu.vn/api/users/search?q='} />
            </div>

            <div className={cx('customer-table-wrapper')}>
                <table className={cx('customer-table')}>
                    <tr>
                        <th>Mã khách hàng</th>
                        <th>Tên khách hàng</th>
                        <th>Số điện thoại</th>
                        <th>Địa chỉ email</th>
                    </tr>
                    {CUSTOMER_INFOS.map((val, key) => {
                        return (
                            <tr key={key}>
                                <td>{val.customer_id}</td>
                                <td>{val.customer_name}</td>
                                <td>{val.numberphone}</td>
                                <td>{val.email}</td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        </div>
    );
}

export default Customer;