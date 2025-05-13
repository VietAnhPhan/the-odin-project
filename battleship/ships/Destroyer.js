import { Ship } from "../Ship";

export class Destroyer extends Ship {
  constructor() {
    super(3);
    this.type = "Destroyer";
  }
}
