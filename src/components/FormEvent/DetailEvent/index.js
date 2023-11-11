import classNames from 'classnames/bind';
import styles from './DetailEvent.module.scss';
import Button from '../../Button';
import { CalendarIcon } from '../../Icons';

const cx = classNames.bind(styles);

function DetailEvent({ closeDialog, data }) {
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
                        <input className={cx('input-event')} type="text" value={data.title} />
                    </div>
                    <div className={cx('title-event')}>
                        <span>Mức giảm:   </span>
                        <input className={cx('input-event')} type="text" value={data.promotion_value} />
                    </div>
                    <div className={cx('title-event')}>
                        <span>Mã giảm giá:   </span>
                        <input className={cx('input-event')} type="text" value={data.code} />
                    </div>
                    <div className={cx('title-event')}>
                        <span>Thời gian áp dụng:   </span>

                        <div className={cx('date')}>
                            <span className={cx('from-to')}>Từ</span>
                            <input className={cx('input-time')} type="text" value={data.start_time} />
                            <button className={cx('calendar-btn')}>
                                <CalendarIcon />
                            </button>
                        </div>
                        <div className={cx('date')}>
                            <span className={cx('from-to')}>đến</span>
                            <input className={cx('input-time')} type="text" value={data.expired_time} />
                            <button className={cx('calendar-btn')}>
                                <CalendarIcon />
                            </button>
                        </div>
                    </div>

                    <div className={cx('buttons')}>
                        <Button className={cx('button-detail')} orange>Lưu</Button>
                        <Button className={cx('button-detail')} onClick={closeDialog} red>Hủy</Button>
                    </div>

                </main>
            </div>

        </>
    )
}

export default DetailEvent;