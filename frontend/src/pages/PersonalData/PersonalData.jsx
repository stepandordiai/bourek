import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import PageTitle from "../../components/PageTitle/PageTitle";
import PageInfo from "../../components/PageInfo/PageInfo";
import "./PersonalData.scss";

const PersonalData = () => {
	const { t } = useTranslation();

	return (
		<>
			<Helmet>
				<meta
					name="description"
					content="Zásady ochrany osobních údajů v ordinaci MUDr. Josef Bourek v Kolíně a Českém Brodě – informace o zpracování a zabezpečení vašich dat v souladu s GDPR."
				/>
				<title>{t("personal_data_title")} | Bourek</title>
				<link rel="canonical" href="https://www.bourek.cz/osobni-udaje" />
			</Helmet>
			<main>
				<PageTitle title={t("personal_data_title")} />
				<PageInfo>
					<strong>{t("personal_data.info_1")},</strong>
					<strong>{t("personal_data.info_2")}</strong>
					<strong>{t("personal_data.info_3")}</strong>
					<strong>{t("personal_data.info_4")}</strong>
					<strong>{t("personal_data.info_5")}</strong>
				</PageInfo>
			</main>
		</>
	);
};

export default PersonalData;
