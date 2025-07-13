import { Tetramino, TetraminoType } from "./Tetramino.js";

export class Queue {
    private _queueLength: number = 5;
    private _stack: Tetramino[] = [];
    private _nextTetramino: Tetramino;

    constructor() {
        for (let i = 0; i < this._queueLength; i++) {
            this._stack.push(this.getRandomTetramino());
        }

        this._nextTetramino = this._stack[0];
    }

    private getRandomTetramino(): Tetramino {
        const tetraminoTypeLength = Object.keys(TetraminoType).length;
        const tetraminoTypes = Object.values(TetraminoType);

        return new Tetramino(
            TetraminoType[tetraminoTypes[Math.floor(Math.random() * tetraminoTypeLength)]]
        );
    }

    get nextTetramino(): Tetramino {
        return this._nextTetramino;
    }
}
