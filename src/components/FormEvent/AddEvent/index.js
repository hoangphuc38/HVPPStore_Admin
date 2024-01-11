import classNames from 'classnames/bind';
import styles from './AddEvent.module.scss';
import Button from '../../Button';
import eventAPI from '../../../api/eventAPI';
import { useState } from 'react';

const cx = classNames.bind(styles);

function AddEvent({ closeDialog }) {
    const [name, setName] = useState("");
    const [beginDate, setBeginDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [value, setValue] = useState(0);
    const HandleAddEvent = async () => {
        return await eventAPI.addEvent(name, beginDate, endDate, value)
            .then(() => {
                alert("Đã thêm sự kiện khuyến mãi thành công");
                window.location.reload(true);
            });
    }
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
                        <input className={cx('input-event')}
                            type="text"
                            onChange={(e) => setName(e.target.value)}
                            value={name} />
                    </div>
                    <div className={cx('title-event')}>
                        <span>Mức giảm:   </span>
                        <input className={cx('input-event')}
                            type="text"
                            onChange={(e) => setValue(e.target.value)}
                            value={value} />
                    </div>
                    <div className={cx('title-event')}>
                        <span>Mã giảm giá:   </span>
                        <input className={cx('input-event')}
                            type="text" />
                    </div>
                    <div className={cx('title-event-time')}>
                        <span>Thời gian áp dụng:   </span>

                        <div className={cx('date-wrapper')}>
                            <div className={cx('date')}>
                                <span className={cx('from-to')}>Từ</span>
                                <input className={cx('input-time')}
                                    type="datetime-local"
                                    onChange={(e) => setBeginDate(e.target.value)}
                                    value={beginDate} />

                            </div>
                            <div className={cx('date')}>
                                <span className={cx('from-to')}>đến</span>
                                <input className={cx('input-time')}
                                    type="datetime-local"
                                    onChange={(e) => setEndDate(e.target.value)}
                                    value={endDate} />

                            </div>
                        </div>

                    </div>

                    <div className={cx('buttons')}>
                        <Button className={cx('button-detail')} primary onClick={HandleAddEvent}>Thêm</Button>
                        <Button className={cx('button-detail')} onClick={closeDialog} red>Hủy</Button>
                    </div>

                </main>
            </div>

        </>
    )
}

export default AddEvent;