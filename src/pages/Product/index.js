import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import classNames from 'classnames/bind';
import styles from './Product.module.scss';

const cx = classNames.bind(styles);

function Product() {
    const options = [
        'one', 'two', 'three'
    ];
    const defaultOption = options[0];

    return (
        <div className={cx('content')}>
            <Dropdown className={cx('Dropdown-root')}
                controlClassName={cx('Dropdown-control')}
                options={options}
                value={defaultOption}
                placeholder="Select" />
        </div>

    );
}

export default Product;