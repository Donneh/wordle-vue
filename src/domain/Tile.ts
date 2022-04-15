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

    updateFeedback(theWord: string) {
        if (!theWord.includes(this.letter)) {
            return (this.feedback = TileFeedback.Absent)
        }

        if (this.letter === theWord[this.position]) {
            return (this.feedback = TileFeedback.Correct)
        }

        return (this.feedback = TileFeedback.Present)
    }

    static updateFeedbackForRow(row: Array<Tile>, theWord: string) {
        for (const tile of row) {
            tile.updateFeedback(theWord)
        }

        row.filter((tile) => tile.feedback === TileFeedback.Present)
            .filter((tile) =>
                row.some(
                    (t: Tile) =>
                        t.letter === tile.letter &&
                        tile.feedback === TileFeedback.Correct
                )
            )
            .forEach((tile: Tile) => (tile.feedback = TileFeedback.Absent))
    }
}
