function draw() {
  pen.lineWidth = "1";
  board.forEach((row, idxY) => {
    row.forEach((col, idxX) => {
      switch (board[idxY][idxX]) {
        case 0:
          pen.strokeStyle = "white";
          pen.strokeRect(idxX * 40, idxY * 40, 40, 40);
          break;
        case 10:
          pen.strokeStyle = "black";
          pen.fillStyle = tetraminos[0].color;
          pen.fillRect(idxX * 40, idxY * 40, 40, 40);
          pen.strokeRect(idxX * 40, idxY * 40, 40, 40);
          break;
        case 20:
          pen.strokeStyle = "black";
          pen.fillStyle = tetraminos[1].color;
          pen.fillRect(idxX * 40, idxY * 40, 40, 40);
          pen.strokeRect(idxX * 40, idxY * 40, 40, 40);
          break;
        case 30:
          pen.strokeStyle = "black";
          pen.fillStyle = tetraminos[2].color;
          pen.fillRect(idxX * 40, idxY * 40, 40, 40);
          pen.strokeRect(idxX * 40, idxY * 40, 40, 40);
          break;
        case 40:
          pen.strokeStyle = "black";
          pen.fillStyle = tetraminos[3].color;
          pen.fillRect(idxX * 40, idxY * 40, 40, 40);
          pen.strokeRect(idxX * 40, idxY * 40, 40, 40);
          break;
        case 50:
          pen.strokeStyle = "black";
          pen.fillStyle = tetraminos[4].color;
          pen.fillRect(idxX * 40, idxY * 40, 40, 40);
          pen.strokeRect(idxX * 40, idxY * 40, 40, 40);
          break;
        case 60:
          pen.strokeStyle = "black";
          pen.fillStyle = tetraminos[5].color;
          pen.fillRect(idxX * 40, idxY * 40, 40, 40);
          pen.strokeRect(idxX * 40, idxY * 40, 40, 40);
          break;
        case 70:
          pen.strokeStyle = "black";
          pen.fillStyle = tetraminos[6].color;
          pen.fillRect(idxX * 40, idxY * 40, 40, 40);
          pen.strokeRect(idxX * 40, idxY * 40, 40, 40);
          break;
        default:
          pen.strokeStyle = "black";
          pen.fillStyle = currentTetramino.color;
          pen.fillRect(idxX * 40, idxY * 40, 40, 40);
          pen.strokeRect(idxX * 40, idxY * 40, 40, 40);
          break;
      }
    });
  });
}

function resetBoard() {
  board.forEach((row, idxY) => {
    row.forEach((col, idxX) => {
      switch (board[idxY][idxX]) {
        case 10:
          board[idxY][idxX] = 10;
          break;
        case 20:
          board[idxY][idxX] = 20;
          break;
        case 30:
          board[idxY][idxX] = 30;
          break;
        case 40:
          board[idxY][idxX] = 40;
          break;
        case 50:
          board[idxY][idxX] = 50;
          break;
        case 60:
          board[idxY][idxX] = 60;
          break;
        case 70:
          board[idxY][idxX] = 70;
          break;
        default:
          board[idxY][idxX] = 0;
      }
    });
  });
}

function getRandomTetramino() {
  currentTetramino = structuredClone(
    tetraminos[Math.floor(Math.random() * tetraminos.length)]
  );
  projection = structuredClone(currentTetramino);
}

let then = Date.now();
let now;
function nextFrame() {
  now = Date.now();
  let delta = now - then;
  if (
    currentTetramino.position.find(
      (coord) => coord[0] >= BOARD_HEIGHT - 1 || board[coord[0] + 1][coord[1]] !== 0
    ) !== undefined
  ) {
    currentTetramino.position.forEach(
      (coord) => (board[coord[0]][coord[1]] = currentTetramino.id * 10)
    );
    currentTetramino = null;
  } else {
    currentTetramino.position.forEach(
      (coord) => (board[coord[0]][coord[1]] = currentTetramino.id)
    );
    if (delta > gameSpeed) {
      currentTetramino.position.forEach((coord) => coord[0]++);
      then = now;
    }
  }
}

function checkForClears() {
  board.forEach((line, lineIDX) => {
    if (!line.includes(0)) {
      if (line.every((cell) => cell >= 10)) {
        board.splice(lineIDX, 1);
        board.unshift(Array(10).fill(0, 0, 10));
      }
    }
  });
}

function drawProjection() {
  projection = structuredClone(currentTetramino);
  if (projection !== null) {
    while (
      !projection.position.find(
        (coord) => board[coord[0]][coord[1]] >= 10 || coord[0] === BOARD_HEIGHT - 1
      )
    ) {
      projection.position.forEach((coord) => coord[0]++);
    }

    projection.position.forEach((coord) => coord[0]--);

    if (!projection.position.find((coord) => board[coord[0] + 1][coord[1]] >= 10)) {
      projection.position.forEach((coord) => coord[0]++);
    }
    console.log(projection.color);
    projection.position.forEach((coord) => {
      pen.strokeStyle = "black";
      pen.fillStyle = projection.color;
      pen.globalAlpha = 0.2;
      pen.fillRect(coord[1] * 40, coord[0] * 40, 40, 40);
      pen.strokeRect(coord[1] * 40, coord[0] * 40, 40, 40);
      pen.globalAlpha = 1;
    });
  }
}
