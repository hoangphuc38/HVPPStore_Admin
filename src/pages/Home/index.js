import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Button from '../../components/Button';
import { StatisticIcon } from '../../components/Icons';
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const cx = classNames.bind(styles);

function Home() {
    const data = {
        labels: ['Manchester City', 'Manchester United', 'Liverpool', 'Arsenal'],
        datasets: [
            {
                label: 'Doanh thu',
                data: [12, 19, 3, 5],
                backgroundColor: [
                    '#AAC9FF',
                    '#2A2A86',
                    '#319B2F',
                    '#EF0D0D',
                ],
                borderColor: [
                    'white',
                    'white',
                    'white',
                    'white',
                ],
                borderWidth: 1,
            },
        ],
    }
    // const data = [
    //     { name: "Đức", value: 400 },
    //     { name: "Manchester City", value: 300 },
    //     { name: "Pháp", value: 300 },
    //     { name: "Anh", value: 200 }
    // ];

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
                            <span>Lượt khách truy cập</span>
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
                    <div className={cx('chart-title')}>
                        <span>Nhóm sản phẩm đem lợi nhuận cao nhất</span>
                    </div>
                    <div className={cx('pie-chart')}>
                        <Pie data={data} className={'chart'} />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Home;