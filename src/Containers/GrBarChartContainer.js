import React from "react";
import GradientBarChart from "../Charts/GradientBarChart";
import { randomNumber } from "../Utils/randomGenerator";
import "./styles.scss";

const GrBarChartContainer = () => {
  const data = [11, 22, 33, 44, 55, 66, 77];
  return (
    <>
      {data.map((i) => {
        return (
          <div className={["flexRowCenEnd w80"]} key={i}>
            <div className={["bigLegand"]}>{randomNumber(300, 8000)}</div>
            <GradientBarChart
              id={i}
              width={100}
              height={20}
              bars={20}
              padding={0.5}
            />
            <div className={["smallLegand"]}>Excepteur sint occaecat</div>
          </div>
        );
      })}
    </>
  );
};

export default GrBarChartContainer;
