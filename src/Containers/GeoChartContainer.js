import React from 'react';
import BarChartSmall from '../Charts/BarChartSmall';
import GaugeChartHollow from '../Charts/GaugeChartHollow';
import GeoChart from '../Charts/GeoChart';


const GeoChartContainer = () => {
    return (
        <div className={["flexColAroundCenter"]}>
      <GeoChart />
      <div className={["flexRowCenter w-100 h-100"]}>
        {[
          { value: "SCENB", color: "#01b1ff" },
          { value: "CUNEVM", color: "#2200f9" },
          { value: "PRIMIST", color: "#db09ff" },
        ].map((i) => {
          return (
            <div className={["flexRowCenter"]}>
              <GaugeChartHollow
                color={i.color}
                value={Math.ceil(Math.random() * (200 - 700) + 700)}
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