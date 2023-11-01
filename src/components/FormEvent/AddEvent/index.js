import classNames from 'classnames/bind';
import styles from './AddEvent.module.scss';
import Button from '../../Button';
import { CalendarIcon } from '../../Icons';

const cx = classNames.bind(styles);

function AddEvent({ closeDialog }) {
    return (
        <>
            <div className={cx("overlay")}></div>
            <div className={cx("modal")}>
                <header className={cx("modal__header")}>
                    <h2>Thêm s? ki?n khuy?n m?i</h2>

                </header>
                <main className={cx("modal__main")}>
                    <div className={cx('title-event')}>
                        <span>Tên s? ki?n:   </span>
                        <input className={cx('input-event')} type="text" />
                    </div>
                    <div className={cx('title-event')}>
                        <span>M?c gi?m:   </span>
                        <input className={cx('input-event')} type="text" />
                    </div>
                    <div className={cx('title-event')}>
                        <span>M? gi?m giá:   </span>
                        <input className={cx('input-event')} type="text" />
                    </div>
                    <div className={cx('title-event')}>
                        <span>Th?i gian áp d?ng:   </span>

                        <div className={cx('date')}>
                            <span className={cx('from-to')}>T?</span>
                            <input className={cx('input-time')} type="text" />
                            <button className={cx('calendar-btn')}>
                                <CalendarIcon />
                            </button>
                        </div>
                        <div className={cx('date')}>
                            <span className={cx('from-to')}>ð?n</span>
                            <input className={cx('input-time')} type="text" />
                            <button className={cx('calendar-btn')}>
                                <CalendarIcon />
                            </button>
                        </div>
                    </div>

                    <div className={cx('buttons')}>
                        <Button className={cx('button-detail')} orange>Thêm</Button>
                        <Button className={cx('button-detail')} onClick={closeDialog} red>H?y</Button>
                    </div>

                </main>
            </div>

        </>
    )
}

export default AddEvent;