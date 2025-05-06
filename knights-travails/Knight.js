import { KnightPosition } from "./KnightPosition.js";
import { helper } from "./helper.js";

export class Knight {
  constructor() {}

  knightMoves(currentPos, destinationPos) {
    const currentSquare = new KnightPosition(currentPos[0], currentPos[1]);
    const posMovsQueue = [];

    posMovsQueue.push(currentSquare);

    while (posMovsQueue.length > 0) {
      let currentMov = posMovsQueue.shift();
      const predNextMovs = currentMov.calNextMoves();

      predNextMovs.forEach((item) => {
        if (!helper.isInside(item[0], item[1])) return;

        if (!currentMov.x === currentPos[0] && !currentMov.y === currentPos[1])
          if (currentMov.prev.x === item[0] && currentMov.prev.y === item[1])
            return;

        const newMov = new KnightPosition(item[0], item[1], currentMov);

        posMovsQueue.push(newMov);
      });

      if (
        currentMov.x === destinationPos[0] &&
        currentMov.y === destinationPos[1]
      ) {
        const path = [];
        path.push([destinationPos[0], destinationPos[1]]);

        while (currentMov) {
          path.push([currentMov.x, currentMov.y]);
          currentMov = currentMov.prev;
        }

        if (path.length > 0) {
          console.log(
            `=> You made it in ${path.length - 1} moves!  Here's your path:`
          );
          for (let i = path.length; i > 0; i--) console.log(path[i]);
          return;
        }
      }
    }

    return -1;
  }
}
