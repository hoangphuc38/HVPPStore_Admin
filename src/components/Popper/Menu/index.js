import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Tippy from '@tippyjs/react/headless';
import Wrapper from '..';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
    const renderItems = () => {
        return items.map((item, index) => (
            <MenuItem key={index} data={item} />
        ))
    }

    return (
        <Tippy
            interactive
            placement='bottom-end'
            render={(attrs) => (
                <div className={cx('content')} tabIndex="-1" {...attrs}>
                    <Wrapper className={cx('menu-wrapper')}>
                        {renderItems()}
                    </Wrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
