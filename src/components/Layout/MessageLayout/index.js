import Header from "../NoSearchLayout/Header";
import Sidebar from "./SideBar";
import styles from './MessageLayout.module.scss';
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function MessageLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('sidebar')}>
                <Sidebar />
            </div>
            <div className={cx('container')}>
                <Header className={cx('header')} />
                <div className={cx('content')}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default MessageLayout;