import classNames from 'classnames/bind';
import styles from './Customer.module.scss';
import CustomerSearchBar from '../../components/SearchBar/CustomerSearchBar';
import { useEffect, useState } from 'react';
import customerAPI from '../../api/customerAPI';

const cx = classNames.bind(styles);

function Customer() {
    // const [customer, setCustomer] = useState([]);

    // useEffect(() => {
    //     const fetchAPI = async () => {
    //         try {
    //             const response = await customerAPI.getAll();
    //             console.log("Success: ", response);
    //             setCustomer(response);

    //         } catch (error) {
    //             console.log("Xảy ra lỗi: ", error);
    //         }
    //     }

    //     fetchAPI();
    // }, [])
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
                <CustomerSearchBar placeholder="Tìm kiếm khách hàng" />
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
                                <td>{val.email !== '' ? val.email : 'trống'}</td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        </div>
    );
}

export default Customer;