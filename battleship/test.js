import { Gameboard } from "./Gameboard";
import { Helper } from "./Helper";
import { Ship } from "./Ship";
import { Battleship } from "./ships/Battleship";
import { Carrier } from "./ships/Carrier";
import { Destroyer } from "./ships/Destroyer";
import { Patrol } from "./ships/Patrol";
import { Submarine } from "./ships/Submarine";

// beforeEach(() => {
//   jest.spyOn(global.Math, "random").mockReturnValue(0.5);
// });

// afterEach(() => {
//   jest.spyOn(global.Math, "random").mockRestore();
// });

test("Helper", () => {
  // const randomCoord = Helper.randomCoordination(10);
  // randomCoord.forEach((item) => {
  //   expect(item).toBe(5);
  //   // expect(item).toBe(10);
  // });

  // expect(Helper.randomDirection()).toBe(1);

  const arr1 = { x: 1, y: 2 };
  const arr2 = { x: 2, y: 2 };
  const arr3 = { x: 3, y: 2 };
  const arr4 = { x: 3, y: 2 };
  const arr5 = { x: 5, y: 2 };
  const totalArr = [];
  Helper.pushUniqueCoord(totalArr, arr1);
  Helper.pushUniqueCoord(totalArr, arr2);
  Helper.pushUniqueCoord(totalArr, arr3);
  Helper.pushUniqueCoord(totalArr, arr4);
  Helper.pushUniqueCoord(totalArr, arr5);

  expect(totalArr).toEqual([
    { x: 1, y: 2 },
    { x: 2, y: 2 },
    { x: 3, y: 2 },
    { x: 5, y: 2 },
  ]);
});

test("Ship", () => {
  const gameboard = new Gameboard();
  gameboard.initBoard();

  let ship = new Ship(5, 5);
  const carrier = new Carrier();
  gameboard.placeShip(carrier);
  const carrierLocation = carrier.location;

  expect(ship.isSunk()).toBeTruthy();

  ship = new Ship(5, 4);
  expect(ship.isSunk()).toBeFalsy();

  // const carrier = new Carrier();
  expect(carrier.length).toBe(5);

  expect(carrier.location.length).toBe(5);

  // carrierLocation.forEach((item, index) => {
  //   expect(item[0]).toBe(5);
  //   expect(item[1]).toBe(5 + index);
  // });
});

test("Gameboard: ", () => {
  const gameboard = new Gameboard();
  gameboard.initBoard();

  const carrier = new Carrier();
  const battleship = new Battleship();
  const destroyer = new Destroyer();
  const destroyer2 = new Destroyer();
  const patrol = new Patrol();
  const patrol2 = new Patrol();
  const submarine = new Submarine();

  gameboard.placeShip(carrier);
  gameboard.placeShip(battleship);
  gameboard.placeShip(destroyer);
  gameboard.placeShip(patrol);
  gameboard.placeShip(submarine);
  gameboard.placeShip(destroyer2);
  gameboard.placeShip(patrol2);

  const carrierLocation = carrier.location;
  expect(carrierLocation.length).toBe(5);
  expect(battleship.location.length).toBe(4);
  expect(destroyer.location.length).toBe(3);
  expect(patrol.location.length).toBe(2);
  expect(submarine.location.length).toBe(3);

  const totalArr = [
    ...carrier.location,
    ...destroyer.location,
    ...patrol.location,
    ...submarine.location,
    ...battleship.location,
    ...patrol2.location,
    ...destroyer2.location,
  ];

  const uniqueArr = [];

  for (let i = 0; i < totalArr.length; i++) {
    Helper.pushUniqueCoord(uniqueArr, totalArr[i]);
  }

  expect(totalArr.length === uniqueArr.length).toBeTruthy;

  expect(gameboard.board.length).toBe(10);

  // carrierLocation.forEach((item, index) => {
  //   expect(gameboard.board[item[0]][item[1]].ship).toEqual({
  //     _length: 5,
  //     hitTimes: 0,
  //     sunk: false,
  //     _location: [
  //       [5, 5],
  //       [5, 6],
  //       [5, 7],
  //       [5, 8],
  //       [5, 9],
  //     ],
  //     type: "Carrier",
  //   });
  // });
});
