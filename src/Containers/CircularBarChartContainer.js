import React from "react";
import CircularBarChart from "../Charts/CircularBarChart";
import "./styles.scss";

const CircularBarChartContainer = () => {
  return (
    <>
      <div className={["w60"]}>
        <CircularBarChart />
      </div>
      <div className={["w50"]}>
        <div className={["underlinedLegand bPurple"]}>9,736</div>
        <div className={["underlinedLegand bRed"]}>11,839</div>
        <div className={["underlinedLegand bPink"]}>8,283</div>
      </div>
    </>
  );
};

export default CircularBarChartContainer;
