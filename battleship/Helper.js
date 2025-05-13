export class Helper {
  static randomCoordination(size) {
    return {
      x: Math.floor(Math.random() * size),
      y: Math.floor(Math.random() * size),
    };
  }

  static randomDirection() {
    return Math.floor(Math.random() * 2);
  }

  static pushUniqueCoord(array, coord) {
    if (array.length === 0) {
      array.push(coord);
      return;
    } else {
      for (let i = 0; i < array.length; i++) {
        if (coord.x === array[i].x && coord.y === array[i].y) {
          // console.log(
          //   "Not unique: " +
          //     coord.x +
          //     " = " +
          //     array[i].x +
          //     " AND " +
          //     +coord.y +
          //     " = " +
          //     array[i].y
          // );
          return;
        }
      }

      array.push(coord);
    }
  }
}
