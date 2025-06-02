import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import PageTitle from "../../components/PageTitle/PageTitle";
import PageInfo from "../../components/PageInfo/PageInfo";
import "./Electrotherapy.scss";

const Electrotherapy = () => {
	const { t } = useTranslation();

	return (
		<>
			<Helmet>
				<meta
					name="description"
					content="Objevte výhody elektroterapie v ordinaci MUDr. Josef Bourek v Kolíně. Moderní léčebné metody pro úlevu od bolesti a podporu regenerace."
				/>
				<title>{t("service_6")} | Bourek</title>
				<link rel="canonical" href="https://bourek.cz/electrotherapy" />
			</Helmet>
			<PageTitle title={t("service_6")} />
			<PageInfo>
				<p>{t("electrotherapy.info_1")}</p>
			</PageInfo>
		</>
	);
};

export default Electrotherapy;
