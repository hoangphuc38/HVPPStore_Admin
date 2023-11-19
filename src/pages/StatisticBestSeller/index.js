import classNames from 'classnames/bind';
import styles from './StatisticBestSeller.module.scss';
import Button from '../../components/Button';
import { StatisticIcon } from '../../components/Icons';
import Dropdown from 'react-dropdown';
import { useState } from 'react';
import BarChartItem from '../../components/StatisticItem/BarChartItem';

const cx = classNames.bind(styles);

function StatisticBestSeller() {
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
        {
            name: 'Manchester United',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'PSG',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'HAGL',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Hà Nội FC',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Chelsea',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Real Madrid',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Inter Miami',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },

    ];

    const optionFilter = [
        'Theo tháng',
        'Theo năm'
    ]

    const optionMonth = [
        'Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4',
        'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8',
        'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12',
    ]

    const optionYear = [
        '2022', '2023', '2024',
    ]

    const defaultOptionFilter = optionFilter[0];
    const defaultOptionMonth = 'Tháng 11';
    const defaultOptionYear = '2023';

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
                <span>Top 10 nhóm sản phẩm bán chạy nhất</span>
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
                    </div>
                    <div className={cx('filter')}>
                        {
                            selectedFilter === 'Theo tháng'
                                ? <Dropdown controlClassName={cx('Dropdown-control')}
                                    arrowClosed={<span className={cx('arrow-closed')} />}
                                    arrowOpen={<span className={cx('arrow-open')} />}
                                    menuClassName={cx('menu-open')}
                                    options={optionMonth}
                                    value={defaultOptionMonth}
                                    placeholder="Select" />
                                : <Dropdown controlClassName={cx('Dropdown-control')}
                                    arrowClosed={<span className={cx('arrow-closed')} />}
                                    arrowOpen={<span className={cx('arrow-open')} />}
                                    menuClassName={cx('menu-open')}
                                    options={optionYear}
                                    value={defaultOptionYear}
                                    placeholder="Select" />
                        }
                    </div>
                </div>
                <div className={cx('button-wrapper')}>
                    <Button leftIcon={<StatisticIcon />}
                        primary>Xuất hình ảnh thống kê</Button>
                </div>
            </div>

            <div className={cx('statistic-wrapper')}>
                <div className={cx('statistic-content')}>
                    {
                        statisticChart === 'Theo năm'
                            ? <BarChartItem data={dataBarChart} domain={[0, 30000]} fontSize={14} />
                            : <BarChartItem data={dataBarChart} domain={[0, 12000]} fontSize={14} />
                    }

                </div>
            </div>
        </div>
    );
}

export default StatisticBestSeller;