import React, { useEffect } from "react";
import * as d3 from "d3";

const BarChartSmall = ({ color, text, id }) => {
  useEffect(() => {
    draw();
  });

  let data = [];

  for (let i = 0; i < 10; i++) {
    data.push(Math.ceil(Math.random() * (0 - 20) + 20));
  }

  let draw = () => {
    d3.select("#barChartSmall" + id)
      .select("svg")
      .remove();

    let margin = 5;
    let width = 50;
    let height = 30;

    let svg = d3
      .select("#barChartSmall" + id)
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
      .padding(0.5);

    // svg
    //   .append("g")
    //   .attr("transform", `translate(0, ${height})`)
    //   .call(d3.axisBottom(xScale));

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
      .attr('rx', 2)
      .attr("fill", color)

    // svg.append("g").call(d3.axisLeft(yScale));

    // svg
    //   .append("text")
    //   .attr("x", 0)
    //   .attr("y", 5)
    //   .text(value)
    //   .style("font-size", 17)
    //   .attr("fill", "#fff")
    //   .attr("text-anchor", "middle");
  };

  return <div id={"barChartSmall" + id}></div>;
};
// };

export default BarChartSmall;
