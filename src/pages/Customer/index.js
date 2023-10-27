import classNames from 'classnames/bind';
import styles from './Customer.module.scss';
import SearchBar from '../../components/SearchBar';

const cx = classNames.bind(styles);

function Customer() {
    return (
        <div className={cx('container')}>
            <SearchBar placeholder="Tìm kiếm khách hàng" />

        </div>
    );
}

export default Customer;