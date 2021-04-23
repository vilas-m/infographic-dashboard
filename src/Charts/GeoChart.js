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
    let width = 400 - margin.left - margin.right;
    let height = 200 - margin.top - margin.bottom;

    let svg = d3
      .select("#geoChart")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g");

    let projection = d3
      .geoNaturalEarth1()
      .scale(width / 1.5/ Math.PI)
      .translate([width / 2.2, height / 1.7]);

      console.log(":::::: ");
    svg
      .append("g")
      .selectAll("path")
      .data(data.features)
      .enter()
      .append("path")
      .attr("fill", "#23375a")
      .attr("d", d3.geoPath().projection(projection))
      .on("mouseover", d => console.log(d) )
      
      let dots = [
          [81.111256,30.183481]
          ,[-53.628349,-26.124865],
          [-89.272917,48.019808],
          [30.055716,-31.140269],
          [54.693024,24.797892]
      ]
      
      svg.selectAll("circle")
		.data(dots).enter()
		.append("circle")
		.attr("cx", (d) => projection(d)[0])
		.attr("cy", (d) => projection(d)[1])
		.attr("r", "4px")
		.attr("fill", "#e962c1")

    //   svg.selectAll("text")
	// 	.data(dots).enter()
	// 	.append("circle")
	// 	.attr("cx", (d) => projection(d)[0] )
	// 	.attr("cy", (d) => projection(d)[1])
	// 	.attr("r", "4px")
	// 	.attr("fill", "blue")
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 10,
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          height: "70%",
        //   background: "red",
          width: "100%",
        }}
        id="geoChart"
      ></div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          height: "30%",
        //   background: "green",
          width: "100%",
        }}
      >
          <DonutChart color="#ea63fc" value="400" id="1"/>
          <BarChartSmall color="#ea63fc" value="400" id="1"/>
          <DonutChart color="#8a4edf" value="320" id="2"/>
          <BarChartSmall color="#8a4edf" value="320" id="2"/>
          <DonutChart color="#4a96c3" value="600" id="3"/>
          <BarChartSmall color="#4a96c3" value="600" id="3"/>
      </div>
    </div>
  );
};

export default GeoChart;
