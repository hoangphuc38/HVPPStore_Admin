import classNames from "classnames/bind";
import styles from './CurrentUserItem.module.scss';

const cx = classNames.bind(styles);

function CurrentUserItem({ data }) {
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
                <div className={cx('time')}>
                    <span>Hoạt động {data.lastSeen} trước</span>
                </div>
            </div>
        </div>
    );
}

export default CurrentUserItem;