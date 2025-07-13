import { TetraminoType, TetraminoColor } from "./Tetramino.js";

export type GridCell = { type: TetraminoType; color: string } | null;

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

        this._grid[2][5] = { type: TetraminoType.I, color: TetraminoColor.I };
        this._grid[2][6] = { type: TetraminoType.I, color: TetraminoColor.I };
        this._grid[2][7] = { type: TetraminoType.I, color: TetraminoColor.I };
        this._grid[2][8] = { type: TetraminoType.I, color: TetraminoColor.I };
    }

    public getGridSize() {
        return { rows: this._rows, columns: this._columns };
    }

    get gridArray(): GridCell[][] {
        return this._grid;
    }
}
