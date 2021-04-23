import React, { useEffect } from "react";
import * as d3 from "d3";
import { curveMonotoneX } from "d3";

const LineChart = () => {
  let data = [
    { year: 2007, value: 600 },
    { year: 2008, value: -3000 },
    { year: 2009, value: -8000 },
    { year: 2010, value: 3000 },
    { year: 2011, value: -2000 },
    { year: 2012, value: 4000 },
    { year: 2013, value: -5500 },
    { year: 2014, value: 5000 },
    { year: 2015, value: 1000 },
    { year: 2016, value: 9000 },
  ];
  useEffect(() => {
    draw();
  });

  let draw = () => {
    d3.select("#lineChart").select("svg").remove();

    let margin = {
      top: 5,
      bottom: 10,
      left: 50,
      right: 5,
    };
    let width = 259 - margin.left - margin.right;
    let height = 150 - margin.top - margin.bottom;

    let svg = d3
      .select("#lineChart")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    let gradient = svg
      .append("defs")
      .append("linearGradient")
      .attr("id", "mygradLine") //id of the gradient
      .attr("x1", "0%")
      .attr("x2", "0%")
      .attr("y1", "0%")
      .attr("y2", "100%");

    gradient
      .append("stop")
      .attr("offset", "0%")
      .style("stop-color", "#ac1f8c")
      .style("stop-opacity", 1);

    gradient
      .append("stop")
      .attr("offset", "100%")
      .style("stop-color", "#1f1472")
      .style("stop-opacity", 0.8);

    let xScale = d3
      .scaleBand()
      .range([0, width])
      .domain(data.map((d) => d.year))
      .padding(0.1);

    let yScale = d3.scaleLinear().domain([-10000, 10000]).range([height, 0]);

    svg.append("g").call(d3.axisLeft(yScale).ticks(5));

    svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "url(#mygradLine)")
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
          .curve(d3.curveMonotoneX)
      );
  };

  return (
    <div
      style={{
        padding: 10,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "90%",
          height: "90%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ width: "100%", textAlign: "center" }}>$9876788</div>
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
