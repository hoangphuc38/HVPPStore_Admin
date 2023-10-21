import classNames from "classnames/bind";
import styles from './AvatarItem.module.scss';

const cx = classNames.bind(styles);

function AvatarItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')}
                src="https://s3-alpha-sig.figma.com/img/46db/a90c/9e079416f760c0281d83276faaabe0c3?Expires=1698624000&Signature=oHN8ljPKwhmsALhJcBUnTNblDsw0wQ4x-7tggf7l6aj4zSzpgY5UJC-Gknd0~U5nx7mBxVgXqVpZG7WSw8S4NcyHI-MeZYewUA~JxKsSyxpVdcAwlxdg2UKZVce2D~1BMqJO9SszUbrKGn3VJLgrvU7Oo3~c6A4GqK2HFfqoIzqaASG~OLRZUMxPmQOaFlSl6NnS20ntaVVDZd6eOny9r7w8fG11ykWJue52YhBgVZVbJAHlvcBUo0-oXPDChHdO9k7Jf2jUOPuc6CvALypSa7HHbLPLUjA0E3FKvVRWgt4LZyI128-sjjQmJAisdo9TLze0WpQRRuZ3Zq8sgnpghA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
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