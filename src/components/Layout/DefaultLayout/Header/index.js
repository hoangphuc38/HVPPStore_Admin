import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faSortDown, faBars } from '@fortawesome/free-solid-svg-icons';
import AvatarItem from '../../../AvatarItem';
import Menu from '../../../Popper/Menu';
import SearchBar from '../../../SearchBar';
import { UserIcon, LogoutIcon } from '../../../Icons';

const cx = classNames.bind(styles);

const SORTBAR_ITEMS = [
    {
        icon: <UserIcon />,
        title: 'Đổi mật khẩu',
        to: '',
    },
    {
        icon: <LogoutIcon />,
        title: 'Đăng xuất',
        to: '',
    },
];

function Header() {

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('search-bar-and-offcanvas')}>
                    <button className={cx('offcanvas-icon')}>
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                    <SearchBar placeholder="Tìm kiếm sản phẩm"
                        href={'https://tiktok.fullstack.edu.vn/api/users/search?q='} />
                </div>


                <div className={cx('task-bar')}>
                    <div className={cx('notification')}>
                        <button className={cx('notification-icon')}>
                            <FontAwesomeIcon icon={faBell} />
                        </button>
                        <div className={cx('counter')}>2</div>
                    </div>

                    <AvatarItem />

                    <Menu
                        items={SORTBAR_ITEMS}
                    >
                        <button className={cx('sortdown-btn')}>
                            <FontAwesomeIcon icon={faSortDown} />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;