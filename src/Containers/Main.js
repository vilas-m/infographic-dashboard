import React from "react";
import CircularBarChart from "../Charts/CircularBarChart";
import CompleteBarChart from "../Charts/CompleteBarChart";
import GaugeChart from "../Charts/GaugeChart";
import GeoChart from "../Charts/GeoChart";
import GradientBarChart from "../Charts/GradientBarChart";
import LineChart from "../Charts/LineChart";
import Mountain from "../Charts/Mountain";

const Main = () => {
return (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      height: "100%",
      justifyContent: "space-between",
    }}
  >
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexGrow: 1,
        height: "40%",
        justifyContent: "space-between",
        margin: 20,
      }}
    >
      <div
        style={{
          width: "27%",
          background: "#162043",
          borderRadius: 5,
        }}
      >
        <LineChart />
      </div>
      <div
        style={{
          width: "35%",
          background: "#162043",
          borderRadius: 5,
        }}
      >
        <Mountain />
      </div>
      <div
        style={{
          width: "35%",
          background:
            "linear-gradient(132deg, rgba(28,21,114,1) 20%, rgba(212,42,147,1) 95%)",
          borderRadius: 5,
        }}
      >
        <GaugeChart />
      </div>
    </div>
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexGrow: 1,
        justifyContent: "space-between",
        //   width: "100%",
        height: "60%",
        margin: 20,
        marginTop: 0,
      }}
    >
      <div
        style={{
          width: "47%",
          background: "#162043",
          borderRadius: 5,
        }}
      >
        <GeoChart />
      </div>
      <div
        style={{
          width: "15%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            height: "30%",
            background: "#162043",
            borderRadius: 5,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularBarChart />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                borderBottom: "solid 3px",
                borderColor: "#8e49e1",
                width: 50,
                textAlign: "center",
              }}
            >
              9,736
            </div>
            <div
              style={{
                borderBottom: "solid 3px",
                borderColor: "#d74060",
                width: 50,
                textAlign: "center",
              }}
            >
              11,839
            </div>
            <div
              style={{
                borderBottom: "solid 3px",
                borderColor: "#ea5ef8",
                width: 50,
                textAlign: "center",
              }}
            >
              8,283
            </div>
          </div>
        </div>
        <div
          style={{
            height: "30%",
            borderRadius: 5,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background:
              "linear-gradient(132deg, rgba(28,21,114,1) 20%, rgba(212,42,147,1) 95%)",
          }}
        >
          <CompleteBarChart />
        </div>
        <div
          style={{
            borderRadius: 5,
            height: "30%",
            background: "#162043",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <GradientBarChart
            id="1"
            width={70}
            height={30}
            bars={8}
            padding={0.6}
          />
          <GradientBarChart
            id="2"
            width={70}
            height={30}
            bars={8}
            padding={0.6}
          />
        </div>
      </div>
      <div
        style={{
          width: "35%",
          background: "#162043",
          borderRadius: 5,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: 'center'
        }}
      >
        <GradientBarChart
            id="3"
            width={150}
            height={50}
            bars={20}
            padding={0.3}
          />
        <GradientBarChart
            id="4"
            width={150}
            height={50}
            bars={20}
            padding={0.3}
          />
        <GradientBarChart
            id="5"
            width={150}
            height={50}
            bars={20}
            padding={0.4}
          />
        <GradientBarChart
            id="6"
            width={150}
            height={50}
            bars={20}
            padding={0.3}
          />
        <GradientBarChart
            id="7"
            width={150}
            height={50}
            bars={20}
            padding={0.3}
          />
        <GradientBarChart
            id="7"
            width={150}
            height={50}
            bars={20}
            padding={0.3}
          />
      </div>
    </div>
  </div>
);
};

export default Main;
