import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faSortDown, faBars } from '@fortawesome/free-solid-svg-icons';
import AvatarItem from '../../../AvatarItem';
import Menu from '../../../Popper/Menu';
import { UserIcon, LogoutIcon } from '../../../Icons';
import { useState } from 'react';
import OffCanvas from '../../../OffCanvas';
import ProductSeachBar from '../../../SearchBar/ProductSearchBar';

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
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked((prevIsClicked) => !prevIsClicked)
    }

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('search-bar-and-offcanvas')}>
                    <button className={cx('offcanvas-icon')} onClick={handleClick}>
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                    {isClicked && <OffCanvas handleClose={handleClick} />}
                    <ProductSeachBar placeholder="Tìm kiếm sản phẩm" />
                </div>


                <div className={cx('task-bar')}>

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