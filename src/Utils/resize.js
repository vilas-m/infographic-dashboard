export default function setDimension(width, height, margin) {
  let current_width = window.innerWidth * 0.23;
  let current_height = window.innerHeight * 0.25;

  let current_ratio = current_width / current_height;
  let default_ratio = width / height;

  let h, w;
  if (current_ratio > default_ratio) {
    h = current_height;
    w = h * default_ratio;
  } else {
    w = current_width;
    h = w / default_ratio;
  }

  width = w - margin.left - margin.right;
  height = h - margin.top - margin.bottom;

  return [width, height];
}
