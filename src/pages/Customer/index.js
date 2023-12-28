import classNames from 'classnames/bind';
import styles from './Customer.module.scss';
import CustomerSearchBar from '../../components/SearchBar/CustomerSearchBar';
import { useEffect, useState } from 'react';
import customerAPI from '../../api/customerAPI';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotate } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Customer() {
    const [customer, setCustomer] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAPI = async () => {
            try {
                const response = await customerAPI.getAll();
                console.log("Success: ", response);
                setCustomer(response);
                setLoading(false);

            } catch (error) {
                console.log("Xảy ra lỗi: ", error);
            }
        }

        fetchAPI();
    }, [])

    return (
        <div className={cx('container')}>
            <div className={cx('search-bar-wrapper')}>
                <CustomerSearchBar placeholder="Tìm kiếm khách hàng" />
            </div>

            <div className={cx('customer-table-wrapper')}>
                {loading ? <FontAwesomeIcon icon={faRotate} spin />
                    : <table className={cx('customer-table')}>
                        <tr>
                            <th>Mã khách hàng</th>
                            <th>Tên khách hàng</th>
                            <th>Số điện thoại</th>
                            <th>Địa chỉ email</th>
                        </tr>
                        {customer.map((val, key) => {
                            return (
                                <tr key={key}>
                                    <td>{val.id}</td>
                                    <td>{val.name}</td>
                                    <td>{val.phone}</td>
                                    <td>{val.address !== null ? val.address : 'trống'}</td>
                                </tr>
                            )
                        })}
                    </table>
                }

            </div>
        </div>
    );
}

export default Customer;