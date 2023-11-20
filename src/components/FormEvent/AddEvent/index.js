import classNames from 'classnames/bind';
import styles from './AddEvent.module.scss';
import Button from '../../Button';

const cx = classNames.bind(styles);

function AddEvent({ closeDialog }) {
    return (
        <>
            <div className={cx("overlay")}></div>
            <div className={cx("modal")}>
                <header className={cx("modal__header")}>
                    <h2>Thêm sự kiện khuyến mãi</h2>

                </header>
                <main className={cx("modal__main")}>
                    <div className={cx('title-event')}>
                        <span>Tên sự kiện:   </span>
                        <input className={cx('input-event')} type="text" />
                    </div>
                    <div className={cx('title-event')}>
                        <span>Mức giảm:   </span>
                        <input className={cx('input-event')} type="text" />
                    </div>
                    <div className={cx('title-event')}>
                        <span>Mã giảm giá:   </span>
                        <input className={cx('input-event')} type="text" />
                    </div>
                    <div className={cx('title-event')}>
                        <span>Thời gian áp dụng:   </span>

                        <div className={cx('date')}>
                            <span className={cx('from-to')}>Từ</span>
                            <input className={cx('input-time')} type="datetime-local" />

                        </div>
                        <div className={cx('date')}>
                            <span className={cx('from-to')}>đến</span>
                            <input className={cx('input-time')} type="datetime-local" />

                        </div>
                    </div>

                    <div className={cx('buttons')}>
                        <Button className={cx('button-detail')} orange>Thêm</Button>
                        <Button className={cx('button-detail')} onClick={closeDialog} red>Hủy</Button>
                    </div>

                </main>
            </div>

        </>
    )
}

export default AddEvent;