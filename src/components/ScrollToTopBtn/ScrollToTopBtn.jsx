import { useEffect, useState } from "react";
import upArrowIcon from "/icons/up-arrow.png";
import "./ScrollToTopBtn.scss";

const ScrollToTopBtn = () => {
	const [visible, setVisible] = useState(false);

	const handleBtnOnScroll = () => {
		if (window.scrollY >= 500) {
			setVisible(true);
		} else {
			setVisible(false);
		}
	};

	function scrollOnClick() {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}

	useEffect(() => {
		window.addEventListener("scroll", handleBtnOnScroll);

		return () => window.removeEventListener("scroll", handleBtnOnScroll);
	}, []);

	return (
		<button
			className={`to-top-btn ${visible ? "to-top-btn--visible" : ""}`}
			onClick={scrollOnClick}
		>
			<img src={upArrowIcon} width={20} height={20} alt="" />
		</button>
	);
};

export default ScrollToTopBtn;
