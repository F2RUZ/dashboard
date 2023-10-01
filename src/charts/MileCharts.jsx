import React from "react";
import { ResponsiveContainer, BarChart, Bar, XAxis, Tooltip } from "recharts";
import mileStatics from "../assets/fetch-data/mileStatics";
const MileCharts = () => {
  return (
    <>
      <ResponsiveContainer width="100%">
        <BarChart data={mileStatics}>
          <XAxis dataKey="name" stroke="#2884ff" />
          <Bar
            dataKey="mileStats"
            barSize={20}
            stroke="#2884ff"
            fill="#2884ff"
          />

          <Tooltip wrapperClassName="tooletip__stle" cursor={false} />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default MileCharts;
