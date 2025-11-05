import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Banner.scss";

const Banner = () => {
	const { t } = useTranslation();

	const [infoData, setInfoData] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);
	const [isBannerVisible, setIsBannerVisible] = useState(false);

	useEffect(() => {
		const getInfoData = async (timeout) => {
			try {
				await new Promise((resolve) => setTimeout(resolve, timeout));
				const response = await axios(import.meta.env.VITE_API_URL);
				setInfoData(response.data);
			} catch (error) {
				console.log(error);
				setError(error);
			} finally {
				setLoading(false);
				setIsBannerVisible(true);
			}
		};

		getInfoData(3000);
	}, []);

	if (error) return;

	return (
		<div
			className={`banner ${
				isBannerVisible && infoData[0].info.length ? "banner--show" : ""
			}`}
		>
			<div className="banner-header">
				{!loading && (
					<p className="banner__title">
						{t("banner.title")} {infoData[0].date}
					</p>
				)}
				<button
					className="banner__close-btn"
					onClick={() => setIsBannerVisible(false)}
				>
					{t("banner.close_btn")}
				</button>
			</div>
			<div className="banner__divider"></div>
			{/* <p className="banner__info">{infoData[0].info}</p> */}
			{/* TODO: */}
			{!loading && (
				<p
					className="banner__info"
					dangerouslySetInnerHTML={{ __html: infoData[0].info }}
				></p>
			)}
		</div>
	);
};

export default Banner;
