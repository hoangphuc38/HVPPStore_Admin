import Header from "./Header";
import Sidebar from "../DefaultLayout/Sidebar";
import styles from './NoSearchLayout.module.scss';
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function NoSearchLayout({ children }) {
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

export default NoSearchLayout;