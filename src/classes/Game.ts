import { darkenHexColor } from "../utils/Helpers.js";
import { Grid, type GridCell } from "./Grid.js";
import { Tetramino, TetraminoType } from "./Tetramino.js";

export class Game {
    private _canvas: HTMLCanvasElement;
    private _pen: CanvasRenderingContext2D;
    private _grid: Grid;
    private _cellSize: number = 45;
    private _backgroundColor: string = "black";
    private _dropSpeedPerSecond: number = 1;
    private _score: number = 0;
    private _currentTetramino: Tetramino | null;

    constructor(canvas: HTMLCanvasElement, pen: CanvasRenderingContext2D, grid: Grid) {
        this._canvas = canvas;
        this._pen = pen;
        this._grid = grid;

        this._canvas.style.margin = "auto";
        this._canvas.style.backgroundColor = this._backgroundColor;
        const gridSize = this._grid.getGridSize();
        this._canvas.height = this._cellSize * gridSize.rows;
        this._canvas.width = this._cellSize * gridSize.columns;
    }

    public render() {
        const gridSize = this._grid.getGridSize();

        this._pen.strokeStyle = "#666666ff";

        for (let row = 0; row < gridSize.rows; row++) {
            for (let column = 0; column < gridSize.columns; column++) {
                this._pen.strokeRect(
                    column * this._cellSize,
                    row * this._cellSize,
                    this._cellSize,
                    this._cellSize
                );
            }
        }

        this._grid.gridArray.forEach((row: GridCell[], rowIndex) => {
            row.forEach((cell: GridCell, colIndex) => {
                if (cell !== null) {
                    // Color the cell center
                    this._pen.fillStyle = cell.color;
                    this._pen.fillRect(
                        colIndex * this._cellSize + 3,
                        rowIndex * this._cellSize + 3,
                        this._cellSize - 6,
                        this._cellSize - 6
                    );

                    // Color the cell borders
                    this._pen.strokeStyle = darkenHexColor(cell.color, 0.4);
                    this._pen.lineWidth = 6;
                    this._pen.strokeRect(
                        colIndex * this._cellSize + 4,
                        rowIndex * this._cellSize + 4,
                        this._cellSize - 8,
                        this._cellSize - 8
                    );

                    this._pen.lineWidth = 1;
                }
            });
        });
    }

    get currentTetramino(): Tetramino | null {
        return this._currentTetramino;
    }

    set currentTetramino(tetramino: Tetramino) {
        this.currentTetramino = tetramino;
    }
}
