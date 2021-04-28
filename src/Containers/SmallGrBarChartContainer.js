import React from "react";
import GradientBarChart from "../Charts/GradientBarChart";
import "./styles.scss";

const SmallGrBarChartContainer = () => {
  return (
    <>
      <div className={["flexColumnCentered"]}>
        <div className={["gradientBarLegand"]}>738</div>
        <GradientBarChart
          id="1"
          width={70}
          height={30}
          bars={8}
          padding={0.6}
        />
        <div className={["chart7Legand"]}>
          ullamco laboris
          <br /> nisi ut
        </div>
      </div>
      <div className={["flexColumnCentered"]}>
        <div className={["gradientBarLegand"]}>287</div>
        <GradientBarChart
          id="2"
          width={70}
          height={30}
          bars={8}
          padding={0.6}
        />
        <div className={["chart7Legand"]}>
          laboris ullamco <br />
          nisi ut
        </div>
      </div>
    </>
  );
};

export default SmallGrBarChartContainer;
