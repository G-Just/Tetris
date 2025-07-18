import { Grid } from "./classes/Grid.js";
import { Game } from "./classes/Game.js";
import { Queue } from "./classes/Queue.js";
import { Controls } from "./classes/Controls.js";

const canvas = document.getElementById("canvas") as HTMLCanvasElement | null;
const pen: CanvasRenderingContext2D = canvas.getContext("2d");

const grid = new Grid(10, 20);
const queue = new Queue();
const game = new Game(canvas, pen, grid, queue);
const controls = new Controls(game);

const FPS = 60;
const FRAME_DURATION = 1000 / FPS;
const DROP_INTERVAL = 1000 / game.dropSpeedPerSecond;
let lastFrameTime = performance.now();
let lastDropTime = performance.now();

function gameLoop(now = performance.now()) {
    if (now - lastFrameTime >= FRAME_DURATION) {
        let isPlaced = false;

        if (now - lastDropTime >= DROP_INTERVAL) {
            isPlaced = grid.moveTetramino(game.currentTetramino, 0, 1);
            lastDropTime = now;
        }

        game.draw();

        if (isPlaced) {
            game.currentTetramino = null;
        }

        if (game.currentTetramino === null) {
            game.currentTetramino = queue.takeNextTetramino();
            grid.spawnTetramino(game.currentTetramino);
        }

        lastFrameTime = now;
    }

    requestAnimationFrame(gameLoop);
}

gameLoop();
