import React, { useEffect } from "react";
import * as d3 from "d3";

const CompleteBarChart = () => {
  useEffect(() => {
    draw();
  });

  let data = [];

  for (let i = 0; i < 10; i++) {
    data.push(Math.ceil(Math.random() * (0 - 20) + 20));
  }

  let draw = () => {
    d3.select("#barChartfull").select("svg").remove();

    let margin = 16;
    let width = 120;
    let height = 50;

    let svg = d3
      .select("#barChartfull")
      .append("svg")
      //   .attr("width", width)
      //   .attr("height", height)
      .attr("width", width + margin + margin)
      .attr("height", height + margin + margin)
      .append("g")
      .attr("transform", `translate(${margin}, ${margin})`);

    let xScale = d3
      .scaleBand()
      .range([0, width])
      .domain(data.map((d, i) => i))
      .padding(0.6);

    // let xScale1 = d3
    //   .scaleBand()
    //   .range([0, width])
    //   .domain(data.map((d, i) => i))
    //   .padding(0.9);

    svg
      .append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(xScale));

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
