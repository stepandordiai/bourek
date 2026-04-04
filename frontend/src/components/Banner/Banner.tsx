"use client";

import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Banner.scss";

interface InfoData {
	info: string;
	date: string;
}

const Banner = () => {
	const t = useTranslations();

	const [infoData, setInfoData] = useState<InfoData | null>(null);
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(true);
	const [isBannerVisible, setIsBannerVisible] = useState(false);

	useEffect(() => {
		const getInfoData = async (timeout: number) => {
			try {
				await new Promise((resolve) => setTimeout(resolve, timeout));
				const response = await axios.get(process.env.NEXT_PUBLIC_API_URL!);
				setInfoData(response.data);
				setIsBannerVisible(true);
			} catch (err: any) {
				setError(err.response?.data?.message);
				setIsBannerVisible(false);
			} finally {
				setLoading(false);
			}
		};

		getInfoData(3000);
	}, []);

	if (error) return;

	return (
		<div
			className={`banner ${
				isBannerVisible && infoData?.info?.length ? "banner--show" : ""
			}`}
		>
			<div className="banner-header">
				{!loading && infoData && (
					<p className="banner__title">
						{t("banner.title")} {infoData.date.replaceAll("-", ".")}
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
			{!loading && infoData && (
				<p
					className="banner__info"
					// TODO: LEARN THIS
					dangerouslySetInnerHTML={{ __html: infoData.info }}
				></p>
			)}
		</div>
	);
};

export default Banner;
