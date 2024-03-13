function add(a: number, b: number) {
  return a + b;
}
function sub(a: number, b: number) {
  return a - b;
}
function mul(a: number, b: number) {
  return a * b;
}
function div(a: number, b: number) {
  if (b === 0) {
    console.error("denominator cannot be '0'");
    return 0;
  }
  return a / b;
}
export { add, sub, mul, div };
