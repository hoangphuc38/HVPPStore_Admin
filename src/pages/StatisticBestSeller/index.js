import classNames from 'classnames/bind';
import styles from './StatisticBestSeller.module.scss';
import Button from '../../components/Button';
import { StatisticIcon } from '../../components/Icons';
import Dropdown from 'react-dropdown';
import { useEffect, useState } from 'react';
import BarChartItem from '../../components/StatisticItem/BarChartItem';
import productAPI from '../../api/productAPI';

const cx = classNames.bind(styles);

function StatisticBestSeller() {
    const [dataBarChart, setDataBarChart] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            try {
                //const date = new Date();
                //let month = date.getMonth() + 1;
                //let year = date.getFullYear(); Change after having data

                const response = await productAPI.getTopSelling(12, 2023);
                console.log("Success: ", response);
                setDataBarChart(response);

            } catch (error) {
                console.log("Xảy ra lỗi: ", error);
            }
        }

        fetchAPI();
    }, [])

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

    const HandleStatistic = async (option) => {
        if (statisticChart === 'Theo tháng') {
            let month = parseInt(option.replace('Tháng ', ''));
            return await productAPI.getTopSelling(month, 2023)
                .then((res) => {
                    setDataBarChart(res);
                })
                .catch((error) => console.log(error));
        }
        else {
            let year = parseInt(option);
            return await productAPI.getTopSelling(0, year)
                .then((res) => {
                    setDataBarChart(res);
                })
                .catch((error) => console.log(error));
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
                                    onChange={(e) => HandleStatistic(e.value)}
                                    options={optionMonth}
                                    value={defaultOptionMonth}
                                    placeholder="Select" />
                                : <Dropdown controlClassName={cx('Dropdown-control')}
                                    arrowClosed={<span className={cx('arrow-closed')} />}
                                    arrowOpen={<span className={cx('arrow-open')} />}
                                    menuClassName={cx('menu-open')}
                                    onChange={(e) => HandleStatistic(e.value)}
                                    options={optionYear}
                                    value={defaultOptionYear}
                                    placeholder="Select" />
                        }
                    </div>
                </div>
                <div className={cx('button-wrapper')}>
                    <Button leftIcon={<StatisticIcon width={25} height={25} />}
                        primary>Xuất hình ảnh thống kê</Button>
                </div>
                <div className={cx('button-wrapper-mobile')}>
                    <button className={cx('button-moible')}>
                        <StatisticIcon width={16} height={16} />
                    </button>
                </div>

            </div>

            <div className={cx('statistic-wrapper')}>
                <div className={cx('statistic-content')}>
                    {
                        statisticChart === 'Theo năm'
                            ? <BarChartItem data={dataBarChart}
                                domain={[0, 30]}
                                fontSize={14}
                                barSize={40}
                                isToolTip={false} />
                            : <BarChartItem data={dataBarChart}
                                domain={[0, 12]}
                                fontSize={14}
                                barSize={40}
                                isToolTip={false} />
                    }

                </div>

                <div className={cx('statistic-content-M-mobile')}>
                    {
                        statisticChart === 'Theo năm'
                            ? <BarChartItem data={dataBarChart}
                                domain={[0, 30]}
                                fontSize={5}
                                barSize={20}
                                isToolTip={true} />
                            : <BarChartItem data={dataBarChart}
                                domain={[0, 12]}
                                fontSize={5}
                                barSize={20}
                                isToolTip={true} />
                    }

                </div>

                <div className={cx('statistic-content-L-mobile')}>
                    {
                        statisticChart === 'Theo năm'
                            ? <BarChartItem data={dataBarChart}
                                domain={[0, 30]}
                                fontSize={5}
                                barSize={20}
                                isToolTip={false} />
                            : <BarChartItem data={dataBarChart}
                                domain={[0, 12]}
                                fontSize={5}
                                barSize={20}
                                isToolTip={false} />
                    }

                </div>

                <div className={cx('statistic-content-tablet')}>
                    {
                        statisticChart === 'Theo năm'
                            ? <BarChartItem data={dataBarChart}
                                domain={[0, 30]}
                                fontSize={9}
                                barSize={30}
                                isToolTip={false} />
                            : <BarChartItem data={dataBarChart}
                                domain={[0, 12]}
                                fontSize={9}
                                barSize={30}
                                isToolTip={false} />
                    }

                </div>
            </div>
        </div>
    );
}

export default StatisticBestSeller;