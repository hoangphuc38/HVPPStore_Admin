import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts';
import classNames from "classnames/bind";
import styles from './LineChartItem.module.scss';

const cx = classNames.bind(styles);

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className={cx("custom-tooltip")}>
                <div className={cx('wrapper')}>
                    <p className={cx("label")}>{`Tháng ${label}`}</p>
                    <p className={cx("intro")}>{`Doanh thu: ${payload[0].value}`}</p>
                    <p className={cx("intro")}>{`Lợi nhuận: ${payload[1].value}`}</p>
                </div>

            </div>
        );
    }

    return null;
};

function LineChartItem({ data }) {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 20,
                    right: 0,
                    left: -35,
                    bottom: 0,
                }}
            >
                <XAxis dataKey="name"
                    tickLine={false}
                    style={{ fontSize: "16px" }}
                    stroke="#2A2A86"
                    padding={{ right: "10" }} />
                <YAxis tickLine={false}
                    style={{ fontSize: "14px" }}
                    stroke="#2A2A86"
                    domain={[0, 10]} />
                <Tooltip content={CustomTooltip} />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#2A2A86" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#319B2F" />
            </LineChart>
        </ResponsiveContainer>
    );
}

export default LineChartItem;