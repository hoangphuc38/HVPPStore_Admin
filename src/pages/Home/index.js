import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Button from '../../components/Button';
import { DetailIcon, StatisticIcon } from '../../components/Icons';
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import BarChartItem from '../../components/StatisticItem/BarChartItem';
import LineChartItem from '../../components/StatisticItem/LineChartItem';
import config from '../../config';

ChartJS.register(ArcElement, Tooltip, Legend);

const cx = classNames.bind(styles);

function Home() {
    const dataBarChart = [
        {
            name: 'Manchester City',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Barcelona',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Liverpool',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
    ];

    const dataLineChart = [
        {
            name: '1',
            uv: 4.000,
            pv: 2.4,
            amt: 2400,
        },
        {
            name: '2',
            uv: 3.000,
            pv: 1.398,
            amt: 2210,
        },
        {
            name: '3',
            uv: 2.000,
            pv: 9.800,
            amt: 2290,
        },
        {
            name: '4',
            uv: 2.780,
            pv: 3.908,
            amt: 2000,
        },
        {
            name: '5',
            uv: 1.890,
            pv: 4.800,
            amt: 2181,
        },
        {
            name: '6',
            uv: 2.390,
            pv: 3.800,
            amt: 2500,
        },
        {
            name: '7',
            uv: 3.490,
            pv: 4.300,
            amt: 2100,
        },
        {
            name: '8',
            uv: 4.000,
            pv: 2.400,
            amt: 2400,
        },
        {
            name: '9',
            uv: 3.000,
            pv: 1.398,
            amt: 2210,
        },
        {
            name: '10',
            uv: 2.000,
            pv: 9.800,
            amt: 2290,
        },
        {
            name: '11',
            uv: 2.780,
            pv: 3.908,
            amt: 2000,
        },
        {
            name: '12',
            uv: 1.890,
            pv: 4.800,
            amt: 2181,
        },
    ];

    const dataPieChart = {
        labels: ['Manchester City', 'Manchester United', 'Liverpool', 'Arsenal'],
        datasets: [
            {
                label: 'Doanh thu',
                data: [12, 19, 3, 5],
                backgroundColor: [
                    '#AAC9FF',
                    '#2A2A86',
                    '#FCAF17',
                    '#EF0D0D',
                ],
                borderColor: [
                    'white',
                    'white',
                    'white',
                    'white',
                ],
                hoverOffset: 4
            },
        ],
    }

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
                <Button leftIcon={<StatisticIcon width={25} height={25} />}
                    className={cx('statistic-btn')}
                    primary>Xuất hình ảnh thống kê</Button>

                <button className={cx('statistic-btn-mobile')}>
                    <StatisticIcon width={15} height={15} />
                </button>
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
                    <div className={cx('content-wrapper')}>
                        <div className={cx('chart-title')}>
                            <span className={cx('title-text')}>Top 3 Nhóm sản phẩm bán chạy nhất tháng 11</span>
                            <Button primary
                                rightIcon={<DetailIcon />}
                                className={cx('detail-btn')}
                                href={config.routes.statisticBestSeller}>Xem thêm</Button>
                        </div>
                        <div className={cx('chart')}>
                            <BarChartItem data={dataBarChart} domain={[0, 15000]} />
                        </div>
                    </div>
                </div>
            </div>

            <div className={cx('second-labels')}>
                <div className={cx('first-statistic')}>
                    <div className={cx('content-wrapper')}>
                        <div className={cx('chart-title')}>
                            <span>Doanh thu năm 2023</span>
                            <Button primary
                                rightIcon={<DetailIcon />}
                                className={cx('detail-btn')}
                                href={config.routes.statisticRevenueSales}>Xem thêm</Button>
                        </div>
                        <div className={cx('chart')}>
                            <LineChartItem data={dataLineChart} />
                        </div>
                    </div>

                </div>
                <div className={cx('second-statistic')}>
                    <div className={cx('chart-title')}>
                        <span className={cx('title')}>Nhóm sản phẩm đem lợi nhuận cao nhất tháng 11</span>
                        <Button primary
                            rightIcon={<DetailIcon />}
                            className={cx('detail-btn')}
                            href={config.routes.statisticrRevenueContributor}>Xem thêm</Button>
                    </div>
                    <div className={cx('pie-chart-wrapper')}>
                        <Pie data={dataPieChart} />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Home;