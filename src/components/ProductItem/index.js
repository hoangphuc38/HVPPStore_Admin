import classNames from "classnames/bind";
import styles from './ProductItem.module.scss';
import images from '../../images/Ao-real-madrid-san-khach-2023-1.webp';

const cx = classNames.bind(styles);

function ProductItem({ data }) {
    return (
        <div className={cx('product-wrapper')}>
            <img className={cx('image')} src={images} />

            <div className={cx('content')}>
                <span className={cx('description')}>{data.description}</span>
                <div className={cx('price-and-star')}>
                    <span>{data.price}</span>
                    <span>{data.stars}</span>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;