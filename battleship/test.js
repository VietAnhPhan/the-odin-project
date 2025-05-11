import { Ship } from "./Ship";

test("Ship", () => {
  let ship = new Ship(5, 5);
  expect(ship.isSunk()).toBeTruthy();

  ship = new Ship(4, 5);
  expect(ship.isSunk()).toBeFalsy();
});
