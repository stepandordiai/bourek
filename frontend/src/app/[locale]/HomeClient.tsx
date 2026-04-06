"use client";

import { useEffect, useState } from "react";

export default function HomeClient() {
	const [animating, setAnimating] = useState(false);
	const [randomNumbers, setRandomNumbers] = useState<number[]>([]);
	const [visible, setVisible] = useState(true);
	const [loaded, setLoaded] = useState<boolean[]>([false, false, false, false]);

	const handleLoad = (i: number) => {
		requestAnimationFrame(() => {
			setLoaded((prev) => prev.map((v, idx) => (idx === i ? true : v)));
		});
	};

	useEffect(() => {
		setRandomNumbers(
			Array.from({ length: 4 }, () => Math.floor(Math.random() * 15) + 1),
		);

		const interval = setInterval(() => {
			setVisible(false);
			setAnimating((prev) => !prev);

			setTimeout(() => {
				setRandomNumbers(
					Array.from({ length: 4 }, () => Math.floor(Math.random() * 15) + 1),
				);

				setVisible(true);
			}, 1000);
		}, 5000);

		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		if (!visible) {
			setLoaded([false, false, false, false]);
		}
	}, [visible]);

	const imgClass = (i: number) =>
		`hero-img ${loaded[i] ? "hero-img--visible" : "hero-img--hidden"}`;

	return (
		<div className="hero-container">
			<div
				className={`hero-img-container hero-img-container-top ${animating ? "hero-img-container-top--active" : ""}`}
			>
				<div
					style={{ background: "var(--blue-clr-1)" }}
					className="hero-img-wrapper"
				>
					{randomNumbers.length > 0 && (
						<img
							key={randomNumbers[0]}
							onLoad={() => handleLoad(0)}
							className={imgClass(0)}
							src={`/clinic/${randomNumbers[0].toString().padStart(2, "0")}-c.jpg`}
							alt=""
						/>
					)}
				</div>
				<div
					style={{ background: "var(--blue-clr-2)" }}
					className="hero-img-wrapper"
				>
					{randomNumbers.length > 0 && (
						<img
							key={randomNumbers[1]}
							onLoad={() => handleLoad(1)}
							className={imgClass(1)}
							src={`/clinic/${randomNumbers[1].toString().padStart(2, "0")}-c.jpg`}
							alt=""
						/>
					)}
				</div>
			</div>
			<div
				className={`hero-img-container hero-img-container-bottom ${animating ? "hero-img-container-bottom--active" : ""}`}
			>
				<div
					style={{ background: "var(--blue-clr-3)" }}
					className="hero-img-wrapper"
				>
					{randomNumbers.length > 0 && (
						<img
							key={randomNumbers[2]}
							onLoad={() => handleLoad(2)}
							className={imgClass(2)}
							src={`/clinic/${randomNumbers[2].toString().padStart(2, "0")}-c.jpg`}
							alt=""
						/>
					)}
				</div>
				<div
					style={{ background: "var(--blue-clr-4)" }}
					className="hero-img-wrapper"
				>
					{randomNumbers.length > 0 && (
						<img
							key={randomNumbers[3]}
							onLoad={() => handleLoad(3)}
							className={imgClass(3)}
							src={`/clinic/${randomNumbers[3].toString().padStart(2, "0")}-c.jpg`}
							alt=""
						/>
					)}
				</div>
			</div>
		</div>
	);
}
