import classNames from "classnames/bind";
import styles from './EventItem.module.scss';
import images from '../../images/Logo.png';
import { RemoveIcon } from "../Icons";
import { EditIcon } from "../Icons";

const cx = classNames.bind(styles);

function EventItem({ editEvent, deleteEvent, data }) {
    return (
        <div className={cx('event-wrapper')}>
            <div className={cx('info-image-editBtn')}>
                <img className={cx('image')} src={images} alt="eventImage" />

                <div className={cx('content')}>
                    <p className={cx('title')}>{data.title}</p>
                    <p className={cx('value')}>Giảm <b className={cx('value-number')}>{data.promotion_value}</b> hóa đơn</p>
                    <p className={cx('code')}>Mã giảm giá: {data.code}</p>
                    <p className={cx('time')}>Có hiệu lực từ {data.expired_time}</p>
                </div>

                <div className={cx('edit-btn-wrapper')}>
                    <button className={cx('edit-btn')} onClick={editEvent}>
                        <EditIcon width="15px" height="15px" />
                    </button>

                </div>
            </div>

            <button className={cx('delete-btn')} onClick={deleteEvent}>
                <RemoveIcon width={35} height={35} />
            </button>

            <button className={cx('delete-btn-mobile')} onClick={deleteEvent}>
                <RemoveIcon width={28} height={28} />
            </button>
        </div>
    );
}

export default EventItem;