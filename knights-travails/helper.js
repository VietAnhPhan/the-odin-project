export class helper {
  static boardSize = 8;
  static isInside(x, y) {
    return x >= 1 && x <= helper.boardSize && y >= 1 && y <= helper.boardSize;
  }
}
