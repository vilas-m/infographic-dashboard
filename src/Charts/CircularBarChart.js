import React, { useEffect } from "react";
import * as d3 from "d3";

const CircularBarChart = () => {
  useEffect(() => {
    draw();
  });

  let draw = () => {
    d3.select("#circularBarChart")
      .select("svg")
      .remove();

    let margin = 10;
    let width = 100;
    let height = 100;

    let radius = Math.min(width, height) / 2 - margin;

    let svg = d3
      .select("#circularBarChart")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);

    svg
      .append("path")
      .attr(
        "d",
        d3
          .arc()
          .startAngle(0)
          .endAngle(2 * Math.PI)
          .innerRadius(radius * 0.9)
          .outerRadius(radius)
          .cornerRadius(10)
      )
      .attr("fill", "#1d2c4e")
      .attr("opacity", 0.7);

    svg
      .append("path")
      .attr(
        "d",
        d3
          .arc()
          .startAngle(0)
          .endAngle(2 * Math.PI)
          .innerRadius(radius * 0.75)
          .outerRadius(radius * 0.85)
          .cornerRadius(10)
      )
      .attr("fill", "#1d2c4e")
      .attr("opacity", 0.7);

    svg
      .append("path")
      .attr(
        "d",
        d3
          .arc()
          .startAngle(0)
          .endAngle(2 * Math.PI)
          .innerRadius(radius * 0.6)
          .outerRadius(radius * 0.7)
          .cornerRadius(10)
      )
      .attr("fill", "#1d2c4e")
      .attr("opacity", 0.7);

    svg
      .append("path")
      .attr(
        "d",
        d3
          .arc()
          .startAngle(0)
          .endAngle(3.2*Math.PI /2)
          .innerRadius(radius * 0.9)
          .outerRadius(radius)
          .cornerRadius(10)
      )
      .attr("fill", '#8e49e1');

    svg
      .append("path")
      .attr(
        "d",
        d3
          .arc()
          .startAngle(0)
          .endAngle(3.6*Math.PI /2)
          .innerRadius(radius * 0.75)
          .outerRadius(radius * 0.85)
          .cornerRadius(10)
      )
      .attr("fill", '#d74060');

    svg
      .append("path")
      .attr(
        "d",
        d3
          .arc()
          .startAngle(0)
          .endAngle(3.5*Math.PI /2)
          .innerRadius(radius * 0.6)
          .outerRadius(radius * 0.7)
          .cornerRadius(10)
      )
      .attr("fill", '#ea5ef8');

  };

  return <div id={"circularBarChart"}></div>;
};

export default CircularBarChart;
