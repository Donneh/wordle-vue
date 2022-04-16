import { TileFeedback } from './TileFeedback'

export class Tile {
    private _letter: string = ''
    private _feedback: TileFeedback | null = null
    private _position: number

    constructor(position: number) {
        this._position = position
    }

    get letter(): string {
        return this._letter
    }

    get feedback(): TileFeedback | null {
        return this._feedback
    }

    set feedback(value: TileFeedback | null) {
        this._feedback = value
    }

    set letter(value: string) {
        this._letter = value
    }

    get position(): number {
        return this._position
    }

    set position(value: number) {
        this._position = value
    }

    empty() {
        this.letter = ''
    }

    static updateFeedbackForRow(row: Array<Tile>, theWord: string) {
        let theWordArray = theWord.split('')

        for (const tile of row) {
            if (theWordArray[tile.position] === tile.letter) {
                tile.feedback = TileFeedback.Correct
                theWordArray[tile.position] = ''
            }
        }

        for (const tile of row) {
            if (theWordArray.includes(tile.letter)) {
                tile.feedback = TileFeedback.Present
                theWordArray[theWordArray.indexOf(tile.letter)] = ''
            }
        }

        for (const tile of row.filter((tile) => !tile.feedback)) {
            tile.feedback = TileFeedback.Absent
        }
    }
}
