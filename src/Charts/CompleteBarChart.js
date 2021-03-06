import React, { useEffect } from "react";
import * as d3 from "d3";
import "./chartStyles.scss";
import { randomNumber } from "../Utils/randomGenerator";

const CompleteBarChart = () => {
  useEffect(() => {
    draw();
  });

  let data = [];

  for (let i = 0; i < 12; i++) {
    data.push(randomNumber(2,20));
  }

  let draw = () => {
    d3.select("#completeBarChart1").select("svg").remove();

    const margin = 10;
    const width = 170;
    const height = 60;

    let svg = d3
      .select("#completeBarChart1")
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

  return (
    <div className={["chartContainer"]}>
      <div className={["chartHeaderRow"]}>
        <div> ▲ $782</div>
        <div> ▼ $485</div>
      </div>
      <div className={["chart"]} id="completeBarChart1"></div>
    </div>
  );
};

export default CompleteBarChart;
