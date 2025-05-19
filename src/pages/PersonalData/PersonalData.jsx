import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import PageTitle from "../../components/PageTitle/PageTitle";
import PageInfo from "../../components/PageInfo/PageInfo";
import "./PersonalData.scss";

const PersonalData = () => {
	const { t } = useTranslation();

	return (
		<>
			<Helmet>
				<title>{t("personal_data_title")} | MUDr. Josef Bourek</title>
				<link rel="canonical" href="https://bourek.cz/personal-data" />
			</Helmet>
			<PageTitle title={t("personal_data_title")} />
			<PageInfo>
				<strong>{t("personal_data.info_1")},</strong>
				<strong>{t("personal_data.info_2")}</strong>
				<strong>{t("personal_data.info_3")}</strong>
				<strong>{t("personal_data.info_4")}</strong>
				<strong>{t("personal_data.info_5")}</strong>
			</PageInfo>
		</>
	);
};

export default PersonalData;
