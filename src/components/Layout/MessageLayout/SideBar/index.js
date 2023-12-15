import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import config from '../../../../config';
import { CustomerIcon, HomeIcon, MessageIcon, OrderIcon, ProductIcon, SalesEventIcon } from '../../../Icons';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="TRANG CHỦ" to={config.routes.home} icon={<HomeIcon width={30} height={30} />} />
                <MenuItem title="SẢN PHẨM" to={config.routes.product} icon={<ProductIcon width={30} height={30} />} />
                <MenuItem title="ĐƠN HÀNG" to={config.routes.order} icon={<OrderIcon width={30} height={30} />} />
                <MenuItem title="KHÁCH HÀNG" to={config.routes.customer} icon={<CustomerIcon width={30} height={30} />} />
                <MenuItem title="KHUYẾN MÃI" to={config.routes.salesevent} icon={<SalesEventIcon width={30} height={30} />} />
                <MenuItem title="TIN NHẮN" to={config.routes.message} icon={<MessageIcon width={30} height={30} />} />
            </Menu>
        </aside>
    );
}

export default Sidebar;