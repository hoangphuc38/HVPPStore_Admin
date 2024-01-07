import classNames from "classnames/bind";
import styles from './WareHouseForm.module.scss';
import Button from "../Button";

const cx = classNames.bind(styles);

function WareHouseForm({ closeDialog }) {
    return (
        <>
            <div className={cx("overlay")}></div>
            <div className={cx("modal")}>
                <header className={cx("modal__header")}>
                    <h2>Phiếu nhập mới</h2>

                </header>
                <main className={cx("modal__main")}>
                    <div className={cx('main-wrapper')}>
                        <div className={cx('first-container')}>
                            <span>Tên sản phẩm: </span>
                            <input className={cx('input-edit')} type="text" />
                        </div>
                        <span>Tổng số lượng nhập   </span>

                        <div className={cx('second-container')}>
                            <div className={cx('size-quantity')}>
                                <span>Size S: </span>
                                <input className={cx('input-quantity')} type="text" />
                            </div>

                            <div className={cx('size-quantity')}>
                                <span>Size M: </span>
                                <input className={cx('input-quantity')} type="text" />
                            </div>

                            <div className={cx('size-quantity')}>
                                <span>Size L: </span>
                                <input className={cx('input-quantity')} type="text" />
                            </div>

                            <div className={cx('size-quantity')}>
                                <span>Size XL: </span>
                                <input className={cx('input-quantity')} type="text" />
                            </div>
                        </div>

                        <div className={cx('third-container')}>
                            <div className={cx('info')}>
                                <span>Giá nhập: </span>
                                <input className={cx('input-info')} type="text" placeholder="VND" />
                            </div>

                            <div className={cx('info')}>
                                <span>Ngày nhập: </span>
                                <input className={cx('delivery-info')} type="text" value={"7/1/2024"} />
                            </div>

                            <div className={cx('info')}>
                                <span>Nguồn nhập: </span>
                                <input className={cx('delivery-info')} type="text" />
                            </div>

                            <div className={cx('info')}>
                                <span>Liên lạc: </span>
                                <input className={cx('delivery-info')} type="text" />
                            </div>
                        </div>
                    </div>


                    <div className={cx('buttons')}>
                        <Button className={cx('button-detail')} orange>Lưu</Button>
                        <Button className={cx('button-detail')} onClick={closeDialog} red>Hủy</Button>
                    </div>

                </main>
            </div>

        </>
    );
}

export default WareHouseForm;