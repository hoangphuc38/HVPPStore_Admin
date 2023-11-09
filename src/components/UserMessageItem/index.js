import classNames from "classnames/bind";
import styles from './UserMessageItem.module.scss';

const cx = classNames.bind(styles);

function UserMessageItem({ data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('avatar-wrapper')}>
                <img className={cx('avatar')}
                    src={data.avatar}
                    alt="avatar" />
            </div>

            <div className={cx('info')}>
                <div className={cx('name')}>
                    <span>{data.nameUser}</span>
                </div>
                <div className={cx('role')}>
                    <span className={cx('text')}>{data.lastMessage}</span>
                    <span>{data.timeMessage}</span>
                </div>
            </div>
        </div>
    );
}

export default UserMessageItem;