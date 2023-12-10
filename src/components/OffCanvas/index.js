import React from 'react';
import styles from './OffCanvas.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { MenuItem } from '../Layout/DefaultLayout/Sidebar/Menu';
import config from '../../config';
import { CustomerIcon, HomeIcon, MessageIcon, OrderIcon, ProductIcon, SalesEventIcon } from '../Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'

const cx = classNames.bind(styles);

function OffCanvas({ handleClose }) {
    const [closing, setClosing] = useState(false);
    const handleClosing = () => {
        setClosing(true);
        setTimeout(() => {
            handleClose();
            setClosing(false);
        }, 500);
    }

    return (
        <div className={cx('container')}>
            <div className={cx('menu', { closing })}>
                <div className={cx('brand-container')}>
                    <h2>
                        <span className={cx('first-logo')}>HVPP</span>
                        <span className={cx('second-logo')}>Sport</span>
                    </h2>
                </div>
                <div className={cx('links')}>
                    <MenuItem title="Trang chủ"
                        className={cx('link-item')}
                        to={config.routes.home}
                        icon={<HomeIcon width={20} height={20} />}
                        onClick={handleClose} />
                    <MenuItem title="Sản phẩm"
                        className={cx('link-item')}
                        to={config.routes.product}
                        icon={<ProductIcon width={20} height={20} />}
                        onClick={handleClose} />
                    <MenuItem title="Đơn hàng"
                        className={cx('link-item')}
                        to={config.routes.order}
                        icon={<OrderIcon width={20} height={20} />}
                        onClick={handleClose} />
                    <MenuItem title="Khách hàng"
                        className={cx('link-item')}
                        to={config.routes.customer}
                        icon={<CustomerIcon width={20} height={20} />}
                        onClick={handleClose} />
                    <MenuItem title="Khuyến mãi"
                        className={cx('link-item')}
                        to={config.routes.salesevent}
                        icon={<SalesEventIcon width={20} height={20} />}
                        onClick={handleClose} />
                    <MenuItem title="Tin nhắn"
                        className={cx('link-item')}
                        to={config.routes.message}
                        icon={<MessageIcon width={20} height={20} />}
                        onClick={handleClose} />
                </div>
            </div>
            <div className={cx('close-btn')} onClick={handleClosing}>
                <FontAwesomeIcon icon={faClose} />
            </div>
        </div>
    );
}

export default OffCanvas;