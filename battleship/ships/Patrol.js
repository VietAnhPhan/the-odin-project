import { Ship } from "../Ship";

export class Patrol extends Ship {
  constructor() {
    super(2);
    this.type = "Patrol";
  }
}
