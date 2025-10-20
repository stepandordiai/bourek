import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import PageTitle from "../../components/PageTitle/PageTitle";
import PageInfo from "../../components/PageInfo/PageInfo";
import "./Surgery.scss";

const Surgery = () => {
	const { t } = useTranslation();

	return (
		<>
			<Helmet>
				<meta
					name="description"
					content="Ordinace MUDr. Josef Bourek v Kolíně a Českém Brodě – komplexní rehabilitační péče, fyzioterapie, elektroterapie, laserová terapie a další moderní léčebné metody."
				/>
				<title>{t("service_1")} | Bourek</title>
				<link rel="stylesheet" href="https://www.bourek.cz/surgery" />
			</Helmet>
			<main>
				<PageTitle title={t("service_1")} />
				<PageInfo>
					<p>{t("surgery.info_1")}</p>
					<strong>{t("surgery.info_2")}</strong>
					<p>{t("surgery.info_3")}</p>
					<strong>{t("surgery.list_title")}:</strong>
					<ul className="surgery__ul-list">
						<li>111 – {t("surgery.list_item_1")}</li>
						<li>201 – {t("surgery.list_item_2")}</li>
						<li>211 – {t("surgery.list_item_3")}</li>
						<li>207 – {t("surgery.list_item_4")}</li>
						<li>205 – {t("surgery.list_item_5")}</li>
						<li>209 – {t("surgery.list_item_6")}</li>
					</ul>
					<strong>{t("surgery.info_4")}</strong>
					<p>{t("surgery.info_5")}</p>
					<p>{t("surgery.info_6")}</p>
					<p>{t("surgery.info_7")}</p>
					<p>{t("surgery.info_8")}</p>
				</PageInfo>
			</main>
		</>
	);
};

export default Surgery;
