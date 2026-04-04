"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import "./Loading.scss";

const Loading = () => {
	const [loadingVisible, setLoadingVisible] = useState(true);

	useEffect(() => {
		document.documentElement.style.overflow = "hidden";
		const timeout = setTimeout(() => {
			setLoadingVisible(false);
			document.documentElement.style.overflow = "";
		}, 2000);

		return () => {
			clearTimeout(timeout);
			document.documentElement.style.overflow = "";
		};
	}, []);

	return (
		<div
			id="loading"
			className="loading-logo"
			style={loadingVisible ? { display: "flex" } : { display: "none" }}
		>
			<Image
				src="/logo/bourek.png"
				width={40}
				height={40}
				alt="MUDr. Josef Bourek, s.r.o. logo"
			/>
			<div className="text-content">
				<div className="text-line">
					<p>MUDr. Josef Bourek s.r.o.</p>
				</div>
			</div>
		</div>
	);
};

export default Loading;
