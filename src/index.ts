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

		if (ctx.input[0] && ctx.input[0].axes[0] !== 0) {
			console.log(ctx.input[0].axes[0]);

			this.pos.x += ctx.input[0].axes[0];
		}

		if (ctx.input[0] && ctx.input[0].axes[1] !== 0) {
			console.log(ctx.input[0].axes[1]);

			this.pos.y += ctx.input[0].axes[1];
		}
	}
}

export default Engine;
