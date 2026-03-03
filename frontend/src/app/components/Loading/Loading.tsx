import { useEffect, useState } from "react";
import "./Loading.scss";
import Image from "next/image";

const Loading = () => {
	const [loadingVisible, setLoadingVisible] = useState(true);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setLoadingVisible(false);
		}, 2000);

		return () => clearTimeout(timeout);
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
