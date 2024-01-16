import classNames from "classnames/bind";
import styles from './WareHouseForm.module.scss';
import Button from "../Button";
import { useState } from "react";
import productAPI from "../../api/productAPI";

const cx = classNames.bind(styles);

function WareHouseForm({ closeDialog, data }) {
    const [sizeS, setSizeS] = useState(0);
    const [sizeM, setSizeM] = useState(0);
    const [sizeL, setSizeL] = useState(0);
    const [sizeXL, setSizeXL] = useState(0);
    const [price, setPrice] = useState(0);
    const [supplier, setSupplier] = useState('');
    const [contact, setContact] = useState('');

    const formatDate = () => {
        const inputDate = new Date();

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

    const HandleOnSubmit = async () => {
        return await productAPI.importProduct(data.id, sizeS, sizeM, sizeL, sizeXL, supplier, contact, price)
            .then(() => {
                alert("Đã thêm phiếu nhập mới thành công");
                window.location.reload(true);
            });
    }

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
                            <input className={cx('input-edit')}
                                type="text"
                                value={data.name} />
                        </div>
                        <span>Tổng số lượng nhập   </span>

                        <div className={cx('second-container')}>
                            <div className={cx('size-quantity')}>
                                <span>Size S: </span>
                                <input className={cx('input-quantity')}
                                    type="text"
                                    value={sizeS}
                                    onChange={(e) => setSizeS(e.target.value)} />
                            </div>

                            <div className={cx('size-quantity')}>
                                <span>Size M: </span>
                                <input className={cx('input-quantity')}
                                    type="text"
                                    value={sizeM}
                                    onChange={(e) => setSizeM(e.target.value)} />
                            </div>

                            <div className={cx('size-quantity')}>
                                <span>Size L: </span>
                                <input className={cx('input-quantity')}
                                    type="text"
                                    value={sizeL}
                                    onChange={(e) => setSizeL(e.target.value)} />
                            </div>

                            <div className={cx('size-quantity')}>
                                <span>Size XL: </span>
                                <input className={cx('input-quantity')}
                                    type="text"
                                    value={sizeXL}
                                    onChange={(e) => setSizeXL(e.target.value)} />
                            </div>
                        </div>

                        <div className={cx('third-container')}>
                            <div className={cx('info')}>
                                <span>Giá nhập: </span>
                                <input className={cx('input-info')}
                                    type="text"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    placeholder="VND" />
                            </div>

                            <div className={cx('info')}>
                                <span>Ngày nhập: </span>
                                <input className={cx('delivery-info')}
                                    type="text"
                                    value={formatDate()} />
                            </div>

                            <div className={cx('info')}>
                                <span>Nguồn nhập: </span>
                                <input className={cx('delivery-info')}
                                    type="text"
                                    value={supplier}
                                    onChange={(e) => setSupplier(e.target.value)} />
                            </div>

                            <div className={cx('info')}>
                                <span>Liên lạc: </span>
                                <input className={cx('delivery-info')}
                                    type="text"
                                    value={contact}
                                    onChange={(e) => setContact(e.target.value)} />
                            </div>
                        </div>
                    </div>


                    <div className={cx('buttons')}>
                        <Button className={cx('button-detail')} orange onClick={HandleOnSubmit}>Lưu</Button>
                        <Button className={cx('button-detail')} onClick={closeDialog} red>Hủy</Button>
                    </div>

                </main>
            </div>

        </>
    );
}

export default WareHouseForm;