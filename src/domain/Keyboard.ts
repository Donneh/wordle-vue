export class Keyboard {
    private _layout: Array<Array<String>> = [
        'QWERTYUIOP'.split(''),
        'ASDFGHJKL'.split(''),
        ['Enter', ...'ZXCVBNM'.split(''), 'Backspace'],
    ]

    get layout(): Array<Array<String>> {
        return this._layout
    }

    set layout(value: Array<Array<String>>) {
        this._layout = value
    }
}
