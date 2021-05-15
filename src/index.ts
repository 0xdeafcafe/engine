import { detectAxisMovement } from './utils/gamepad.js';

interface Context {
	input: Gamepad[];
}

class Engine {
	private canvas: HTMLCanvasElement;
	private context: CanvasRenderingContext2D;
	private counter = 0;

	private pos = { x: 0, y: 0 };

	constructor() {
		this.canvas = document.querySelector('#sick-canvas');
		this.context = this.canvas.getContext('2d');

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

		if (ctx.input[0]) {
			const pad = ctx.input[0];
			const horizontalMovement = detectAxisMovement(pad, 'left', 'horizontal');
			const verticalMovement = detectAxisMovement(pad, 'left', 'vertical');

			this.pos.x += horizontalMovement;
			this.pos.y += verticalMovement;
		}
	}
}

export default Engine;
