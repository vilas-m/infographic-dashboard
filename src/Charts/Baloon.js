import React, { useEffect } from "react";
import * as d3 from "d3";
import { firstColor, secondColor } from "../Utils/chartColors";
import generateGradient from "../Utils/svgGradient";
import "./chartStyles.scss";

const Baloon = ({ text }) => {
  useEffect(() => {
    draw();
  });

  let draw = () => {
    d3.select("#bubble" + text)
      .select("svg")
      .remove();

    let margin = 5;
    let width = 100;
    let height = 100;

    let radius = Math.min(width, height) / 2.1 - margin / 2;

    let svg = d3
      .select("#bubble" + text)
      .append("svg")
      .attr("width", "85%")
      .attr("height", "85%")
      .attr("viewBox", `0 0 ${width} ${height}`)
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);

    let gradient = generateGradient({
      svg,
      id: "bubbleGradient",
      x2: "100%",
      y2: "100%",
      firstColor,
      secondColor,
    });

    let value = Math.ceil(Math.random() * (30 - 360) + 360);

    svg
      .append("circle")
      .attr("r", radius * 1.1)
      .style("fill", "url(#bubbleGradient)");

    svg
      .append("text")
      .attr("x", 0)
      .attr("y", 0)
      .text(value)
      .style("font-size", 25)
      .style("font-weight", "Regular")
      .style("fill", "white")
      .attr("text-anchor", "middle");
  };

  return <div id={"bubble" + text} className={"flexRowCenter m10"}></div>;
};

export default Baloon;
