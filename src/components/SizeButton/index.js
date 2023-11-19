import classNames from 'classnames/bind';
import styles from './SizeButton.module.scss';

const cx = classNames.bind(styles);

function SizeButton({ size, className }) {
    return (
        <button className={cx('size-button-wrapper', className)}>
            {size}
        </button>
    );
}

export default SizeButton;