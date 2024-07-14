window.addEventListener("keydown", (event) => {
  if (event.code === "ArrowLeft") {
    if (
      currentTetramino.position.find(
        (coord) => coord[1] - 1 === -1 || board[coord[0]][coord[1] - 1] >= 10
      )
    ) {
      return;
    } else {
      currentTetramino.position.forEach((coord) => coord[1]--);
    }
  }
  if (event.code === "ArrowRight") {
    if (
      currentTetramino.position.find(
        (coord) => coord[1] + 1 === BOARD_WIDTH || board[coord[0]][coord[1] + 1] >= 10
      )
    ) {
      return;
    } else {
      currentTetramino.position.forEach((coord) => coord[1]++);
    }
  }
  if (event.code === "ArrowDown") {
    gameSpeed = 30;
  }
  if (event.code === "ArrowUp") {
    rotate(currentTetramino.position, currentTetramino.name);
  }
  if (event.code === "ShiftRight" || event.code === "ShiftLeft") {
    if (usedHold === false) {
      if (holdQueue.length === 1) {
        TempCurrentTetramino = holdQueue.shift();
        holdQueue.push(tetraminos.find((piece) => piece.id === currentTetramino.id));
        currentTetramino = TempCurrentTetramino;
      } else {
        holdQueue.push(tetraminos.find((piece) => piece.id === currentTetramino.id));
        currentTetramino = null;
      }
      usedHold = true;
    }
  }
  if (event.code === "Space") {
    projection.position.forEach((coord, idx) => (currentTetramino.position[idx] = coord));
  }
});

window.addEventListener("keyup", (event) => {
  if (event.code === "ArrowDown") {
    gameSpeed = 1000;
  }
});
