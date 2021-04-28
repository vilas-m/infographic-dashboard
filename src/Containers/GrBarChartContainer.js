import React from 'react';
import GradientBarChart from '../Charts/GradientBarChart';
import "./styles.css";

const GrBarChartContainer = () => {
    return (
        <>
          {[11, 22, 33, 44, 55, 66, 77].map((i) => {
            return (
              <div className={["flexRowCenEnd w80"]} key={i}>
                <div className={["bigLegand"]}>
                  {Math.ceil(Math.random() * (3000 - 8000) + 8000)}
                </div>
                <GradientBarChart
                  id={i}
                  width={100}
                  height={20}
                  bars={20}
                  padding={0.3}
                />
                <div className={["smallLegand"]}>Excepteur sint occaecat</div>
              </div>
            );
          })}
        </>
      );
};

export default GrBarChartContainer;