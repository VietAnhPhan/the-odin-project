export class helper {
  static boardSize = 8;
  static isInside(x, y) {
    return x >= 0 && x < helper.boardSize && y >= 0 && y < helper.boardSize;
  }
}
