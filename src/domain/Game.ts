import {Tile} from "./Tile";
import {GameState} from "./GameState";
import {TileFeedback} from "./TileFeedback";

export class Game {
    private readonly _guessesAllowed = 3;
    private readonly _theWord: string = 'dog';
    private readonly _board: Array<Array<Tile>>;
    private currentRowIndex = 0;
    private state: GameState = GameState.Active;
    private _message: string = '';

    constructor() {
        this._board = this._createBoard();
    }


    get message(): string {
        return this._message;
    }

    set message(value: string) {
        this._message = value;
    }

    get currentGuess() {
        return this.currentRow.map((tile: Tile) => tile.letter).join('');
    }

    _createBoard() {
        return Array.from({ length: this._guessesAllowed }, () => {
            return Array.from({ length: this._theWord.length}, () => {
                return new Tile();
            })
        })
    }

    keyInput(event : KeyboardEvent) {
        this.message = '';

        if(this.validateKeyInput(event.key)) {
            this.fillTile(event);
        } else if(event.key === 'Enter') {
            this.makeGuess();
        }
    }

    private validateKeyInput(key: string) {
        return /^[A-z]$/.test(key);
    }

    private fillTile(event: KeyboardEvent) {
        for(let tile of this.currentRow) {
            if(!tile.letter) {
                tile.letter = event.key;
                break;
            }
        }
    }

    get currentRow() {
        return this.board[this.currentRowIndex];
    }

    get wordLength(): number {
        return this._theWord.length;
    }

    get guessesAllowed(): number {
        return this._guessesAllowed;
    }

    get board(): Array<any> {
        return this._board;
    }

    private makeGuess() {
        const guess = this.currentGuess;
        if(guess.length < this._theWord.length) {
            return;
        }

        this.provideFeedback();

        if(guess === this._theWord) {
            this._message = 'You win';
        } else if (this.guessesAllowed === this.currentRowIndex + 1) {
            this._message= 'Game over, you lose!';

            this.state = GameState.Complete;
        } else {
            this._message = 'Incorrect';
            this.currentRowIndex++;
        }
    }

    private provideFeedback() {
        this.currentRow.forEach((tile: Tile, index: number) => {
            tile.feedback = this._theWord.includes(tile.letter) ? TileFeedback.Present : TileFeedback.Absent;

            if (this.currentGuess[index] === this._theWord[index]) {
                tile.feedback = TileFeedback.Correct;
            }
        })
    }
}