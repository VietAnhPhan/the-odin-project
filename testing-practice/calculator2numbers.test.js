import { calculator } from "./calculator2numbers";

test("add", () => {
  expect(calculator.add(2, 3)).toBe(5);
  expect(calculator.add(-1, 3)).toBe(2);
  expect(calculator.add(-2, -3)).toBe(-5);
});

test("subtract", () => {
  expect(calculator.subtract(2, 3)).toBe(-1);
  expect(calculator.subtract(-1, 3)).toBe(-4);
  expect(calculator.subtract(-2, -3)).toBe(1);
});

test("divide", () => {
  expect(calculator.divide(2, 3)).toBeCloseTo(0.67);
  expect(calculator.divide(-1, 3)).toBeCloseTo(-0.33);
  expect(calculator.divide(-2, -3)).toBeCloseTo(0.67);
  expect(calculator.divide(1, 0)).toBe(Infinity);
});

test("multiply", () => {
  expect(calculator.multiply(2, 3)).toBeCloseTo(6);
  expect(calculator.multiply(-1, 3)).toBeCloseTo(-3);
  expect(calculator.multiply(-2, -3)).toBeCloseTo(6);
});
