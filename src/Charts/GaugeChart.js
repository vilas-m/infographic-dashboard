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

    let margin = 5;
    let width = 100;
    let height = 100;

    let radius = Math.min(width, height) / 2 - margin / 2;

    let svg = d3
      .select("#gaugeChart" + id)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);
    let value = Math.ceil(Math.random() * (30 - 360) + 360);

    svg
      .append("path")
      .attr(
        "d",
        d3
          .arc()
          .innerRadius(radius * 0.77)
          .outerRadius(radius + 1)
          .startAngle(0)
          .endAngle((value * Math.PI) / 180)
          .cornerRadius(10)
      )
      .attr("fill", color);

    svg
      .append("text")
      .attr("x", 0)
      .attr("y", -5)
      .text(value)
      .style("font-size", 20)
      .style("font-weight", "bold")
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
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {[
        { value: "ADDLE", color: "#ea63fc" },
        { value: "VOCIBUS", color: "#2719dc" },
        { value: "CHORD", color: "#33b3ec" },
      ].map((i) => {
        return (
          <div
            style={{
              margin: 5,
              height: "100%",
              width: "30%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Gauge color={i.color} id={i.value} />
            <h6 style={{ opacity: 0.5 }}>{i.value}</h6>
          </div>
        );
      })}
    </div>
  );
};

export default GaugeChart;
