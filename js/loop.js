function animate() {
  let debugQueue = [];
  tetraminoQueue.forEach((piece) => debugQueue.push(piece.name));
  console.log(`Current Tetramino: ${currentTetramino?.name}\n
    Hold: ${holdQueue[0]?.name}\n
    Queue: ${debugQueue.join(", ")}`);

  populateTetraminoQueue();
  if (currentTetramino === null) {
    getNextTetramino();
  }

  resetBoard();
  nextFrame();
  checkForClears();

  clearCanvases();
  draw();
  drawProjection();

  window.requestAnimationFrame(animate);
}

animate();
