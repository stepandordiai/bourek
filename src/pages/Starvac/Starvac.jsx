import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import PageTitle from "../../components/PageTitle/PageTitle";
import PageInfo from "../../components/PageInfo/PageInfo";
import img1 from "/img/starvac.jpg";
import "./Starvac.scss";

const Starvac = () => {
	const { t } = useTranslation();

	return (
		<>
			<Helmet>
				<meta
					name="description"
					content="Starvac terapie v ordinaci MUDr. Josef Bourek v Kolíně – moderní podtlaková masáž pro redukci celulitidy, lymfodrenáž, zpevnění pokožky a úlevu od bolesti."
				/>
				<title>{t("service_2")} | Bourek</title>
				<link rel="canonical" href="https://www.bourek.cz/starvac" />
			</Helmet>
			<main>
				<PageTitle title={t("service_2")} />
				<PageInfo>
					<strong>{t("starvac.info_1")}</strong>
					<p className="img-text__container">
						<img src={img1} loading="lazy" alt="Starvac" />
						{t("starvac.info_2")}
						<br />
						<br />
						{t("starvac.info_3")}
					</p>
					<strong>{t("starvac.list_1_title")}:</strong>
					<strong>{t("starvac.list_secondary_1_title")}</strong>
					<ul className="starvac__ul-list">
						<li>{t("starvac.list_secondary_1_info_1")}</li>
						<li>{t("starvac.list_secondary_1_info_2")}</li>
						<li>{t("starvac.list_secondary_1_info_3")}</li>
						<li>{t("starvac.list_secondary_1_info_4")}</li>
						<li>{t("starvac.list_secondary_1_info_5")}</li>
						<li>{t("starvac.list_secondary_1_info_6")}</li>
						<li>{t("starvac.list_secondary_1_info_7")}</li>
					</ul>
					<strong>{t("starvac.list_secondary_2_title")}</strong>
					<ul className="starvac__ul-list">
						<li>{t("starvac.list_secondary_2_info_1")}</li>
						<li>{t("starvac.list_secondary_2_info_2")}</li>
						<li>{t("starvac.list_secondary_2_info_3")}</li>
						<li>{t("starvac.list_secondary_2_info_4")}</li>
						<li>{t("starvac.list_secondary_2_info_5")}</li>
					</ul>
					<strong>{t("starvac.list_secondary_3_title")}</strong>
					<ul className="starvac__ul-list">
						<li>{t("starvac.list_secondary_3_info_1")}</li>
						<li>{t("starvac.list_secondary_3_info_2")}</li>
						<li>{t("starvac.list_secondary_3_info_3")}</li>
						<li>{t("starvac.list_secondary_3_info_4")}</li>
					</ul>
					<strong>{t("starvac.list_2_title")}:</strong>
					<ul className="starvac__ul-list">
						<li>{t("starvac.list_2_info_1")}</li>
						<li>{t("starvac.list_2_info_2")}</li>
						<li>{t("starvac.list_2_info_3")}</li>
						<li>{t("starvac.list_2_info_4")}</li>
						<li>{t("starvac.list_2_info_5")}</li>
						<li>{t("starvac.list_2_info_6")}</li>
						<li>{t("starvac.list_2_info_7")}</li>
						<li>{t("starvac.list_2_info_8")}</li>
						<li>{t("starvac.list_2_info_9")}</li>
					</ul>
					<strong>{t("starvac.list_3_title")}:</strong>
					<p>{t("starvac.list_3_info_1")}</p>
					<p>{t("starvac.list_3_info_2")}</p>
					<p>{t("starvac.list_3_info_3")}</p>
					<p>{t("starvac.list_3_info_4")}</p>
					<p>{t("starvac.list_3_info_5")}</p>
				</PageInfo>
			</main>
		</>
	);
};

export default Starvac;
