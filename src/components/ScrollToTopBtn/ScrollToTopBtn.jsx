import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import "./ScrollToTopBtn.scss";

const ScrollToTopBtn = () => {
	const { t } = useTranslation();
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		// Prevent re-calc window.innerHeight each time on scroll so i save value in a variable
		const windowHeight = window.innerHeight;

		const handleBtnOnScroll = () => setVisible(window.scrollY >= windowHeight);

		// TODO: LEARN { passive: true }
		window.addEventListener("scroll", handleBtnOnScroll, { passive: true });

		return () => window.removeEventListener("scroll", handleBtnOnScroll);
	}, []);

	function scrollOnClick() {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}

	return (
		<button
			className={`to-top-btn ${visible ? "to-top-btn--visible" : ""}`}
			onClick={scrollOnClick}
			aria-label={t("scrollToTop")}
			title={t("scrollToTop")}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="32"
				height="32"
				fill="currentColor"
				className="bi bi-arrow-up-short"
				viewBox="0 0 16 16"
			>
				<path
					fillRule="evenodd"
					d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5"
				/>
			</svg>
		</button>
	);
};

export default ScrollToTopBtn;
