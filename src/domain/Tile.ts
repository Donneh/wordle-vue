import {TileFeedback} from "./TileFeedback";

export class Tile {
    private _letter: string = '';
    private _feedback: TileFeedback|null = null;


    get letter(): string {
        return this._letter;
    }

    get feedback(): TileFeedback | null {
        return this._feedback;
    }

    set feedback(value: TileFeedback | null) {
        this._feedback = value;
    }

    set letter(value: string) {
        this._letter = value;
    }
}