import classNames from "classnames/bind";
import styles from './ProductItem.module.scss';
import images from '../../images/Ao-real-madrid-san-khach-2023-1.webp';
import { RemoveIcon } from "../Icons";

const cx = classNames.bind(styles);

function ProductItem({ data }) {
    return (
        <div className={cx('product-wrapper')}>
            <div className={cx('info-image')}>
                <img className={cx('image')} src={images} alt="productImage" />

                <div className={cx('content')}>
                    <span className={cx('description')}>{data.description}</span>
                    <div className={cx('price-and-star')}>
                        <span className={cx('price')}>{data.price}</span>
                    </div>
                </div>
            </div>
            <div className={cx('delete-btn')}>
                <RemoveIcon />
            </div>
        </div>
    );
}

export default ProductItem;