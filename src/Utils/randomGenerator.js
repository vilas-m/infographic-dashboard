export function randomNumber(start, end) {
  if (typeof start !== "number" || typeof end !== "number") return null;
  return Math.ceil(Math.random() * (start - end) + end);
}
