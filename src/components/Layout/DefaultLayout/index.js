import Header from "./Header";
import Sidebar from "./Sidebar";
import styles from './DefaultLayout.module.scss';
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('sidebar')}>
                <Sidebar />
            </div>
            <div className={cx('container')}>
                <Header />
                <div className={cx('content')}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;