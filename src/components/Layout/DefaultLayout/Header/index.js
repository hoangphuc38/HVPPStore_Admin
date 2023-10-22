import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faMagnifyingGlass, faRightFromBracket, faSortDown, faUser } from '@fortawesome/free-solid-svg-icons';
import AvatarItem from '../../../AvatarItem';
import Tippy from '@tippyjs/react/headless';
import Wrapper from '../../../Popper';
import Menu from '../../../Popper/Menu';
import { NotificationIcon } from '../../../Icons';

const cx = classNames.bind(styles);

const SORTBAR_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'Đổi mật khẩu',
        to: '',
    },
    {
        icon: <FontAwesomeIcon icon={faRightFromBracket} />,
        title: 'Đăng xuất',
        to: '',
    },
];

function Header() {

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('search')}>
                    <input placeholder='Tìm kiếm' spellCheck={false} />
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
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