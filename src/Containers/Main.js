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

const Main = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        fontFamily: "Open Sans, sans-serif",
        fontWeight: "lighter",
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
                color: "#adb5bd",
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
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              background:
                "linear-gradient(132deg, rgba(28,21,114,1) 20%, rgba(212,42,147,1) 95%)",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                fontWeight: "lighter",
                justifyContent: "space-around",
                width: "100%",
                color: "#adb5bd",
              }}
            >
              <div> ▲ $782</div>
              <div> ▼ $485</div>
            </div>
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
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "#adb5bd",
                textAlign: "center",
              }}
            >
              <div>738</div>
              <GradientBarChart
                id="1"
                width={70}
                height={30}
                bars={8}
                padding={0.6}
              />
              <div style={{ fontSize: 8, width: "80%" }}>
                ullamco laboris
                <br /> nisi ut
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                color: "#adb5bd",
                textAlign: "center",
              }}
            >
              <div>287</div>
              <GradientBarChart
                id="2"
                width={70}
                height={30}
                bars={8}
                padding={0.6}
              />
              <div style={{ fontSize: 8, width: "80%" }}>
                laboris ullamco <br />
                nisi ut
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "35%",
            background: "#162043",
            borderRadius: 5,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          {[11, 22, 33, 44, 55, 66, 77].map((i) => {
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "flex-end",
                  width: "100%",
                  height: "100%",
                }}
                key={i}
              >
                <div
                  style={{
                    fontSize: 38,
                    color: "#adb5bd",
                    alignSelf: "flex-end",
                    marginRight: 10,
                    opacity: 0.6,
                  }}
                >
                  {Math.ceil(Math.random() * (3000 - 8000) + 8000)}
                </div>
                <GradientBarChart
                  id={i}
                  width={150}
                  height={50}
                  bars={20}
                  padding={0.3}
                />
                <div
                  style={{
                    fontSize: 8,
                    color: "#adb5bd",
                    marginLeft: 10,
                    marginBottom: 7,
                  }}
                >
                  Excepteur sint occaecat
                  <br /> cupidatat non proident
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexGrow: 1,
          height: "40%",
          justifyContent: "space-between",
          margin: 20,
          marginTop: 0,
        }}
      >
        <div
          style={{
            width: "35%",
            background:
              "linear-gradient(132deg, rgba(28,21,114,1) 20%, rgba(212,42,147,1) 95%)",
            borderRadius: 5,
          }}
        >
          <MultiMountain />
        </div>
        <div
          style={{
            width: "35%",
            background: "#162043",
            borderRadius: 5,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {[12, 23, 34, 45, 56].map((i) => {
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                key={i}
              >
                <Baloon text={Math.ceil(Math.random() * (30 - 99) + 99)} />
                <div
                  style={{ fontSize: 9, textAlign: "center", color: "#adb5bd" }}
                >
                  Duis aute <br />
                  irure dolor
                </div>
              </div>
            );
          })}
        </div>
        <div
          style={{
            width: "27%",
            background: "#162043",
            borderRadius: 5,
          }}
        >
          <MultiMountain2 />
        </div>
      </div>
    </div>
  );
};

export default Main;
