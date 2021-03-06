import React, { useEffect } from "react";
import * as d3 from "d3";
import "./chartStyles.scss";
import { firstColor, secondColor } from "../Utils/chartColors";
import generateGradient from "../Utils/svgGradient";
import { randomNumber } from "../Utils/randomGenerator";

const LineChart = () => {
  let data = [];
  let startYear = 2007;

  for (let i = 0; i < 10; i++) {
    data.push({
      year: startYear + i,
      value: randomNumber(-7000, 9000),
    });
  }

  useEffect(() => {
    draw();
  });

  let draw = () => {
    d3.select("#lineChart").select("svg").remove();

    let margin = {
      top: 10,
      bottom: 20,
      left: 50,
      right: 10,
    };

    let width = 300;
    let height = 170;

    let svg = d3
      .select("#lineChart")
      .append("svg")
      .attr("width", "100%")
      .attr("height", "100%")
      .attr(
        "viewBox",
        `0 0 ${width + margin.left + margin.right} ${
          height + margin.top + margin.bottom
        }`
      )
      .attr("preserveAspectRatio", "xMinYMin")
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    let gradient = generateGradient({
      svg,
      id: "lineChartGradient",
      x2: "100%",
      y1: "100%",
      y2: "100%",
      firstColor: secondColor,
      secondColor: firstColor,
    });

    let defs = svg.append("defs");

    let filter = defs.append("filter").attr("id", "glow");
    filter
      .append("feGaussianBlur")
      .attr("stdDeviation", "3.5")
      .attr("result", "coloredBlur");

    let feMerge = filter.append("feMerge");
    feMerge.append("feMergeNode").attr("in", "coloredBlur");
    feMerge.append("feMergeNode").attr("in", "SourceGraphic");

    let xScale = d3
      .scaleBand()
      .range([0, width])
      .domain(data.map((d) => d.year))
      .padding(0.1);

    let yScale = d3.scaleLinear().domain([-7000, 10000]).range([height, 0]);

    svg
      .append("g")
      .style("opacity", 0.5)
      .call(d3.axisLeft(yScale).ticks(5).tickSize(0))
      .call((g) => g.select(".domain").remove());

    svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("class", "glow1")
      .attr("stroke", "url(#lineChartGradient)")
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
          .curve(d3.curveBasis)
      );

    d3.selectAll(".glow1").style("filter", "url(#glow)");
  };

  return (
    <div className={["chartContainer"]}>
      <div className={"chart"} id="lineChart"></div>
    </div>
  );
};

export default LineChart;
