import classNames from 'classnames/bind';
import styles from './SaleEvent.module.scss';
import SearchBar from '../../components/SearchBar';
import Button from '../../components/Button';
import { AddSaleIcon } from '../../components/Icons';
import EventItem from '../../components/EventItem';
import { useState } from 'react';
import AddEvent from '../../components/FormEvent/AddEvent'

const cx = classNames.bind(styles);

function SaleEvent() {
    const EVENT_INFOS = [
        {
            id: '001',
            title: 'Đồng hành cùng UEFA Champions League dkajhsdkjashdkahdksaj',
            promotion_value: '10%',
            code: 'HVPP2023',
            time_used: '30/09/2023  00:00',
        },
        {
            id: '002',
            title: 'Đồng hành cùng UEFA Champions League',
            promotion_value: '10%',
            code: 'HVPP2023',
            time_used: '30/09/2023  00:00',
        },
        {
            id: '003',
            title: 'Đồng hành cùng UEFA Champions League',
            promotion_value: '10%',
            code: 'HVPP2023',
            time_used: '30/09/2023  00:00',
        },
    ];

    const [isOpen, setIsOpen] = useState(false);
    const openDialog = () => {
        setIsOpen(true);
    }

    const closeDialog = () => {
        setIsOpen(false);
    }

    return (
        <div className={cx('container')}>
            <div className={cx('search-and-addbutton')}>
                <SearchBar placeholder="Tìm kiếm khuyến mãi" />
                <Button orange leftIcon={<AddSaleIcon />} onClick={openDialog}>Thêm khuyến mãi</Button>
            </div>
            <div className={cx('event-list')}>
                {
                    EVENT_INFOS.length > 0 &&
                    EVENT_INFOS.map((event) => {
                        return (
                            <EventItem key={event.id} data={event} />
                        )
                    })
                }
            </div>

            {
                isOpen && (
                    <AddEvent closeDialog={closeDialog} />
                )
            }

        </div>
    );
}

export default SaleEvent;