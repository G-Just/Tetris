// TODO: redo the rotation with 4 orientations every pice to mimic real tetris rotation

function rotate(coords, piece) {
  switch (piece) {
    case "I":
      switch (currentTetramino.orientation) {
        case 0:
          coords[0][0] += 3;
          coords[0][1] += 3;
          coords[1][0] += 2;
          coords[1][1] += 2;
          coords[2][0] += 1;
          coords[2][1] += 1;
          currentTetramino.orientation = 1;
          break;
        case 1:
          if (coords[0][1] - 3 <= -1) {
            coords.forEach((coord) => (coord[1] += 3));
          }
          coords[0][0] -= 3;
          coords[0][1] -= 3;
          coords[1][0] -= 2;
          coords[1][1] -= 2;
          coords[2][0] -= 1;
          coords[2][1] -= 1;
          currentTetramino.orientation = 0;
          break;
      }
      break;
    case "T":
      switch (currentTetramino.orientation) {
        case 0:
          if (coords[0][0] - 1 === -1) {
            coords.forEach((coord) => (coord[0] += 1));
          }
          coords[0][0] -= 1;
          coords[0][1] += 1;
          coords[2][0] += 1;
          coords[2][1] -= 1;
          coords[3][0] -= 1;
          coords[3][1] -= 1;
          currentTetramino.orientation += 1;
          break;
        case 1:
          if (coords[0][1] + 1 === BOARD_WIDTH) {
            coords.forEach((coord) => (coord[1] -= 1));
          }
          coords[0][0] += 1;
          coords[0][1] += 1;
          coords[2][0] -= 1;
          coords[2][1] -= 1;
          coords[3][0] -= 1;
          coords[3][1] += 1;
          currentTetramino.orientation += 1;
          break;
        case 2:
          coords[0][0] += 1;
          coords[0][1] -= 1;
          coords[2][0] -= 1;
          coords[2][1] += 1;
          coords[3][0] += 1;
          coords[3][1] += 1;
          currentTetramino.orientation += 1;
          break;
        case 3:
          if (coords[0][1] - 1 === -1) {
            coords.forEach((coord) => (coord[1] += 1));
          }
          coords[0][0] -= 1;
          coords[0][1] -= 1;
          coords[2][0] += 1;
          coords[2][1] += 1;
          coords[3][0] += 1;
          coords[3][1] -= 1;
          currentTetramino.orientation = 0;
          break;
      }
      break;
    case "J":
      switch (currentTetramino.orientation) {
        case 0:
          if (coords[0][1] + 1 === BOARD_WIDTH) {
            coords.forEach((coord) => (coord[1] -= 1));
          }
          coords[0][0] += 2;
          coords[0][1] += 1;
          coords[1][0] += 1;
          coords[2][1] -= 1;
          coords[3][0] -= 1;
          currentTetramino.orientation += 1;
          break;
        case 1:
          coords[0][0] += 1;
          coords[0][1] -= 2;
          coords[1][1] -= 1;
          coords[2][0] -= 1;
          coords[3][1] += 1;
          currentTetramino.orientation += 1;
          break;
        case 2:
          if (coords[0][1] - 1 === -1) {
            coords.forEach((coord) => (coord[1] += 1));
          }
          coords[0][0] -= 2;
          coords[0][1] -= 1;
          coords[1][0] -= 1;
          coords[2][1] += 1;
          coords[3][0] += 1;
          currentTetramino.orientation += 1;
          break;
        case 3:
          coords[0][1] += 2;
          coords[1][0] += 1;
          coords[1][1] += 1;
          coords[2][0] += 2;
          coords[3][0] += 1;
          coords[3][1] -= 1;
          currentTetramino.orientation = 0;
          break;
      }
      break;
    case "L":
      switch (currentTetramino.orientation) {
        case 0:
          if (coords[0][1] + 2 === BOARD_WIDTH) {
            coords.forEach((coord) => (coord[1] -= 1));
          }
          coords[0][0] += 1;
          coords[0][1] += 2;
          coords[1][1] += 1;
          coords[2][0] -= 1;
          coords[3][1] -= 1;
          currentTetramino.orientation += 1;
          break;
        case 1:
          coords[0][0] += 2;
          coords[0][1] -= 1;
          coords[1][0] += 1;
          coords[2][1] += 1;
          coords[3][0] -= 1;
          currentTetramino.orientation += 1;
          break;
        case 2:
          if (coords[0][1] - 2 === -1) {
            coords.forEach((coord) => (coord[1] += 1));
          }
          coords[0][0] -= 1;
          coords[0][1] -= 2;
          coords[1][1] -= 1;
          coords[2][0] += 1;
          coords[3][1] += 1;
          currentTetramino.orientation += 1;
          break;
        case 3:
          coords[0][0] -= 1;
          coords[0][1] += 1;
          coords[2][0] += 1;
          coords[2][1] -= 1;
          coords[3][0] += 2;
          currentTetramino.orientation = 0;
          break;
      }
      break;
    case "S":
      switch (currentTetramino.orientation) {
        case 0:
          coords[0][0] -= 1;
          coords[1][0] += 1;
          coords[1][1] -= 1;
          coords[3][0] += 2;
          coords[3][1] -= 1;
          currentTetramino.orientation = 1;
          break;
        case 1:
          if (coords[3][1] + 1 === BOARD_WIDTH) {
            coords.forEach((coord) => (coord[1] -= 1));
          }
          coords[0][0] += 1;
          coords[1][0] -= 1;
          coords[1][1] += 1;
          coords[3][0] -= 2;
          coords[3][1] += 1;
          currentTetramino.orientation = 0;
          break;
      }
      break;
    case "Z":
      switch (currentTetramino.orientation) {
        case 0:
          coords[0][1] += 1;
          coords[1][0] += 1;
          coords[2][1] -= 1;
          coords[3][0] += 1;
          coords[3][1] -= 2;
          currentTetramino.orientation = 1;
          break;
        case 1:
          if (coords[3][1] + 2 === BOARD_WIDTH) {
            coords.forEach((coord) => (coord[1] -= 1));
          }
          coords[0][1] -= 1;
          coords[1][0] -= 1;
          coords[2][1] += 1;
          coords[3][0] -= 1;
          coords[3][1] += 2;
          currentTetramino.orientation = 0;
          break;
      }
      break;
  }
  return coords;
}
