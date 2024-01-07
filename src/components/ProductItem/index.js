import classNames from "classnames/bind";
import styles from './ProductItem.module.scss';
import Button from "../Button";
import { RemoveProductIcon } from "../Icons";
import defaulImage from '../../images/default-image.jpg';
import { NavLink } from "react-router-dom";

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
                <img src={data.urlMain !== '' && data.urlMain !== 'urlMain' ? data.urlMain : defaulImage} className={cx('product-image')} alt="product" />

                <div className={cx('name-price')}>
                    <div className={cx('name')}>{data.name}</div>
                    <div className={cx('price')}>{data.price} VND</div>
                </div>

                <div className={cx('name-price-mobile')}>
                    <div className={cx('name')}>{data.name}</div>
                    <div className={cx('sold-product-mobile')}>
                        <span>Đã bán</span>
                        <span className={cx('sold-text')}>{data.sold}K</span>
                    </div>
                    <div className={cx('price')}>{data.price} VND</div>
                </div>

                <div className={cx('sold-product')}>
                    <span>Đã bán</span>
                    <span className={cx('sold-text')}>{data.sold}K</span>
                </div>

                <div className={cx('button-wrapper')}>
                    <Button to={href}
                        primary
                        className={cx('detail-btn')}>Xem chi tiết</Button>
                </div>

                <div className={cx('functions-wrapper-mobile')}>
                    <div className={cx('delete-wrapper-mobile')} onClick={onClick}>
                        <RemoveProductIcon width={15} height={15} />
                    </div>
                    <div className={cx('wrapper-detail-btn')}>
                        <NavLink className={cx('button-wrapper-mobile')}
                            to={href}
                        >
                            Chi tiết
                        </NavLink>
                    </div>

                </div>
            </div>
            <div className={cx('delete-wrapper')} onClick={onClick}>
                <RemoveProductIcon width={25} height={25} />
            </div>



        </div>
    );
}

export default ProductItem;