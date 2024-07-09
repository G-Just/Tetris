function animate() {
  if (currentTetramino === null) {
    getRandomTetramino();
  }

  resetBoard();
  nextFrame();
  checkForClears();

  pen.clearRect(0, 0, canvas.width, canvas.height);
  draw();
  drawProjection();
  window.requestAnimationFrame(animate);
}

animate();
