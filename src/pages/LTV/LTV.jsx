import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import PageTitle from "../../components/PageTitle/PageTitle";
import PageInfo from "../../components/PageInfo/PageInfo";
import "./LTV.scss";

const LTV = () => {
	const { t } = useTranslation();

	return (
		<>
			<Helmet>
				<meta
					name="description"
					content="Zlepšete své zdraví pomocí léčebné tělesné výchovy v ordinaci MUDr. Josef Bourek v Kolíně. Individuální cvičení pro prevenci a léčbu pohybových obtíží."
				/>
				<title>{t("service_7")} | Bourek</title>
				<link rel="canonical" href="https://www.bourek.cz/ltv" />
			</Helmet>
			<main>
				<PageTitle title={t("service_7")} />
				<PageInfo>
					<strong>{t("ltv.info_1")}</strong>
					<p>{t("ltv.info_2")}</p>
				</PageInfo>
			</main>
		</>
	);
};

export default LTV;
