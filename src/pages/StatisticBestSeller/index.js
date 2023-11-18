import classNames from 'classnames/bind';
import styles from './StatisticBestSeller.module.scss';
import Button from '../../components/Button';
import { StatisticIcon } from '../../components/Icons';

const cx = classNames.bind(styles);

function StatisticBestSeller() {
    return (
        <div className={cx('container')}>
            <div className={cx('button-wrapper')}>
                <Button leftIcon={<StatisticIcon />}
                    className={cx('statistic-btn')}
                    primary>Xuất hình ảnh thống kê</Button>
            </div>
        </div>
    );
}

export default StatisticBestSeller;