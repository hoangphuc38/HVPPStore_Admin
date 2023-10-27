import classNames from "classnames/bind";
import styles from './EventItem.module.scss';
import images from '../../images/Logo.png';
import { RemoveIcon } from "../Icons";
import Button from '../Button';
import { EditIcon } from "../Icons";

const cx = classNames.bind(styles);

function EventItem({ data }) {
    return (
        <div className={cx('event-wrapper')}>
            <div className={cx('info-image-editBtn')}>
                <img className={cx('image')} src={images} alt="eventImage" />

                <div className={cx('content')}>
                    <span className={cx('description')}>{data.description}</span>
                    <span className={cx('description')}>{data.description}</span>
                    <span className={cx('description')}>{data.description}</span>
                    <span className={cx('description')}>{data.description}</span>
                </div>

                <Button orange leftIcon={<EditIcon />} />
            </div>
            <div className={cx('delete-btn')}>
                <RemoveIcon />
            </div>
        </div>
    );
}

export default EventItem;