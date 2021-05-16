import React from "react";
import BarChartSmall from "../Charts/BarChartSmall";
import GaugeChartHollow from "../Charts/GaugeChartHollow";
import GeoChart from "../Charts/GeoChart";
import { randomNumber } from "../Utils/randomGenerator";

const GeoChartContainer = () => {
  const data = [
    { value: "SCENB", color: "#01b1ff" },
    { value: "CUNEVM", color: "#2200f9" },
    { value: "PRIMIST", color: "#db09ff" },
  ];

  return (
    <div className={["flexColAroundCenter"]}>
      <GeoChart />
      <div className={["flexRowCenter w-100 h-100"]}>
        {data.map((i) => {
          return (
            <div className={["flexRowCenter"]}>
              <GaugeChartHollow
                color={i.color}
                value={randomNumber(200, 700)}
                id={i.value}
              />
              <BarChartSmall color={i.color} value={i.value} id={i.value} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GeoChartContainer;
