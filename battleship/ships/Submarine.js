import { Ship } from "../Ship";

export class Submarine extends Ship {
  constructor() {
    super(3);
    this.type = "Submarine";
  }
}
