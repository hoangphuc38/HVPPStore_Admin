import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    ResponsiveContainer
} from 'recharts';

const renderCustomBarLabel = ({ x, y, width, value }) => {
    return <text x={x + width / 2} y={y} fill="#2A2A86" textAnchor="middle" dy={-6}>{`${value}K`}</text>;
};

function BarChartItem({ data, domain, fontSize }) {
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
                    fontSize={fontSize} />
                <YAxis stroke="#2A2A86" domain={domain} padding={{ left: '20px' }} />
                <Bar dataKey="pv"
                    fill="#2A2A86"
                    barSize={40}
                    label={renderCustomBarLabel} />
            </BarChart>
        </ResponsiveContainer>
    );
}

export default BarChartItem;