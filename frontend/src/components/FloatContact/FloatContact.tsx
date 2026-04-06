"use client";

import FacebookIcon from "../icons/FacebookIcon";
import TelIcon from "../icons/TelIcon";
import { useEffect, useState } from "react";
import "./styles.scss";

const FloatContact = () => {
	const [floatContactActive, setFloatContactActive] = useState(false);

	const toggleFloatContact = () => setFloatContactActive((prev) => !prev);

	useEffect(() => {
		const hideFloatContact = () => setFloatContactActive(false);

		window.addEventListener("scroll", hideFloatContact);

		return () => window.removeEventListener("scroll", hideFloatContact);
	}, []);
	return (
		<div className="fixed-link-container">
			<a
				title="Telefon"
				className={`fixed-link ${
					floatContactActive ? "fixed-link--active" : ""
				}`}
				href="tel:+420602273579"
			>
				<TelIcon />
			</a>
			<a
				title="Facebook"
				className={`fixed-link1 ${
					floatContactActive ? "fixed-link1--active" : ""
				}`}
				href="https://www.facebook.com/profile.php?id=61575622597789"
				target="_blank"
			>
				<FacebookIcon />
			</a>
			<button onClick={toggleFloatContact} className="fixed-link-container-btn">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					fill="currentColor"
					className="bi bi-three-dots-vertical"
					viewBox="0 0 16 16"
				>
					<path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
				</svg>
			</button>
		</div>
	);
};

export default FloatContact;
