import { capitilize } from "./capitilize";

test("Capitilize a first character", () => {
  expect(capitilize("capitilize")).toBe("Capitilize");
  expect(capitilize("jest")).toBe("Jest");
});
