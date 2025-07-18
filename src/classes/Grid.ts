import { Game } from "./Game.js";
import { Tetramino, TetraminoType, TetraminoColor } from "./Tetramino.js";

export enum CellType {
    "placed",
    "active",
    "projection",
}

export type GridCell = { tetraminoType: TetraminoType; color: string; cellType: CellType } | null;

export class Grid {
    private _columns: number;
    private _rows: number;
    private _grid: GridCell[][] = [];

    constructor(columns: number, rows: number) {
        this._columns = columns;
        this._rows = rows;

        for (let rows = 0; rows <= this._rows; rows++) {
            const row: GridCell[] = [];
            for (let columns = 0; columns <= this._columns; columns++) {
                row.push(null);
            }
            this._grid.push(row);
        }
    }

    public spawnTetramino(tetramino: Tetramino) {
        const shape = tetramino.shape;

        for (let row = 0; row < shape.length; row++) {
            for (let column = 0; column < shape[row].length; column++) {
                if (shape[row][column]) {
                    this._grid[row + tetramino.position.y][column + tetramino.position.x] = {
                        tetraminoType: tetramino.type,
                        color: tetramino.color,
                        cellType: CellType.active,
                    };
                }
            }
        }

        this.updateProjection(tetramino);
    }

    public moveTetramino(tetramino: Tetramino, dx: number, dy: number): boolean {
        let newCell = null;
        let tetraminoPlaced = false;

        if (this.canMove(tetramino, dx, dy)) {
            tetramino.incrementPosition(dx, dy);
            newCell = {
                tetraminoType: tetramino.type,
                color: tetramino.color,
                cellType: CellType.active,
            };
        } else if (dx === 0 && dy > 0) {
            // Means we hit the bottom
            newCell = {
                tetraminoType: tetramino.type,
                color: tetramino.color,
                cellType: CellType.placed,
            };
            tetraminoPlaced = true;
        } else if (dx > 0 && dy === 0) {
            newCell = {
                tetraminoType: tetramino.type,
                color: tetramino.color,
                cellType: CellType.active,
            };
        }

        this.clearCells(CellType.active);

        for (let row = 0; row < tetramino.shape.length; row++) {
            for (let column = 0; column < tetramino.shape[row].length; column++) {
                if (tetramino.shape[row][column]) {
                    this._grid[row + tetramino.position.y][column + tetramino.position.x] = newCell;
                }
            }
        }

        this.updateProjection(tetramino);

        return tetraminoPlaced;
    }

    public updateProjection(tetramino: Tetramino) {
        const shape = tetramino.shape;

        this.clearCells(CellType.projection);

        // Simulate falling from current position
        let deltaY = 0;
        while (this.canMove(tetramino, 0, deltaY + 1)) {
            deltaY++;
        }

        const projectionHeight = tetramino.position.y + deltaY;
        tetramino.setProjectionPosition(tetramino.position.x, projectionHeight);

        for (let row = 0; row < shape.length; row++) {
            for (let column = 0; column < shape[row].length; column++) {
                if (shape[row][column]) {
                    this._grid[row + tetramino.projectionPosition.y][
                        column + tetramino.projectionPosition.x
                    ] = {
                        tetraminoType: tetramino.type,
                        color: tetramino.color,
                        cellType: CellType.projection,
                    };
                }
            }
        }
    }

    private clearCells(type: CellType) {
        this._grid.forEach((row: GridCell[], rowIndex: number) => {
            row.forEach((cell: GridCell | null, colIndex: number) => {
                if (cell?.cellType === type) {
                    this._grid[rowIndex][colIndex] = null;
                }
            });
        });
    }

    private canMove(tetramino: Tetramino, dx: number, dy: number): boolean {
        const shape = tetramino.shape;
        const pos = tetramino.position;

        for (let row = 0; row < shape.length; row++) {
            for (let col = 0; col < shape[row].length; col++) {
                if (shape[row][col]) {
                    const newY = pos.y + row + dy;
                    const newX = pos.x + col + dx;

                    // Check boundaries
                    if (newY < 0 || newY >= this._rows || newX < 0 || newX >= this._columns) {
                        return false;
                    }

                    // Check collision with locked cells
                    const cell = this._grid[newY][newX];
                    if (cell && cell.cellType === CellType.placed) {
                        return false;
                    }
                }
            }
        }
        return true;
    }

    private canRotate(tetramino: Tetramino, direction: "clockwise" | "counterclockwise"): boolean {
        const shape = tetramino.shape;
        const pos = tetramino.position;

        console.log(tetramino.getRotatedShape(direction));

        return false;
    }

    public getGridSize() {
        return { rows: this._rows, columns: this._columns };
    }

    get gridArray(): GridCell[][] {
        return this._grid;
    }
}
