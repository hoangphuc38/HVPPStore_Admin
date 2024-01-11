import classNames from "classnames/bind";
import styles from './DetailProductItem.module.scss';
import image from '../../images/Ao-real-madrid-san-khach-2023-1.webp';

const cx = classNames.bind(styles);

function DetailProductItem({ data }) {
    return (
        <div className={cx('detail-product-wrapper')}>
            <div className={cx('product-image')}>
                <img className={cx('product-thumb')} src={data.product.urlMain} alt='ProductImage' />
            </div>

            <div className={cx('product-info')}>
                <span className={cx('name')}>{data.product.name}</span>
                <p className={cx('quantity-size')}>
                    <span>Số lượng:</span>
                    <span>{data.quantity}</span>
                </p>

                <p className={cx('quantity-size')}>
                    <span>Kích cỡ: </span>
                    <span>{data.size}</span>
                </p>

                <span className={cx('price')}>{data.product.price * data.quantity} VND</span>
            </div>
        </div>
    );
}

export default DetailProductItem;