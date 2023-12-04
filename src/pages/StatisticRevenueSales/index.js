import classNames from 'classnames/bind';
import styles from './StatisticRevenueSales.module.scss';
import Button from '../../components/Button';
import { FromToDateIcon, StatisticIcon } from '../../components/Icons';
import Dropdown from 'react-dropdown';
import { useState } from 'react';
import LineChartItem from '../../components/StatisticItem/LineChartItem';

const cx = classNames.bind(styles);

function StatisticRevenueSales() {
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

    const optionFilter = [
        'Theo ngày',
        'Theo tháng',
        'Theo năm',
    ]

    const defaultOptionFilter = 'Theo tháng';

    const [selectedFilter, setSelectedFilter] = useState('Theo tháng');
    const [statisticChart, setStatisticChart] = useState('Theo tháng');

    const HandleSelectFilter = (option) => {
        if (option === 'Theo năm') {
            setSelectedFilter('Theo năm');
            setStatisticChart('Theo năm');
            console.log("state: ", option);
        }
        else {
            setSelectedFilter('Theo tháng');
            setStatisticChart('Theo tháng');
            console.log("state: ", option);
        }
    }

    return (
        <div className={cx('container')}>
            <div className={cx('title-of-page')}>
                <span>Thống kê doanh thu</span>
            </div>

            <div className={cx('title-and-filter')}>
                <div className={cx('filter-wrapper')}>
                    <div className={cx('type-of-filter')}>
                        <Dropdown controlClassName={cx('Dropdown-control')}
                            arrowClosed={<span className={cx('arrow-closed')} />}
                            arrowOpen={<span className={cx('arrow-open')} />}
                            menuClassName={cx('menu-open')}
                            onChange={(e) => HandleSelectFilter(e.value)}
                            options={optionFilter}
                            value={defaultOptionFilter}
                            placeholder="Select" />

                        <button className={cx('button-wrapper-mobile')}>
                            <StatisticIcon width={17} height={15} />
                            <span className={cx('text-btn')}>Xuất hình ảnh thống kê</span>
                        </button>
                    </div>
                    <div className={cx('filter')}>
                        <input type='date' placeholder='dd-mm-yyyy' />
                        <FromToDateIcon width={40} height={30} className={cx('icon-ordinary')} />
                        <FromToDateIcon width={17} height={12} className={cx('icon-mobile')} />
                        <input type='date' placeholder='dd-mm-yyyy' />
                    </div>
                </div>
                <div className={cx('button-wrapper')}>
                    <Button leftIcon={<StatisticIcon width={25} height={25} />}
                        primary>Xuất hình ảnh thống kê</Button>
                </div>
            </div>

            <div className={cx('statistic-wrapper')}>
                <div className={cx('statistic-content')}>
                    <LineChartItem data={dataLineChart} />
                </div>
            </div>
        </div>
    );
}

export default StatisticRevenueSales;