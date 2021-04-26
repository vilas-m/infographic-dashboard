import React, { useEffect } from "react";
import * as d3 from "d3";
import { curveBasis } from "d3";

const Mountain = () => {
  let data1 = [
    { year: "07", value: 0 },
    { year: "08", value: 200 },
    { year: "09", value: 1400 },
    { year: "10", value: 3000 },
    { year: "11", value: 9000 },
    { year: "12", value: 10000 },
    { year: "13", value: 7000 },
    { year: "14", value: 2000 },
    { year: "15", value: 2500 },
    { year: "16", value: 4000 },
    { year: "17", value: 5000 },
    { year: "18", value: 0 },
  ];
  let data2 = [
    { year: "07", value: 0 },
    { year: "08", value: 3000 },
    { year: "09", value: 8000 },
    { year: "10", value: 9500 },
    { year: "11", value: 8000 },
    { year: "12", value: 6000 },
    { year: "13", value: 2000 },
    { year: "14", value: 4000 },
    { year: "15", value: 6000 },
    { year: "16", value: 3000 },
    { year: "17", value: 2000 },
    { year: "18", value: 0 },
  ];
  useEffect(() => {
    draw();
  });

  let draw = () => {
    d3.select("#mountain").select("svg").remove();

    let margin = {
      top: 5,
      bottom: 20,
      left: 5,
      right: 5,
    };
    let width = 450 - margin.left - margin.right;
    let height = 150 - margin.top - margin.bottom;

    let svg = d3
      .select("#mountain")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    let gradient = svg
      .append("defs")
      .append("linearGradient")
      .attr("id", "mygrad") //id of the gradient
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
      .style("stop-opacity", 0.1);

    let xScale = d3
      .scaleBand()
      .range([0, width])
      .domain(data1.map((d) => d.year))
      .padding(0.1);

    svg
      .append("g")
      .style('opacity', 0.5)
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(xScale).ticks(4).tickSize(0))
      .call((g) => g.select(".domain").remove())
      

    let yScale = d3.scaleLinear().domain([0, 10000]).range([height, 0]);


    svg
      .append("path")
      .datum(data1)
      .attr("fill", `url(#mygrad)`)
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
    svg
      .append("path")
      .datum(data2)
      .attr("fill", `url(#mygrad)`)
      // .attr("stroke", "steelblue")
      // .attr("stroke-width", 4)
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
        <div style={{ width: "100%", textAlign: "center",fontWeight: "bold",
            color: "#adb5bd", }}>$2,087</div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div id="mountain"></div>
        </div>
      </div>
    </div>
  );
};

export default Mountain;