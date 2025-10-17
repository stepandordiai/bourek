import { useTranslation } from "react-i18next";
import axios from "axios";
import { useState, useEffect } from "react";
import "./Banner.scss";

const Banner = () => {
	const { t } = useTranslation();

	const [infoData, setInfoData] = useState([]);
	const [error, setError] = useState(null);
	const [isVisible, setIsVisible] = useState(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const getInfoData = async (timeout) => {
			await new Promise((resolve) => setTimeout(resolve, timeout));
			try {
				const response = await axios(import.meta.env.VITE_API_URL);
				setInfoData(response.data);
			} catch (error) {
				console.log(error);
				setError(error);
			} finally {
				setLoading(false);
				setIsVisible(true);
			}
		};

		getInfoData(4000);
	}, []);

	if (error) return;

	return (
		<div className={isVisible ? "banner" : "banner banner--hide"}>
			{!loading && (
				<>
					<div className="banner-header">
						<p className="banner__title">
							{t("banner.title")} {infoData[0].date}
						</p>
						<button
							className="banner__close-btn"
							onClick={() => setIsVisible(false)}
							data-hint-value={t("banner.close_btn_hint") + " 👇"}
						>
							{t("banner.close_btn")} <i className="fa-solid fa-xmark"></i>
						</button>
					</div>
					<div className="banner__divider"></div>
					<p className="banner__info">{infoData[0].info}</p>
				</>
			)}
		</div>
	);
};

export default Banner;
