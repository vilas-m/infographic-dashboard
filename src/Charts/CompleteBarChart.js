import React, { useEffect } from "react";
import * as d3 from "d3";

const CompleteBarChart = () => {
  useEffect(() => {
    draw();
  });

  let data = [];

  for (let i = 0; i < 12; i++) {
    data.push(Math.ceil(Math.random() * (2 - 20) + 20));
  }

  let draw = () => {
    d3.select("#barChartfull").select("svg").remove();

    let margin = 16;
    let width = 150;
    let height = 50;

    let svg = d3
      .select("#barChartfull")
      .append("svg")
      .attr("width", width + margin + margin)
      .attr("height", height + margin + margin)
      .append("g")
      .attr("transform", `translate(${margin}, ${margin})`);

    let xScale = d3
      .scaleBand()
      .range([0, width])
      .domain(data.map((d, i) => i))
      .padding(0.6);

    svg
      .append("g")
      .style("opacity", 0.5)
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(xScale).tickSize(0))
      .call((g) => g.select(".domain").remove());

    let yScale = d3.scaleLinear().domain([0, 20]).range([height, 0]);

    svg
      .selectAll("bars")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => xScale(i))
      .attr("y", (d) => yScale(d))
      .attr("width", (d) => xScale.bandwidth())
      .attr("height", (d) => height - yScale(d))
      .attr("fill", "#c793c6");

    svg
      .selectAll("bars")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => xScale(i) + xScale.bandwidth() / 3)
      .attr("y", (d) => 0)
      .attr("width", (d) => xScale.bandwidth() / 3)
      .attr("height", (d) => height)
      .attr("fill", "#c793c6")
      .attr("opacity", 0.5);
  };

  return <div id={"barChartfull"}></div>;
};

export default CompleteBarChart;