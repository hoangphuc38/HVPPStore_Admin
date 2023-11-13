import classNames from "classnames/bind";
import styles from './DetailProductItem.module.scss';
import image from '../../images/Ao-real-madrid-san-khach-2023-1.webp';

const cx = classNames.bind(styles);

function DetailProductItem({ data }) {
    return (
        <div className={cx('detail-product-wrapper')}>
            <img className={cx('product-image')} src={image} alt='ProductImage' />
            <div className={cx('product-info')}>
                <span className={cx('name')}>{data.nameProduct}</span>
                <p className={cx('quantity-size')}>
                    <span>Số lượng:</span>
                    <span>{data.quantityProduct}</span>
                </p>

                <p className={cx('quantity-size')}>
                    <span>Kích cỡ: </span>
                    <span>{data.sizeProduct}</span>
                </p>

                <span className={cx('price')}>{data.sumPrice}đ</span>
            </div>
        </div>
    );
}

export default DetailProductItem;