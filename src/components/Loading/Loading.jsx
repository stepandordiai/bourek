import { useEffect } from "react";
import logo from "/assets/logo/bourek.png";
import "./Loading.scss";

const Loading = () => {
	useEffect(() => {
		setTimeout(() => {
			document.querySelector(".loading-logo").style.display = "none";
		}, 2000);
	}, []);

	return (
		<div id="loading" className="loading-logo" style={{ display: "flex" }}>
			<img src={logo} alt="" />
			<div className="text-line">
				<p>MUDr. Josef Bourek</p>
			</div>
		</div>
	);
};

export default Loading;
