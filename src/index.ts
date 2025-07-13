import { Grid } from "./classes/Grid.js";
import { Game } from "./classes/Game.js";
import { Queue } from "./classes/Queue.js";

const canvas = document.getElementById("canvas") as HTMLCanvasElement | null;
const pen: CanvasRenderingContext2D = canvas.getContext("2d");

const grid = new Grid(10, 20);
const game = new Game(canvas, pen, grid);
const queue = new Queue();

function gameLoop() {
    game.render();

    if (game.currentTetramino === null) {
        game.currentTetramino = queue.nextTetramino;
    }

    requestAnimationFrame(gameLoop);
}

gameLoop();
