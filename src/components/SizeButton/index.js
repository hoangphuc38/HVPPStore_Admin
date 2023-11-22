import classNames from 'classnames/bind';
import styles from './SizeButton.module.scss';

const cx = classNames.bind(styles);

function SizeButton({ size, className, quantity }) {
    return (
        <div className={cx('wrapper')}>
            <span className={cx('tooltip-text')}>{quantity}</span>
            <button className={cx('size-button-wrapper', className)}>
                {size}
            </button>
        </div>
    );
}

export default SizeButton;