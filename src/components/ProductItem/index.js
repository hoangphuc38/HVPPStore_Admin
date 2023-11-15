import classNames from "classnames/bind";
import styles from './ProductItem.module.scss';
import image from '../../images/Ao-real-madrid-san-khach-2023-1.webp';
import Button from "../Button";
import { RemoveProductIcon } from "../Icons";

const cx = classNames.bind(styles);

function ProductItem({ data, onClick, href }) {
    return (
        <div className={cx('product-wrapper')}>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label for="vehicle1"></label>
            <div className={cx('product-detail')}>
                <img src={image} className={cx('product-image')} alt="product" />

                <div className={cx('name-price')}>
                    <div className={cx('name')}>{data.description}</div>
                    <div className={cx('price')}>{data.price}</div>
                </div>

                <div className={cx('sold-product')}>
                    <span>Đã bán</span>
                    <span className={cx('sold-text')}>{data.sold}K</span>
                </div>

                <div className={cx('button-wrapper')}>
                    <Button href={href} orange>Xem chi tiết</Button>
                </div>
            </div>
            <div className={cx('delete-wrapper')} onClick={onClick}>
                <RemoveProductIcon />
            </div>



        </div>
    );
}

export default ProductItem;