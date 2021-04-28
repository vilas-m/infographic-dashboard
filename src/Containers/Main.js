import React from "react";
import CompleteBarChart from "../Charts/CompleteBarChart";
import GaugeChart from "../Charts/GaugeChart";
import LineChart from "../Charts/LineChart";
import Mountain from "../Charts/Mountain";
import MultiMountain from "../Charts/MultiMountain";
import MultiMountain2 from "../Charts/MultiMountain2";
import BubbleContainer from "./BubbleContainer";
import CircularBarChartContainer from "./CircularBarChartContainer";
import GeoChartContainer from "./GeoChartContainer";
import GrBarChartContainer from "./GrBarChartContainer";
import SmallGrBarChartContainer from "./SmallGrBarChartContainer";
import "./styles.css";

const Main = () => {
  return (
    <div className={["topContainer"]}>
      <div className={["columnContainer"]}>
        <div className={["chartCard w27"]}>
          <LineChart />
        </div>
        <div className={["chartCard w35"]}>
          <Mountain />
        </div>
        <div className={["chartCardGradient w35"]}>
          <GaugeChart />
        </div>
      </div>
      <div className={["columnContainer mt0"]}>
        <div className={["chartCard flexColumnCenter w47"]}>
          <GeoChartContainer />
        </div>
        <div className={["flexVerticle"]}>
          <div className={["chartCard h30 flexRowCentered"]}>
            <CircularBarChartContainer />
          </div>
          <div className={["flexColumnCentered chartCardGradient h30"]}>
            <CompleteBarChart />
          </div>
          <div className={["flexRowCentered chartCard h30"]}>
            <SmallGrBarChartContainer />
          </div>
        </div>
        <div className={["flexColAround chartCard w35"]}>
          <GrBarChartContainer />
        </div>
      </div>
      <div className={["columnContainer mt0"]}>
        <div className={["w35 chartCardGradient"]}>
          <MultiMountain />
        </div>
        <div className={["w35 flexRowCentered chartCard"]}>
          <BubbleContainer />
        </div>
        <div className={["w27 chartCard"]}>
          <MultiMountain2 />
        </div>
      </div>
    </div>
  );
};

export default Main;
