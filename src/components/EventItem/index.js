import classNames from "classnames/bind";
import styles from './EventItem.module.scss';
import images from '../../images/Logo.png';
import { RemoveIcon } from "../Icons";
import { EditIcon } from "../Icons";

const cx = classNames.bind(styles);

function EventItem({ editEvent, deleteEvent, data }) {
    const formatDate = (date) => {
        const inputDate = new Date(date);

        const year = inputDate.getUTCFullYear();
        const month = (inputDate.getMonth()).toString().padStart(2, "0");
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
        <div className={cx('event-wrapper')}>
            <div className={cx('info-image-editBtn')}>
                <img className={cx('image')} src={images} alt="eventImage" />

                <div className={cx('content')}>
                    <p className={cx('title')}>{data.name}</p>
                    <p className={cx('value')}>Giảm <b className={cx('value-number')}>{data.value}%</b> hóa đơn</p>
                    <p className={cx('code')}>Mã giảm giá: {data.id}</p>
                    <p className={cx('time')}>Có hiệu lực từ {formatDate(data.dateBegin)}</p>
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