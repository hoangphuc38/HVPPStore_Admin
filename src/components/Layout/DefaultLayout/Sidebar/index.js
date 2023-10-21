import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import config from '../../../../config';
import { HomeIcon } from '../../../Icons';

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
                <MenuItem title="Home" to={config.routes.home} icon={<HomeIcon />} />
                <MenuItem title="Product" to={config.routes.product} icon={null} />
                <MenuItem title="Order" to={config.routes.order} icon={null} />
            </Menu>
        </aside>
    );
}

export default Sidebar;