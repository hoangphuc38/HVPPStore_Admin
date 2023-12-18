import classNames from 'classnames/bind';
import styles from './DetailEvent.module.scss';
import Button from '../../Button';

const cx = classNames.bind(styles);

function DetailEvent({ closeDialog, data, changeEvent }) {

    const formatDate = (date) => {
        const inputDate = new Date('30/09/2023 12:00');

        const year = inputDate.getUTCFullYear();
        const month = (inputDate.getMonth()).toString().padStart(2, "0");
        const day = inputDate.getDate().toString().padStart(2, "0");
        const time = inputDate.getHours().toString().padStart(2, "0")
            + ':'
            + inputDate.getMinutes().toString().padStart(2, "0");

        const formattedDate = `${year}-${month}-${day}T${time}`;
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
                    <h2>Chỉnh sửa sự kiện khuyến mãi</h2>

                </header>
                <main className={cx("modal__main")}>
                    <div className={cx('title-event')}>
                        <span>Tên sự kiện:   </span>
                        <input className={cx('input-event')}
                            type="text"
                            value={data.title}
                        />
                    </div>
                    <div className={cx('title-event')}>
                        <span>Mức giảm:   </span>
                        <input className={cx('input-event')}
                            type="text"
                            value={data.promotion_value}
                        />
                    </div>
                    <div className={cx('title-event')}>
                        <span>Mã giảm giá:   </span>
                        <input className={cx('input-event')}
                            type="text"
                            value={data.code}
                        />
                    </div>
                    <div className={cx('title-event-time')}>
                        <span>Thời gian áp dụng:   </span>

                        <div className={cx('date-wrapper')}>
                            <div className={cx('date')}>
                                <span className={cx('from-to')}>Từ</span>
                                <input className={cx('input-time')}
                                    type="datetime-local"
                                    value={formatDate(data.start_time)}
                                />

                            </div>
                            <div className={cx('date')}>
                                <span className={cx('from-to')}>đến</span>
                                <input className={cx('input-time')}
                                    type="datetime-local"
                                    value={formatDate(data.expired_time)}
                                />

                            </div>
                        </div>
                    </div>

                    <div className={cx('buttons')}>
                        <Button className={cx('button-detail')} primary onClick={() => changeEvent(data)}>Lưu</Button>
                        <Button className={cx('button-detail')} onClick={closeDialog} red>Hủy</Button>
                    </div>

                </main>
            </div>

        </>
    )
}

export default DetailEvent;