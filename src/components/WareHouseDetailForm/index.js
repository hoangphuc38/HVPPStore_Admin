import classNames from "classnames/bind";
import styles from './WareHouseDetailForm.module.scss';
import Button from "../Button";

const cx = classNames.bind(styles);

function WareHouseDetailForm({ closeDialog, data }) {
    const formatDate = (date) => {
        const inputDate = new Date(date);

        const year = inputDate.getUTCFullYear();
        const month = (inputDate.getMonth() + 1).toString().padStart(2, "0");
        const day = inputDate.getDate().toString().padStart(2, "0");
        const time = inputDate.getHours().toString().padStart(2, "0")
            + ':'
            + inputDate.getMinutes().toString().padStart(2, "0");

        const formattedDate = `${time} ` + `${day}/${month}/${year}`;
        console.log("ngày gốc: ", inputDate);
        console.log("ngày: ", day);
        console.log("tháng: ", month);
        console.log("năm: ", year);
        console.log(formattedDate);
        return formattedDate;
    }

    return (
        <>
            <div className={cx("overlay")}></div>
            <div className={cx("modal")}>
                <header className={cx("modal__header")}>
                    <h2>Phiếu nhập chi tiết</h2>

                </header>
                <main className={cx("modal__main")}>
                    <div className={cx('main-wrapper')}>
                        <span>Tổng số lượng nhập   </span>

                        <div className={cx('second-container')}>
                            <div className={cx('size-quantity')}>
                                <span>Size S: </span>
                                <input className={cx('input-quantity')}
                                    type="text"
                                    value={data.sizeS} />
                            </div>

                            <div className={cx('size-quantity')}>
                                <span>Size M: </span>
                                <input className={cx('input-quantity')}
                                    type="text"
                                    value={data.sizeM} />
                            </div>

                            <div className={cx('size-quantity')}>
                                <span>Size L: </span>
                                <input className={cx('input-quantity')}
                                    type="text"
                                    value={data.sizeL} />
                            </div>

                            <div className={cx('size-quantity')}>
                                <span>Size XL: </span>
                                <input className={cx('input-quantity')}
                                    type="text"
                                    value={data.sizeXL} />
                            </div>
                        </div>

                        <div className={cx('third-container')}>
                            <div className={cx('info')}>
                                <span>Giá nhập: </span>
                                <input className={cx('input-info')}
                                    type="text"
                                    placeholder="VND"
                                    value={data.price} />
                            </div>

                            <div className={cx('info')}>
                                <span>Ngày nhập: </span>
                                <input className={cx('delivery-info')}
                                    type="text"
                                    value={formatDate(data.dateIn)} />
                            </div>

                            <div className={cx('info')}>
                                <span>Nguồn nhập: </span>
                                <input className={cx('delivery-info')}
                                    type="text"
                                    value={data.supplier} />
                            </div>

                            <div className={cx('info')}>
                                <span>Liên lạc: </span>
                                <input className={cx('delivery-info')}
                                    type="text"
                                    value={data.contact} />
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

export default WareHouseDetailForm;