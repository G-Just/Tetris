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
});

window.addEventListener("keyup", (event) => {
  if (event.code === "ArrowDown") {
    gameSpeed = 1000;
  }
});
