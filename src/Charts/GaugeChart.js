import React, { useEffect } from "react";
import * as d3 from "d3";

const Gauge = ({ color, id }) => {
  useEffect(() => {
    draw();
  });

  let draw = () => {
    d3.select("#gaugeChart" + id)
      .select("svg")
      .remove();
    const data = [
      { key: "sunday", value: 9, color: "red" },
      { key: "monday", value: 9, color: "white" },
    ];

    let margin = 5;
    let width = 90;
    let height = 90;

    let radius = Math.min(width, height) / 2 - margin / 2;

    let svg = d3
      .select("#gaugeChart" + id)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);

    let gradient = svg
      .append("defs")
      .append("linearGradient")
      .attr("id", "mygrad" + id) //id of the gradient
      .attr("x1", "0%")
      .attr("x2", "0%")
      .attr("y1", "0%")
      .attr("y2", "100%");

    gradient
      .append("stop")
      .attr("offset", "0%")
      .style("stop-color", color)
      .style("stop-opacity", 1);

    gradient
      .append("stop")
      .attr("offset", "100%")
      .style("stop-color", "white")
      .style("stop-opacity", 0);

    svg
      .append("path")
      .attr(
        "d",
        d3
          .arc()
          .innerRadius(radius * 0.75)
          .outerRadius(radius)
          .startAngle(0)
          .endAngle((2 * Math.PI) / 2)
          .cornerRadius(10)
      )
      .attr("fill", `url(#mygrad${id})`);

    svg
      .append("text")
      .attr("x", 0)
      .attr("y", -5)
      .text("50")
      .style("font-size", 20)
      .attr("text-anchor", "middle");

    svg
      .append("text")
      .attr("x", 0)
      .attr("y", 10)
      .text("abcd")
      .style("font-size", 12)
      .attr("text-anchor", "middle");
  };

  return (
    <div
      style={{
        borderRadius: "50%",
        width: 100,
        height: 100,
        background: "white",
        marginBottom: 15,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        id={"gaugeChart" + id}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></div>
    </div>
  );
};

const GaugeChart = () => {
  return (
    <div
      style={{
        // padding: 10,
        width: "100%",
        height: "100%",
        // background: 'red',
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          //   background: "green",
          margin: 5,
          height: "100%",
          width: "30%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Gauge color="red" id="1" />
        <h6 style={{opacity: 0.5}}>CHORD</h6>
      </div>
      <div
        style={{
          //   background: "green",
          margin: 5,
          height: "100%",
          width: "30%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Gauge color="blue" id="2" />
        <h6 style={{opacity: 0.5}}>VOCIBUS</h6>
      </div>
      <div
        style={{
          //   background: "green",
          margin: 5,
          height: "100%",
          width: "30%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Gauge color="green" id="3" />
        <h6 style={{opacity: 0.5}}>ADDLE</h6>
      </div>
    </div>
  );
};

export default GaugeChart;
