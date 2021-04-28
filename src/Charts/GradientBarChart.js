import React, { useEffect } from "react";
import * as d3 from "d3";
import { firstColor, secondColor } from "../Utils/chartColors";
import generateGradient from "../Utils/svgGradient";

const GradientBarChart = ({ id, width, height, bars, padding }) => {
  useEffect(() => {
    draw();
  });

  let data = [];

  for (let i = 0; i < bars; i++) {
    data.push(Math.ceil(Math.random() * (4 - 20) + 20));
  }

  let draw = () => {
    d3.select("#gradientBarChart" + id)
      .select("svg")
      .remove();

    let margin = 0;

    let svg = d3
      .select("#gradientBarChart" + id)
      .append("svg")
      .attr("width", "100%")
      .attr("height", "100%")
      .attr("viewBox", `0 0 ${width + 2 * margin} ${height + 2 * margin}`)
      .append("g")
      .attr("transform", `translate(${margin}, ${margin})`);

    let xScale = d3
      .scaleBand()
      .range([0, width])
      .domain(data.map((d, i) => i))
      .padding(padding);

    let gradient = generateGradient({
      svg,
      id: "mygrad4" + id,
      y2: "100%",
      firstColor,
      secondColor,
    });

    let yScale = d3.scaleLinear().domain([0, 20]).range([height, 0]);

    svg
      .selectAll("bars")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => xScale(i))
      .attr("y", (d) => yScale(d))
      .attr("rx", 1)
      .attr("width", (d) => xScale.bandwidth())
      .attr("height", (d) => height - yScale(d))
      .attr("fill", `url(#mygrad4${id})`);
  };

  return <div id={"gradientBarChart" + id}></div>;
};

export default GradientBarChart;
