const generateGradient = (params) => {
  let gradient = params.svg
    .append("defs")
    .append("linearGradient")
    .attr("id", params.id)
    .attr("x1", params.x1 || 0)
    .attr("x2", params.x2 || 0)
    .attr("y1", params.y1 || 0)
    .attr("y2", params.y2 || 0);

  gradient
    .append("stop")
    .attr("offset", "0%")
    .style("stop-color", params.firstColor)
    .style("stop-opacity", params.opacity1 || 1);

  gradient
    .append("stop")
    .attr("offset", "100%")
    .style("stop-color", params.secondColor)
    .style("stop-opacity", params.opacity2 || 1);

  return gradient;
};

export default generateGradient;
