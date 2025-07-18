import { Tetramino, TetraminoType } from "./Tetramino.js";

export class Queue {
    private _queueLength: number = 5;
    private _stack: Tetramino[] = [];
    private _nextTetramino: Tetramino | null = null;
    private _holdTetramino: Tetramino | null = null;
    private _swappedHold: boolean = false;

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

    public takeNextTetramino() {
        const nextTetramino = this._stack.shift();

        this._nextTetramino = this._stack[0];
        this._stack.push(this.getRandomTetramino());

        return nextTetramino;
    }

    get nextTetramino(): Tetramino {
        return this._nextTetramino;
    }
}
