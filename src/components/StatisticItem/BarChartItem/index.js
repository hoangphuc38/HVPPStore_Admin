import React from "react";
import classNames from "classnames/bind";
import styles from './BarChartItem.module.scss';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    ResponsiveContainer,
    Tooltip
} from 'recharts';

const cx = classNames.bind(styles);

const renderCustomBarLabel = ({ x, y, width, value }) => {
    return <text className={cx('title')}
        x={x + width / 2} y={y}
        fill="#2A2A86"
        textAnchor="middle"
        dy={-6}>
        {`${value}K`}
    </text>;
};

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className={cx("custom-tooltip")}>
                <p className={cx("label")}>{`${label}`}</p>
            </div>
        );
    }

    return null;
};

function BarChartItem({ data, domain, fontSize, barSize, isToolTip }) {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 15,
                    right: 0,
                    left: -32,
                    bottom: 0,
                }}
            >
                <XAxis dataKey="name"
                    stroke="#2A2A86"
                    tickLine={false}
                    fontSize={fontSize}
                    className={cx('x-axis')} />
                <YAxis stroke="#2A2A86" domain={domain} padding={{ left: '20px' }} />
                {isToolTip ? <Tooltip content={<CustomTooltip />} /> : <></>}
                <Bar dataKey="pv"
                    fill="#2A2A86"
                    barSize={barSize}
                    label={renderCustomBarLabel} />
            </BarChart>
        </ResponsiveContainer>
    );
}

export default BarChartItem;