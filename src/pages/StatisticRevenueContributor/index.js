import classNames from 'classnames/bind';
import styles from './StatisticRevenueContributor.module.scss';
import Button from '../../components/Button';
import { StatisticIcon } from '../../components/Icons';
import Dropdown from 'react-dropdown';
import { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

const cx = classNames.bind(styles);

ChartJS.register(ArcElement, Tooltip, Legend);

function StatisticRevenueContributor() {
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

    const HandleSelectFilter = (option) => {
        if (option === 'Theo năm') {
            setSelectedFilter('Theo năm');
            console.log("state: ", option);
        }
        else {
            setSelectedFilter('Theo tháng');
            console.log("state: ", option);
        }
    }

    return (
        <div className={cx('container')}>
            <div className={cx('title-of-page')}>
                <span>Nhóm sản phẩm đem lại lợi nhuận cao nhất</span>
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
                    <Pie data={dataPieChart} options={{ plugins: { legend: { position: "right" } } }} />

                </div>
            </div>
        </div>
    );
}

export default StatisticRevenueContributor;