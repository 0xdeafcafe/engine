import { detectAxisMovement } from './utils/gamepad.js';


enum InputType {
    Gamepad = 1,
    Keyboard,
}

export interface InputContext {
    x1: number;
    y1: number;
}

export default class Input {
    type: InputType;
    gamepad: Gamepad;

    constructor() {
        var gp = navigator.getGamepads()
        if (gp.length == 0) {
            this.type = InputType.Gamepad;
            this.gamepad == gp[0];
        }

        this.type == InputType.Keyboard;
    }

    read() {
        const input: InputContext = {
            x1: 0,
            y1: 0,
        }

        if (this.type == InputType.Gamepad) {

            input.x1 += detectAxisMovement(this.gamepad, 'left', 'horizontal');
            input.y1 += detectAxisMovement(this.gamepad, 'left', 'vertical');

        } else if (this.type == InputType.Keyboard) {
            console.log("Error: not Implemented")
        }

        return input;
    }
}