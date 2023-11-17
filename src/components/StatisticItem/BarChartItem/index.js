import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    ResponsiveContainer
} from 'recharts';

const renderCustomBarLabel = ({ x, y, width, value }) => {
    return <text x={x + width / 2} y={y} fill="#2A2A86" textAnchor="middle" dy={-6}>{`${value / 1000}K`}</text>;
};

function BarChartItem({ data }) {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 15,
                    right: 0,
                    left: 0,
                    bottom: 0,
                }}
            >
                <XAxis dataKey="name" stroke="#2A2A86" />
                <YAxis stroke="#2A2A86" />
                <Bar dataKey="pv"
                    fill="#2A2A86"
                    barSize={40}
                    label={renderCustomBarLabel} />
            </BarChart>
        </ResponsiveContainer>
    );
}

export default BarChartItem;