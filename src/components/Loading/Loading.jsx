import { useEffect } from "react";
import logo from "/logo/bourek.png";
import "./Loading.scss";

const Loading = () => {
	useEffect(() => {
		setTimeout(() => {
			document.querySelector(".loading-logo").style.display = "none";
		}, 2000);
	}, []);

	return (
		<div id="loading" className="loading-logo" style={{ display: "flex" }}>
			<img src={logo} width={50} height={50} alt="MUDr. Josef Bourek" />
			<div className="text-line">
				<p>MUDr. Josef Bourek</p>
			</div>
		</div>
	);
};

export default Loading;
