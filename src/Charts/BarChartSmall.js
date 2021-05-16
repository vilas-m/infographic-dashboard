import React, { useEffect } from "react";
import * as d3 from "d3";
import { randomNumber } from "../Utils/randomGenerator";

const BarChartSmall = ({ color, value, id }) => {
  useEffect(() => {
    draw();
  });

  let draw = () => {
    let data = [];
    const margin = 5;
    const width = 50;
    const height = 25;

    for (let i = 0; i < 10; i++) {
      data.push(randomNumber(5, 20));
    }

    d3.select("#barChartSmall" + id)
      .select("svg")
      .remove();

    let svg = d3
      .select("#barChartSmall" + id)
      .append("svg")
      .attr("width", "100%")
      .attr("height", "130%")
      .attr(
        "viewBox",
        `0 0 ${width + margin + margin} ${height + margin + margin + 20}`
      )
      .append("g")
      .attr("transform", `translate(${margin}, ${margin})`);

    let xScale = d3
      .scaleBand()
      .range([0, width])
      .domain(data.map((d, i) => i))
      .padding(0.5);

    let yScale = d3.scaleLinear().domain([0, 20]).range([height, 0]);

    svg
      .append("text")
      .attr("x", width / 2)
      .attr("y", 10)
      .text(value)
      .style("font-size", 8)
      .attr("fill", "#fff")
      .attr("text-anchor", "middle");

    svg
      .append("g")
      .attr("transform", `translate(0, 20)`)
      .selectAll("bars")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => xScale(i))
      .attr("y", (d) => yScale(d))
      .attr("width", (d) => xScale.bandwidth())
      .attr("height", (d) => height - yScale(d))
      .attr("rx", 2)
      .attr("fill", color);
  };

  return <div className={["h-100"]} id={"barChartSmall" + id}></div>;
};

export default BarChartSmall;
