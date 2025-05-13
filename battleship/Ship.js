export class Ship {
  constructor(length = 1, hitTimes = 0, sunk = false) {
    this._length = length;
    this.hitTimes = hitTimes;
    this.sunk = sunk;
    this._location = [];
  }

  hit() {
    this.hitTimes++;
  }

  isSunk() {
    return this.length === this.hitTimes ? true : false;
  }

  get length() {
    return this._length;
  }

  set location(square) {
    this.location.push(square);
  }

  get location() {
    return this._location;
  }
}
