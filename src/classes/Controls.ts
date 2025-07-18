import { Game } from "./Game.js";

export class Controls {
    private _game: Game;

    constructor(game: Game) {
        this._game = game;

        const body = document.querySelector("body");
        body.addEventListener("keydown", (event: KeyboardEvent) => {
            switch (event.key) {
                case "ArrowUp":
                    // this.drop();
                    break;

                default:
                    break;
            }
        });
    }

    // private drop() {

    //     this._game.currentTetramino.setPosition();
    // }
}
