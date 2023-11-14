import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Button from '../../components/Button';
import { StatisticIcon } from '../../components/Icons';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('container')}>
            <div className={cx('slogan-downloadbtn')}>
                <div className={cx('slogan')}>
                    <div className={cx('name-shop')}>
                        <span className={cx('name')}>HVPP</span>
                        <span className={cx('sport')}>Sport</span>
                    </div>
                    <span className={cx('slogan-sentence')}>Cháy cùng ngọn lửa đam mê</span>
                </div>
                <Button leftIcon={<StatisticIcon />} className={cx('statistic-btn')} primary>Xuất hình ảnh thống kê</Button>
            </div>

            <div className={cx('first-labels')}>
                <div className={cx('statistic-boxes')}>
                    <div className={cx('box')}>
                        <div className={cx('title')}>
                            <span>Tổng số khách hàng</span>
                            <div className={cx('customer-icon')}></div>
                        </div>
                        <span className={cx('quantity')}>5212</span>
                        <div className={cx('change-to-last-month')}>
                            <span className={cx('interest-change')}>+14%</span>
                            <span>So với tháng trước</span>
                        </div>
                    </div>

                    <div className={cx('box')}>
                        <div className={cx('title')}>
                            <span>Doanh thu hôm nay</span>
                            <div className={cx('sales-today-icon')}></div>
                        </div>
                        <span className={cx('quantity')}>9696</span>
                        <div className={cx('change-to-last-month')}>
                            <span className={cx('interest-change')}>+20%</span>
                            <span>So với tháng trước</span>
                        </div>
                    </div>

                    <div className={cx('box')}>
                        <div className={cx('title')}>
                            <span>Doanh thu tháng này</span>
                            <div className={cx('sales-month-icon')}></div>
                        </div>
                        <span className={cx('quantity')}>60000</span>
                        <div className={cx('change-to-last-month')}>
                            <span className={cx('interest-change')}>+15%</span>
                            <span>So với tháng trước</span>
                        </div>
                    </div>

                    <div className={cx('box')}>
                        <div className={cx('title')}>
                            <span>Doanh thu năm nay</span>
                            <div className={cx('sales-year-icon')}></div>
                        </div>
                        <span className={cx('quantity')}>1252400</span>
                        <div className={cx('change-to-last-month')}>
                            <span className={cx('interest-change')}>+14%</span>
                            <span>So với năm trước</span>
                        </div>
                    </div>
                </div>

                <div className={cx('second-box')}>

                </div>
            </div>

            <div className={cx('second-labels')}>
                <div className={cx('first-statistic')}>

                </div>
                <div className={cx('second-statistic')}>

                </div>
            </div>
        </div>
    );
}

export default Home;