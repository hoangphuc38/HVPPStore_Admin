import classNames from "classnames/bind";
import styles from './ProductItem.module.scss';
import Button from "../Button";
import { RemoveProductIcon } from "../Icons";

const cx = classNames.bind(styles);

function ProductItem({ data, onClick, deleteItem, href }) {
    return (
        <div className={cx('product-wrapper')}>
            <div className={cx('input-wrapper')}>
                <input type="checkbox"
                    id="product1"
                    name="product"
                    className={cx('check-isdelete')}
                    onClick={deleteItem} />
                <label for="product"></label>
            </div>

            <div className={cx('product-detail')}>
                <img src={data.image} className={cx('product-image')} alt="product" />

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