import React, { useEffect } from "react";
import * as d3 from "d3";
import "./chartStyles.scss";
import { firstColor, secondColor } from "../Utils/chartColors";
import generateGradient from "../Utils/svgGradient";

const Mountain = () => {
  let data1 = [
    { year: "07", value: 0 },
    { year: "08", value: 200 },
    { year: "09", value: 1400 },
    { year: "10", value: 3000 },
    { year: "11", value: 9000 },
    { year: "12", value: 10000 },
    { year: "13", value: 7000 },
    { year: "14", value: 2000 },
    { year: "15", value: 2500 },
    { year: "16", value: 4000 },
    { year: "17", value: 5000 },
    { year: "18", value: 0 },
  ];
  let data2 = [
    { year: "07", value: 0 },
    { year: "08", value: 3000 },
    { year: "09", value: 8000 },
    { year: "10", value: 9500 },
    { year: "11", value: 8000 },
    { year: "12", value: 6000 },
    { year: "13", value: 2000 },
    { year: "14", value: 4000 },
    { year: "15", value: 6000 },
    { year: "16", value: 3000 },
    { year: "17", value: 2000 },
    { year: "18", value: 0 },
  ];
  useEffect(() => {
    draw();
  });

  let draw = () => {
    d3.select("#mountainFirst").select("svg").remove();

    const margin = {
      top: 5,
      bottom: 20,
      left: 5,
      right: 5,
    };
    const width = 550;
    const height = 170;

    let svg = d3
      .select("#mountainFirst")
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

   generateGradient({
      svg, id: 'mygrad', y2: '100%', firstColor,secondColor, opacity2: 0.1
    })
    

    let xScale = d3
      .scaleBand()
      .range([0, width])
      .domain(data1.map((d) => d.year))
      .padding(0.1);

    svg
      .append("g")
      .style("opacity", 0.5)
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(xScale).ticks(4).tickSize(0))
      .call((g) => g.select(".domain").remove());

    let yScale = d3.scaleLinear().domain([0, 10000]).range([height, 0]);

    svg
      .append("path")
      .attr("transform", `translate(${xScale.bandwidth()/2}, 0)`)

      .datum(data1)
      .attr("fill", `url(#mygrad)`)
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
    svg
      .append("path")
      .attr("transform", `translate(${xScale.bandwidth()/2}, 0)`)
      .datum(data2)
      .attr("fill", `url(#mygrad)`)
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
  };

  return (
    <div className={["chartContainer"]}>
      <div className={["chart"]} id="mountainFirst"></div>
    </div>
  );
};

export default Mountain;
