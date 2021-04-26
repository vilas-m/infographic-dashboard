import React, { useEffect } from "react";
import * as d3 from "d3";

const LineChart = () => {
  let data = [];
  let startYear = 2007;

  for (let i = 0; i < 10; i++) {
    data.push({
      year: startYear + i,
      value: Math.ceil(Math.random() * (-7000 - 9999) + 9999),
    });
  }

  useEffect(() => {
    draw();
  });

  let draw = () => {
    d3.select("#lineChart").select("svg").remove();

    let margin = {
      top: 5,
      bottom: 10,
      left: 30,
      right: 10,
    };

    let width = 320 - margin.left - margin.right;
    let height = 150 - margin.top - margin.bottom;

    let svg = d3
      .select("#lineChart")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`)
      .attr("layout-css", "justifyContent: center; flexGrow: 1");

    let gradient = svg
      .append("defs")
      .append("linearGradient")
      .attr("id", "lineChartGradient")
      .attr("x1", "0%")
      .attr("x2", "100%")
      .attr("y1", "100%")
      .attr("y2", "100%");

    gradient
      .append("stop")
      .attr("offset", "0%")
      .style("stop-color", "#1f1472")
      .style("stop-opacity", 1);

    gradient
      .append("stop")
      .attr("offset", "100%")
      .style("stop-color", "#ac1f8c")
      .style("stop-opacity", 1);

    let xScale = d3
      .scaleBand()
      .range([0, width])
      .domain(data.map((d) => d.year))
      .padding(0.1);

    let yScale = d3.scaleLinear().domain([-10000, 10000]).range([height, 0]);

    svg
      .append("g")
      .style("opacity", 0.5)
      .call(d3.axisLeft(yScale).ticks(5).tickSize(0))
      .call((g) => g.select(".domain").remove());

    svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "url(#lineChartGradient)")
      .attr("stroke-width", 4)
      .attr(
        "d",
        d3
          .line()
          .x(function (d) {
            return xScale(d.year);
          })
          .y(function (d) {
            return yScale(d.value);
          })
          .curve(d3.curveBasis)
      );
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          // width: "90%",
          // height: "90%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            textAlign: "center",
            fontWeight: "bold",
            color: "#adb5bd",
          }}
        >
          $7,204
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div id="lineChart"></div>
        </div>
      </div>
    </div>
  );
};

export default LineChart;
