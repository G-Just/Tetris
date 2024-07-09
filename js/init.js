// ===============================
// GAME-BOARD

const canvas = document.getElementById("board");
const pen = canvas.getContext("2d");

canvas.style.background = "black";
canvas.width = 400;
canvas.height = 800;

const board = [];
const BOARD_WIDTH = 10;
const BOARD_HEIGHT = 20;

let gameSpeed = 1000;

let currentTetramino = null;
let projection = null;

for (let y = 0; y < BOARD_HEIGHT; y++) {
  board.push([]);
  for (let x = 0; x < BOARD_WIDTH; x++) {
    board[y].push(0);
  }
}

// ===============================
// QUEUE

const queue = document.getElementById("queue");
const queuePen = queue.getContext("2d");

queue.style.background = "black";
queue.width = 80;
queue.height = 200;

const tetraminoQueue = [];
const queueBoard = [];

for (let y = 0; y < 16; y++) {
  queueBoard.push([]);
  for (let x = 0; x < 4; x++) {
    queueBoard[y].push(0);
  }
}
