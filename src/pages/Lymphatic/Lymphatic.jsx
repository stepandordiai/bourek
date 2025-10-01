import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import PageTitle from "../../components/PageTitle/PageTitle";
import PageInfo from "../../components/PageInfo/PageInfo";
import img1 from "/img/BTL-6000.jpg";
import img2 from "/img/BTL-6000-1.jpg";
import "./Lymphatic.scss";

const Lymphatic = () => {
	const { t } = useTranslation();

	return (
		<>
			<Helmet>
				<meta
					name="description"
					content="Přístrojová lymfodrenáž v ordinaci MUDr. Josef Bourek v Kolíně – moderní terapie pro detoxikaci, úlevu od otoků a podporu lymfatického systému."
				/>
				<title>{t("service_4")} | Bourek</title>
				<link rel="canonical" href="https://www.bourek.cz/lymphatic" />
			</Helmet>
			<main>
				<PageTitle title={t("service_4")} />
				<PageInfo>
					<strong>{t("lymphatic.info_1")}</strong>
					<strong>{t("lymphatic.info_2")}</strong>
					<p>{t("lymphatic.info_3")}</p>
					<p className="lymphatic__img-info">
						<img src={img1} loading="lazy" alt="Image" />
						{t("lymphatic.info_4")}
					</p>
					<p className="lymphatic__img-info">
						<img src={img2} loading="lazy" alt="Image" />
						{t("lymphatic.info_5")}
					</p>
					<strong>{t("lymphatic.info_6")}</strong>
					<p>{t("lymphatic.info_7")}</p>
					<strong>{t("lymphatic.list_title")}:</strong>
					<ol className="lymphatic__ol-list">
						<li>{t("lymphatic.list_info_1")}</li>
						<li>{t("lymphatic.list_info_2")}</li>
						<li>{t("lymphatic.list_info_3")}</li>
						<li>{t("lymphatic.list_info_4")}</li>
						<li>{t("lymphatic.list_info_5")}</li>
						<li>{t("lymphatic.list_info_6")}</li>
						<li>{t("lymphatic.list_info_7")}</li>
						<li>{t("lymphatic.list_info_8")}</li>
						<li>{t("lymphatic.list_info_9")}</li>
						<li>{t("lymphatic.list_info_10")}</li>
					</ol>
					<strong>{t("lymphatic.info_8")}</strong>
					<p>{t("lymphatic.info_9")}</p>
					<strong>{t("lymphatic.info_10")}</strong>
					<p>{t("lymphatic.info_11")}</p>
					<p>{t("lymphatic.info_12")}</p>
				</PageInfo>
			</main>
		</>
	);
};

export default Lymphatic;
