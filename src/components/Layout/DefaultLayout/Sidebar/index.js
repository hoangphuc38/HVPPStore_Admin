import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import config from '../../../../config';
import { CustomerIcon, HomeIcon, MessageIcon, OrderIcon, ProductIcon, SalesEventIcon } from '../../../Icons';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <div className={cx('name-and-lineborder')}>
                <div>
                    <span className={cx('name')}>HVPP</span>
                    <span className={cx('shop')}>Sport</span>
                </div>
                <hr />
            </div>
            <Menu>
                <MenuItem title="Trang chủ" to={config.routes.home} icon={<HomeIcon />} />
                <MenuItem title="Sản phẩm" to={config.routes.product} icon={<ProductIcon />} />
                <MenuItem title="Đơn hàng" to={config.routes.order} icon={<OrderIcon />} />
                <MenuItem title="Khách hàng" to={config.routes.customer} icon={<CustomerIcon />} />
                <MenuItem title="Khuyến mãi" to={config.routes.salesevent} icon={<SalesEventIcon />} />
                <MenuItem title="Tin nhắn" to={config.routes.message} icon={<MessageIcon />} />
            </Menu>
        </aside>
    );
}

export default Sidebar;