import { Ship } from "../Ship";

export class Battleship extends Ship {
  constructor() {
    super(4);
    this.type = "Battleship";
  }
}
