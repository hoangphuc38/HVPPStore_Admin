import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import config from '../../../../config';
import { CustomerIcon, HomeIcon, MessageIcon, OrderIcon, ProductIcon, SalesEventIcon, WareHouseIcon } from '../../../Icons';

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
                <MenuItem title="Trang chủ" to={config.routes.home} icon={<HomeIcon width={30} height={30} />} />
                <MenuItem title="Sản phẩm" to={config.routes.product} icon={<ProductIcon width={30} height={30} />} />
                <MenuItem title="Đơn hàng" to={config.routes.order} icon={<OrderIcon width={30} height={30} />} />
                <MenuItem title="Nhập kho" to={config.routes.warehouse} icon={<WareHouseIcon width={28} height={28} />} />
                <MenuItem title="Khách hàng" to={config.routes.customer} icon={<CustomerIcon width={30} height={30} />} />
                <MenuItem title="Khuyến mãi" to={config.routes.salesevent} icon={<SalesEventIcon width={30} height={30} />} />
                <MenuItem title="Tin nhắn" to={config.routes.message} icon={<MessageIcon width={30} height={30} />} />
            </Menu>
        </aside>
    );
}

export default Sidebar;