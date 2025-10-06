import { useTranslation } from "react-i18next";
import axios from "axios";
import { useState, useEffect } from "react";
import "./Banner.scss";

const Banner = () => {
	const { t } = useTranslation();

	const [info, setInfo] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	function removeBanner() {
		document.querySelector(".banner").remove();
	}

	useEffect(() => {
		const getInfo = async () => {
			try {
				// TODO:
				const response = await axios(import.meta.env.VITE_API_URL);
				setInfo(response.data);
				setLoading(false);
			} catch (error) {
				console.log(error);
				setError(error);
			} finally {
				setLoading(false);
			}
		};

		getInfo();
	}, []);

	return (
		<>
			{!loading && !error && (
				<div className="banner">
					<div className="banner-header">
						<strong className="banner__title">
							{t("banner.title")} {info[0].date}
						</strong>
						<button
							className="banner__close-btn"
							onClick={removeBanner}
							data-hint-value={t("banner.close_btn_hint") + " 👇"}
						>
							{t("banner.close_btn")} <i className="fa-solid fa-xmark"></i>
						</button>
					</div>
					<div className="banner__divider"></div>
					<strong className="banner__info">{info[0].info}</strong>
				</div>
			)}
		</>
	);
};

export default Banner;
