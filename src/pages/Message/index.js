import classNames from 'classnames/bind';
import styles from './Message.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Message() {
    return (
        <div className={cx('container')}>
            <div className={cx('chat-list-container')}>
                <div className={cx('search')}>
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                    <input type="search" placeholder="Tìm kiếm ai đó ..." spellCheck={false} />
                </div>
            </div>

            <div className={cx('message-content-container')}>

            </div>
        </div>
    );
}

export default Message;