import { useEffect, useState } from "react";
import logo from "/logo/bourek.png";
import "./Loading.scss";

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
			<img src={logo} width={50} height={50} alt="MUDr. Josef Bourek" />
			<div className="text-line">
				<p>MUDr. Josef Bourek</p>
			</div>
		</div>
	);
};

export default Loading;
