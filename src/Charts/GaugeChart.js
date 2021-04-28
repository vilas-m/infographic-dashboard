import React, { useEffect } from "react";
import * as d3 from "d3";
import "./chartStyles.css";

const Gauge = ({ color, id }) => {
  useEffect(() => {
    draw();
  });

  let draw = () => {
    d3.select("#gaugeChart" + id)
      .select("svg")
      .remove();

    let margin = 5;
    let width = 100;
    let height = 100;

    let radius = Math.min(width, height) / 2.1 - margin / 2;

    let svg = d3
      .select("#gaugeChart" + id)
      .append("svg")
      .attr("width", "85%")
      .attr("height", "85%")
      .attr("viewBox", `0 0 ${width} ${height}`)
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);
    let value = Math.ceil(Math.random() * (30 - 360) + 360);

    svg
      .append("circle")
      .attr("r", radius * 1.1)
      .style("fill", "white");

    svg
      .append("path")
      .attr(
        "d",
        d3
          .arc()
          .innerRadius(radius * 0.77)
          .outerRadius(radius + 1)
          .startAngle(0)
          .endAngle((value * Math.PI) / 180)
          .cornerRadius(10)
      )
      .attr("fill", color);

    svg
      .append("text")
      .attr("x", 0)
      .attr("y", -5)
      .text(value)
      .style("font-size", 25)
      .style("font-weight", "Regular")
      .style("fill", "#424242")
      .attr("text-anchor", "middle");

    svg
      .append("text")
      .attr("x", 0)
      .attr("y", 10)
      .text("abcd")
      .style("font-size", 12)
      .attr("text-anchor", "middle");
  };

  return <div id={"gaugeChart" + id} className={"flexRowCenter"}></div>;
};

const GaugeChart = () => {
  return (
    <div className={["w-100 h-100 flexRowCenter"]}>
      {[
        { value: "ADDLE", color: "#ea63fc" },
        { value: "VOCIBUS", color: "#2719dc" },
        { value: "CHORD", color: "#33b3ec" },
      ].map((i) => {
        return (
          <div className={["w-30 flexColAroundCenter"]}>
            <Gauge color={i.color} id={i.value} />
            <p className={['gaugeName']}>{i.value}</p>
          </div>
        );
      })}
    </div>
  );
};

export default GaugeChart;
