import { Tile } from './Tile'
import { GameState } from './GameState'
import words from '../data/5-letter-words'
import { TileFeedback } from './TileFeedback'
import { Keyboard } from './Keyboard'

export class Game {
    private readonly _guessesAllowed = 5
    private readonly _theWord: string =
        words[Math.floor(Math.random() * words.length)]
    private readonly _board: Array<Array<Tile>>
    private currentRowIndex = 0
    private state: GameState = GameState.Active
    private _message: string = ''
    private _virtualKeyboard: Keyboard

    constructor() {
        this._board = this._createBoard()
        this._virtualKeyboard = new Keyboard()
    }

    get currentRow() {
        return this.board[this.currentRowIndex]
    }

    get currentGuess() {
        return this.currentRow.map((tile: Tile) => tile.letter).join('')
    }

    get message(): string {
        return this._message
    }

    set message(value: string) {
        this._message = value
    }

    get virtualKeyboard(): Keyboard {
        return this._virtualKeyboard
    }

    set virtualKeyboard(value: Keyboard) {
        this._virtualKeyboard = value
    }

    get theWord(): string {
        return this._theWord
    }

    get wordLength(): number {
        return this.theWord.length
    }

    get guessesAllowed(): number {
        return this._guessesAllowed
    }

    get board(): Array<any> {
        return this._board
    }

    get remainingGuesses() {
        return this.guessesAllowed - this.currentRowIndex - 1
    }

    _createBoard() {
        return Array.from({ length: this._guessesAllowed }, () => {
            return Array.from({ length: this.wordLength }, (item, index) => {
                return new Tile(index)
            })
        })
    }

    matchingTileForKey(key: string): Tile {
        return this.board
            .flat()
            .filter((tile: Tile) => tile.feedback)
            .sort((t1: Tile, t2: Tile) => {
                return t2.feedback === TileFeedback.Correct ? 1 : -1
            })
            .find((tile: Tile) => tile.letter === key.toLowerCase())
    }

    keyInput(key: string) {
        if (this.state !== GameState.Complete) {
            if (this.validateKeyInput(key)) {
                this.fillTile(key)
            } else if (key === 'Backspace') {
                this.emptyTile()
            } else if (key === 'Enter') {
                this.makeGuess()
            }
        }
    }

    private validateKeyInput(key: string) {
        return /^[A-z]$/.test(key)
    }

    private fillTile(letter: string) {
        for (let tile of this.currentRow) {
            if (!tile.letter) {
                tile.letter = letter
                break
            }
        }
    }

    private emptyTile() {
        for (let tile of [...this.currentRow].reverse()) {
            if (tile.letter) {
                return tile.empty()
            }
        }
    }

    private makeGuess() {
        console.log(this.currentGuess)
        if (this.currentGuess.length < this.theWord.length) {
            return (this.message = '')
        }

        if (!words.includes(this.currentGuess.toLowerCase())) {
            return (this.message = 'Not a word')
        }

        Tile.updateFeedbackForRow(this.currentRow, this.theWord)

        if (this.currentGuess === this.theWord) {
            this.state = GameState.Complete
            return (this.message = 'You win')
        }
        if (this.remainingGuesses === 0) {
            this.state = GameState.Complete
            return (this.message = 'Game over, the word was: ' + this.theWord)
        }

        this.currentRowIndex++

        return (this.message = 'Incorrect')
    }
}
