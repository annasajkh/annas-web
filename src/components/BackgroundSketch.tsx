import { P5CanvasInstance, ReactP5Wrapper, Sketch } from "@p5-wrapper/react";
import { Vector } from "p5";

class Point {
	public position: Vector;
	public velocity: Vector;

	public neighbors: Point[];

	private static neighborDistance: number = 200;

	constructor(position: Vector, velocity: Vector) {
		this.position = position;
		this.velocity = velocity;
		this.neighbors = [];
	}

	updateNeighbors(points: Point[]) {
		for (const point of points) {
			if (point != this) {
				const distance: number = this.position.dist(point.position);

				if (distance <= Point.neighborDistance && !point.neighbors.includes(this) && !this.neighbors.includes(point)) {
					this.neighbors.push(point);
				}

				if (distance >= Point.neighborDistance && this.neighbors.includes(point)) {
					this.neighbors.splice(this.neighbors.indexOf(point), 1);
				}
			}
		}
	}

	update(delta: number) {
		this.position.x += this.velocity.x * delta;
		this.position.y += this.velocity.y * delta;
	}

	draw(p5: P5CanvasInstance) {
		for (const neighbor of this.neighbors) {
			p5.stroke(255, 255, 255);
			p5.line(this.position.x, this.position.y, neighbor.position.x, neighbor.position.y);
		}
	}
}

const points: Point[] = [];
const moveAwayFromMouseDistance: number = 100;

let windowSize: Vector = new Vector(window.innerWidth, window.innerHeight);

for (let i = 0; i < 50; i++) {
	const position: Vector = new Vector(Math.random() * window.innerWidth, Math.random() * window.innerHeight);
	const speed: number = Math.random() / 2 + 0.5;
	const direction: Vector = new Vector(Math.random(), Math.random()).normalize();

	points.push(new Point(position, new Vector(direction.x * speed * 0.1, direction.y * speed * 0.1)));
}

function setup(p5: P5CanvasInstance) {
	p5.createCanvas(windowSize.x, windowSize.y, p5.WEBGL);

	window.addEventListener("resize", () => {
		windowSize = new Vector(window.innerWidth, window.innerHeight);
		p5.resizeCanvas(windowSize.x, windowSize.y);
	});
}

function update(p5: P5CanvasInstance) {
	for (let i = 0; i < points.length; i++) {
		points[i].update(p5.deltaTime);

		const mousePosition: Vector = new Vector(p5.mouseX, p5.mouseY);
		const distanceToMouse: number = points[i].position.dist(mousePosition);

		if (distanceToMouse <= moveAwayFromMouseDistance) {
			const dirVector: Vector = Vector.sub(points[i].position, mousePosition).normalize();
			const magnitude: number = points[i].velocity.mag();

			points[i].velocity.x = dirVector.x * magnitude;
			points[i].velocity.y = dirVector.y * magnitude;
		}
	}

	for (let i = 0; i < points.length; i++) {
		if (points[i].position.x > windowSize.x) {
			points[i].position.x = 0;
		} else if (points[i].position.x < 0) {
			points[i].position.x = windowSize.x;
		} else if (points[i].position.y > windowSize.y) {
			points[i].position.y = 0;
		} else if (points[i].position.y < 0) {
			points[i].position.y = windowSize.y;
		}
	}

	for (let i = 0; i < points.length; i++) {
		points[i].updateNeighbors(points);
	}
}

function draw(p5: P5CanvasInstance) {
	p5.background(15, 23, 42);
	p5.translate(-windowSize.x / 2, -windowSize.y / 2);
	p5.push();
	for (let i = 0; i < points.length; i++) {
		points[i].draw(p5);
	}
	p5.pop();
}

export default function BackgroundSketch() {
	const sketch: Sketch = (p5) => {
		p5.setup = () => setup(p5);
		p5.draw = () => {
			update(p5);
			draw(p5);
		};
	};

	return <ReactP5Wrapper sketch={sketch} />;
}