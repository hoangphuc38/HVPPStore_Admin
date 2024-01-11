import classNames from 'classnames/bind';
import styles from './SaleEvent.module.scss';
import Button from '../../components/Button';
import { AddSaleIcon } from '../../components/Icons';
import EventItem from '../../components/EventItem';
import { useEffect, useState } from 'react';
import AddEvent from '../../components/FormEvent/AddEvent'
import DetailEvent from '../../components/FormEvent/DetailEvent';
import EventSearchBar from '../../components/SearchBar/EventSearchBar';
import eventAPI from '../../api/eventAPI';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotate } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function SaleEvent() {
    const [events, setEvents] = useState([]);
    const [isOpenNewEvent, setIsOpenNewEvent] = useState(false);
    const [isSelectEvent, setIsSelectEvent] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAPI = async () => {
            try {
                const response = await eventAPI.getAll();
                console.log("Success: ", response);
                setEvents(response);
                setLoading(false);

            } catch (error) {
                console.log("Xảy ra lỗi: ", error);
            }
        }

        fetchAPI();
    }, []);

    const openDialog = () => {
        setIsOpenNewEvent(true);
    }

    const closeDialog = () => {
        setIsOpenNewEvent(false);
    }

    const selectEvent = async (event) => {
        try {
            let res = await eventAPI.getEventById(event.id);
            console.log("Event ID: ", res);
            setSelectedEvent(res);
            setIsSelectEvent(true);
        }
        catch (error) {
            console.log("Không lấy được event");
        }
    }

    const closeSelectedEvent = () => {
        setIsSelectEvent(false);
    }

    const HandleDeleteEvent = async (event) => {
        let currentEvents = events;
        currentEvents = currentEvents.filter(item => item.id !== event.id);
        setEvents(currentEvents);
        try {
            let res = await eventAPI.deleteEvent(event.id);
            console.log("Event ID: ", res);
        }
        catch (error) {
            console.log("Không lấy được event");
        }
    }

    return (
        <div className={cx('container')}>
            <div className={cx('search-and-addbutton')}>
                <div className={cx('search-wrapper')}>
                    <EventSearchBar placeholder="Tìm kiếm khuyến mãi" />
                </div>

                <Button primary
                    leftIcon={<AddSaleIcon width={30} height={30} />}
                    onClick={openDialog}
                    className={cx('add-sale-btn')}>Thêm khuyến mãi</Button>

                <button className={cx('add-sale-btn-mobile')}
                    onClick={openDialog}
                >
                    <AddSaleIcon width={20} height={20} className={cx('icon')} />
                    Thêm khuyến mãi
                </button>
            </div>
            {loading ? <FontAwesomeIcon icon={faRotate} spin />
                : <div className={cx('event-list')}>
                    {
                        events.length > 0 &&
                        events.map((event) => {
                            return (
                                <EventItem key={event.id}
                                    data={event}
                                    editEvent={() => selectEvent(event)}
                                    deleteEvent={() => HandleDeleteEvent(event)} />
                            )
                        })
                    }
                </div>
            }


            {
                isOpenNewEvent && (
                    <AddEvent closeDialog={closeDialog} />
                )
            }
            {
                isSelectEvent && (
                    <DetailEvent closeDialog={closeSelectedEvent}
                        data={selectedEvent} />
                )
            }

        </div>
    );
}

export default SaleEvent;