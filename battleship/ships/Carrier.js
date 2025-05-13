import { Ship } from "../Ship";

export class Carrier extends Ship {
  constructor() {
    super(5);
    this.type = "Carrier";
  }
}
