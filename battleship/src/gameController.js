import { Gameboard } from "../Gameboard";
import { Player } from "../Player";

export class GameController {
  constructor(human, computer) {
    this.humanPlayer = human;
    this.computerPlayer = computer;
    this._playerTurn = null;
  }

  // initPlayers() {
  //   const humanGameBoard = this.placeShipsOnBoard();
  //   const computerGameBoard = this.placeShipsOnBoard();

  //   this.humanPlayer = {
  //     player: new Player("human"),
  //     ships: humanGameBoard.ships,
  //     gameBoard: humanGameBoard.gameBoard,
  //   };

  //   this.computerPlayer = {
  //     player: new Player("computer"),
  //     ships: computerGameBoard.ships,
  //     gameBoard: computerGameBoard.gameBoard,
  //   };
  // }

  // initShip() {
  //   const carrier = new Carrier();
  //   const battleship = new Battleship();
  //   const destroyer = new Destroyer();
  //   const destroyer2 = new Destroyer();
  //   const patrol = new Patrol();
  //   const patrol2 = new Patrol();
  //   const submarine = new Submarine();

  //   return [
  //     carrier,
  //     battleship,
  //     destroyer,
  //     destroyer2,
  //     patrol,
  //     patrol2,
  //     submarine,
  //   ];
  // }

  // placeShipsOnBoard() {
  //   const ships = this.initShip();
  //   const gameBoard = new Gameboard();
  //   ships.map((ship) => gameBoard.placeShip(ship));

  //   return {
  //     ships: ships,
  //     gameBoard: gameBoard,
  //   };
  // }

  endGame(loser) {
    console.log(loser);
    if (loser.role === this.computerPlayer.role) alert("Human win!!!");
    else if (loser.role === this.humanPlayer.role) alert("Computer win!!!");
  }

  playGame() {
    this.computerPlayer.attack(this.humanPlayer);

    if (this.humanPlayer.board.areSunk()) {
      this.endGame(this.humanPlayer);
      return;
    }

    this.playerTurn = this.humanPlayer;
  }

  get playerTurn() {
    return this._playerTurn;
  }

  set playerTurn(player) {
    this._playerTurn = player;
  }

  isHumanTurn() {
    return this.playerTurn.role === "human" ? true : false;
  }
}
