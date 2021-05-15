import { detectAxisMovement } from './utils/gamepad.js';
import Input from './input.js';
import InputContext from './input.js';

interface Context {
	input: Gamepad[];
}

class Engine {
	private canvas: HTMLCanvasElement;
	private context: CanvasRenderingContext2D;
	private counter = 0;
	private input: Input;

	private pos = { x: 0, y: 0 };

	constructor() {
		this.canvas = document.querySelector('#sick-canvas');
		this.context = this.canvas.getContext('2d');
		this.input = new Input()

		window.requestAnimationFrame(time => this.step(time));
	}

	private step(time: number) {
		this.update();
		this.draw();

		window.requestAnimationFrame(time => this.step(time));
	}

	private draw() {
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.context.fillText(`${this.counter} things`, this.pos.x, this.pos.y);
	}

	private update() {
		const ctx: Context = {
			input: navigator.getGamepads(),
		};

		this.counter++;

		var i = this.input.read()

		this.pos.x += i.x1
		this.pos.y += i.y1
	}
}

export default Engine;
