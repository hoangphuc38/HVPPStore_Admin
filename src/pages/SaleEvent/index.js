import classNames from 'classnames/bind';
import styles from './SaleEvent.module.scss';
import SearchBar from '../../components/SearchBar';
import Button from '../../components/Button';
import { AddSaleIcon } from '../../components/Icons';
import EventItem from '../../components/EventItem';
import { useState } from 'react';
import AddEvent from '../../components/FormEvent/AddEvent'
import DetailEvent from '../../components/FormEvent/DetailEvent';

const cx = classNames.bind(styles);

function SaleEvent() {
    const EVENT_INFOS = [
        {
            id: '001',
            title: 'Đồng hành cùng UEFA Champions League dkajhsdkjashdkahdksaj',
            promotion_value: '10%',
            code: 'HVPP2023',
            start_time: '01/09/2023 12:00',
            expired_time: '30/09/2023 12:00',
        },
        {
            id: '002',
            title: 'Đồng hành cùng UEFA Champions League',
            promotion_value: '10%',
            code: 'HVPP2023',
            start_time: '01/09/2023 03:00',
            expired_time: '30/09/2023 12:00',
        },
        {
            id: '003',
            title: 'Đồng hành cùng UEFA Champions League',
            promotion_value: '10%',
            code: 'HVPP2023',
            start_time: '01/09/2023 03:00',
            expired_time: '30/09/2023 12:00',
        },
    ];


    const [events, setEvents] = useState(EVENT_INFOS);
    const [isOpenNewEvent, setIsOpenNewEvent] = useState(false);
    const [isSelectEvent, setIsSelectEvent] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState({});

    const openDialog = () => {
        setIsOpenNewEvent(true);
    }

    const closeDialog = () => {
        setIsOpenNewEvent(false);
    }

    const selectEvent = (event) => {
        let currentEvent = EVENT_INFOS;
        console.log(currentEvent);
        currentEvent = currentEvent.filter(item => item.id === event.id);
        setSelectedEvent(currentEvent[0]);
        setIsSelectEvent(true);
    }

    const closeSelectedEvent = () => {
        setIsSelectEvent(false);
    }

    const HandleDeleteEvent = (event) => {
        let currentEvents = events;
        currentEvents = currentEvents.filter(item => item.id !== event.id);
        setEvents(currentEvents);
    }

    return (
        <div className={cx('container')}>
            <div className={cx('search-and-addbutton')}>
                <SearchBar placeholder="Tìm kiếm khuyến mãi" />
                <Button orange leftIcon={<AddSaleIcon />} onClick={openDialog}>Thêm khuyến mãi</Button>
            </div>
            <div className={cx('event-list')}>
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

            {
                isOpenNewEvent && (
                    <AddEvent closeDialog={closeDialog} />
                )
            }
            {
                isSelectEvent && (
                    <DetailEvent closeDialog={closeSelectedEvent} data={selectedEvent} />
                )
            }

        </div>
    );
}

export default SaleEvent;