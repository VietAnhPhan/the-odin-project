import { analyzeArray } from "./analyzeArray";

test("Analyze array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });

  expect(analyzeArray([5, 8, 3, 4, 2, 6])).toEqual({
    average: 5,
    min: 2,
    max: 8,
    length: 6,
  });
});
