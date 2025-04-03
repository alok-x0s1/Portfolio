"use client";

import { useRef, useEffect } from "react";
import { useMousePosition } from "@/utils/mouse";

interface ParticlesProps {
	className?: string;
	quantity?: number;
	staticity?: number;
	ease?: number;
	refresh?: boolean;
}

export default function Particles({
	className = "",
	quantity = 30,
	staticity = 50,
	ease = 50,
	refresh = false,
}: ParticlesProps) {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const canvasContainerRef = useRef<HTMLDivElement>(null);
	const context = useRef<CanvasRenderingContext2D | null>(null);
	const circles = useRef<Circle[]>([]);
	const mousePosition = useMousePosition();
	const mouse = useRef({ x: 0, y: 0 });
	const canvasSize = useRef({ w: 0, h: 0 });
	const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1;

	useEffect(() => {
		const canvas = canvasRef.current;
		if (canvas) {
			context.current = canvas.getContext("2d");
			initCanvas();
			animate();
			window.addEventListener("resize", initCanvas);
			window.addEventListener("mousemove", onMouseMove);
		}

		return () => {
			window.removeEventListener("resize", initCanvas);
			window.removeEventListener("mousemove", onMouseMove);
		};
	}, []);

	useEffect(() => {
		if (refresh) initCanvas();
	}, [refresh]);

	const initCanvas = () => {
		resizeCanvas();
		drawParticles();
	};

	const onMouseMove = (event: MouseEvent) => {
		if (canvasRef.current) {
			const rect = canvasRef.current.getBoundingClientRect();
			const { w, h } = canvasSize.current;
			const x = event.clientX - rect.left - w / 2;
			const y = event.clientY - rect.top - h / 2;
			const inside = x < w / 2 && x > -w / 2 && y < h / 2 && y > -h / 2;
			if (inside) {
				mouse.current.x = x;
				mouse.current.y = y;
			}
		}
	};

	type Circle = {
		x: number;
		y: number;
		translateX: number;
		translateY: number;
		size: number;
		alpha: number;
		targetAlpha: number;
		dx: number;
		dy: number;
		magnetism: number;
	};

	const resizeCanvas = () => {
		const container = canvasContainerRef.current;
		const canvas = canvasRef.current;
		if (!container || !canvas) return;

		circles.current = [];
		canvasSize.current = {
			w: container.offsetWidth,
			h: container.offsetHeight,
		};
		canvas.width = canvasSize.current.w * dpr;
		canvas.height = canvasSize.current.h * dpr;
		canvas.style.width = `${canvasSize.current.w}px`;
		canvas.style.height = `${canvasSize.current.h}px`;

		if (context.current) context.current.scale(dpr, dpr);
	};

	const circleParams = (): Circle => ({
		x: Math.random() * canvasSize.current.w,
		y: Math.random() * canvasSize.current.h,
		translateX: 0,
		translateY: 0,
		size: Math.random() * 2 + 0.1,
		alpha: 0,
		targetAlpha: Math.random() * 0.6 + 0.1,
		dx: (Math.random() - 0.5) * 0.2,
		dy: (Math.random() - 0.5) * 0.2,
		magnetism: Math.random() * 4 + 0.1,
	});

	const drawCircle = (circle: Circle) => {
		const ctx = context.current;
		if (!ctx) return;

		ctx.save();
		ctx.translate(circle.translateX, circle.translateY);
		ctx.beginPath();
		ctx.arc(circle.x, circle.y, circle.size, 0, 2 * Math.PI);
		ctx.fillStyle = `rgba(255, 255, 255, ${circle.alpha})`;
		ctx.fill();
		ctx.restore();
	};

	const clearContext = () => {
		const ctx = context.current;
		if (ctx)
			ctx.clearRect(0, 0, canvasSize.current.w, canvasSize.current.h);
	};

	const drawParticles = () => {
		clearContext();
		circles.current = Array.from({ length: quantity }, circleParams);
		circles.current.forEach(drawCircle);
	};

	const remapValue = (
		value: number,
		start1: number,
		end1: number,
		start2: number,
		end2: number
	) =>
		Math.max(
			((value - start1) * (end2 - start2)) / (end1 - start1) + start2,
			0
		);

	const animate = () => {
		clearContext();
		circles.current.forEach((circle, i) => {
			const { x, y, translateX, translateY, size } = circle;
			const { w, h } = canvasSize.current;

			const edge = [
				x + translateX - size,
				w - x - translateX - size,
				y + translateY - size,
				h - y - translateY - size,
			];
			const closestEdge = Math.min(...edge);
			const remapClosestEdge = remapValue(closestEdge, 0, 20, 0, 1);
			circle.alpha =
				circle.targetAlpha *
				(remapClosestEdge > 1 ? 1 : remapClosestEdge);

			circle.x += circle.dx;
			circle.y += circle.dy;
			circle.translateX +=
				(mouse.current.x / (staticity / circle.magnetism) -
					translateX) /
				ease;
			circle.translateY +=
				(mouse.current.y / (staticity / circle.magnetism) -
					translateY) /
				ease;

			// If circle moves out of bounds, reset its position
			if (x < -size || x > w + size || y < -size || y > h + size) {
				circles.current[i] = circleParams();
			}

			drawCircle(circle);
		});

		requestAnimationFrame(animate);
	};

	return (
		<div className={className} ref={canvasContainerRef} aria-hidden="true">
			<canvas ref={canvasRef} />
		</div>
	);
}
