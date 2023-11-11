import classNames from "classnames/bind";
import styles from './AvatarItem.module.scss';
import avatar from '../../images/albert-dera-ILip77SbmOE-unsplash.jpg';

const cx = classNames.bind(styles);

function AvatarItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')}
                src={avatar}
                alt="avatar" />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Hoàng Phúc</span>
                </p>
                <span className={cx('role')}>Admin</span>
            </div>
        </div>
    );
}

export default AvatarItem;