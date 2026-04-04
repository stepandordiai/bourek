"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import ArrowUpIcon from "@/components/icons/ArrowUpIcon";
import "./ScrollToTopBtn.scss";

const ScrollToTopBtn = () => {
	const t = useTranslations();
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
			<ArrowUpIcon />
		</button>
	);
};

export default ScrollToTopBtn;
