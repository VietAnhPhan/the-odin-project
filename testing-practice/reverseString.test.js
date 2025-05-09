import { reverseString } from "./reverseString";

test("Reverse a string", () => {
  expect(reverseString("reverse")).toBe("esrever");
  expect(reverseString("string")).toBe("gnirts");
});
