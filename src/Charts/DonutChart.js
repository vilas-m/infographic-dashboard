import React, { useEffect } from "react";
import * as d3 from "d3";

const DonutChart = ({color, value, id}) => {
  useEffect(() => {
    draw();
  });

  let draw = () => {
    d3.select("#donutChart" + id).select("svg").remove();

    let margin = 10;
    let width = 75;
    let height = 75;

    let radius = Math.min(width, height) / 2 - margin;

    let svg = d3
      .select("#donutChart" + id)
      .append("svg")
      .attr("width", '100%')
      .attr("height", '100%')
      .attr('viewBox', `0 0 ${width} ${height}`)
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
          .innerRadius(radius * 0.8)
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
          .endAngle(Number(value)/360 * Math.PI)
          .innerRadius(radius * 0.8)
          .outerRadius(radius)
          .cornerRadius(10)
      )
      .attr("fill", color);

      svg
      .append("text")
      .attr("x", 0)
      .attr("y", 5)
      .text(value)
      .style("font-size", 17)
      .attr("fill", '#fff')
      .attr("text-anchor", "middle")
  };

  return <div id={"donutChart" + id}></div>;
};

export default DonutChart;
