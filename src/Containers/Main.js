import React from "react";
import Baloon from "../Charts/Baloon";
import CircularBarChart from "../Charts/CircularBarChart";
import CompleteBarChart from "../Charts/CompleteBarChart";
import GaugeChart from "../Charts/GaugeChart";
import GeoChart from "../Charts/GeoChart";
import GradientBarChart from "../Charts/GradientBarChart";
import LineChart from "../Charts/LineChart";
import Mountain from "../Charts/Mountain";
import MultiMountain from "../Charts/MultiMountain";
import MultiMountain2 from "../Charts/MultiMountain2";
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
          <GeoChart />
        </div>
        <div className={["flexVerticle"]}>
          <div className={["chartCard h30 flexRowCentered"]}>
            <div className={['w50']}>
              <CircularBarChart />
            </div>
            <div className={['w50']}>
              <div className={["underlinedLegand bPurple"]}>9,736</div>
              <div className={["underlinedLegand bRed"]}>11,839</div>
              <div className={["underlinedLegand bPink"]}>8,283</div>
            </div>
          </div>
          <div className={["flexColumnCentered chartCardGradient h30"]}>
            <CompleteBarChart />
          </div>
          <div className={["flexRowCentered chartCard h30"]}>
            <div className={["flexColumnCentered"]}>
              <div className={['gradientBarLegand']}>738</div>
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
              <div className={['gradientBarLegand']}>287</div>
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
          </div>
        </div>
        <div className={["flexColAround chartCard w35"]}>
          {[11, 22, 33, 44, 55, 66, 77].map((i) => {
            return (
              <div className={["flexRowCenEnd w80"]} key={i} >
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
                <div className={["smallLegand"]}>
                  Excepteur sint occaecat
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={["columnContainer mt0"]}>
        <div className={["w35 chartCardGradient"]}>
          <MultiMountain />
        </div>
        <div className={["w35 flexRowCentered chartCard"]}>
          {[12, 23, 34, 45, 56].map((i) => {
            return (
              <div className={["flexColumnCentered"]} key={i}>
                <Baloon text={Math.ceil(Math.random() * (30 - 99) + 99)} />
                <div className={["baloonLegand"]}>
                  Duis aute <br />
                  irure dolor
                </div>
              </div>
            );
          })}
        </div>
        <div className={["w27 chartCard"]}>
          <MultiMountain2 />
        </div>
      </div>
    </div>
  );
};

export default Main;
