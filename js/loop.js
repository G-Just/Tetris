function animate() {
  populateTetraminoQueue();
  if (currentTetramino === null) {
    getNextTetramino();
  }

  resetBoard();
  nextFrame();
  checkForClears();

  pen.clearRect(0, 0, canvas.width, canvas.height);
  queuePen.clearRect(0, 0, queue.width, queue.height);
  draw();
  drawProjection();
  window.requestAnimationFrame(animate);
}

animate();
