import React, { useEffect } from "react";
import data from "./data/world.json";
import * as d3 from "d3";
import DonutChart from "./DonutChart";
import BarChartSmall from "./BarChartSmall";

const GeoChart = () => {
  useEffect(() => {
    draw();
  });

  let draw = () => {
    d3.select("#geoChart").select("svg").remove();

    let margin = {
      top: 5,
      bottom: 5,
      left: 5,
      right: 5,
    };
    let width = 480;
    let height = 250;

    let svg = d3
      .select("#geoChart")
      .append("svg")
      .attr("width", "100%")
      .attr("height", "100%")
      .attr(
        "viewBox",
        `0 0 ${width + margin.left + margin.right} ${
          height + margin.top + margin.bottom
        }`
      )
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    let projection = d3
      .geoNaturalEarth1()
      .scale(width / 1.5 / Math.PI)
      .translate([width / 2.2, height / 1.7]);

    svg
      .append("g")
      .selectAll("path")
      .data(data.features)
      .enter()
      .append("path")
      .attr("fill", "#23375a")
      .attr("d", d3.geoPath().projection(projection));

    let dots = [
      [81.111256, 30.183481],
      [-53.628349, -26.124865],
      [-89.272917, 48.019808],
      [30.055716, -31.140269],
      [54.693024, 24.797892],
    ];

    svg
      .selectAll("circle")
      .data(dots)
      .enter()
      .append("circle")
      .attr("cx", (d) => projection(d)[0])
      .attr("cy", (d) => projection(d)[1])
      .attr("r", "4px")
      .attr("fill", "#e962c1");
  };

  return <div className={["flexRowCenter w-100"]} id="geoChart"></div>;
};

export default GeoChart;
