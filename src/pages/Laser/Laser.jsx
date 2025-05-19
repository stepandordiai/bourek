import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import PageTitle from "../../components/PageTitle/PageTitle";
import PageInfo from "../../components/PageInfo/PageInfo";
import "./Laser.scss";

const Laser = () => {
	const { t } = useTranslation();

	return (
		<>
			<Helmet>
				<title>{t("service_5")} | MUDr. Josef Bourek</title>
				<link rel="canonical" href="https://bourek.cz/laser" />
			</Helmet>
			<PageTitle title={t("service_5")} />
			<PageInfo>
				<p>{t("laser.info_1")}</p>
			</PageInfo>
		</>
	);
};

export default Laser;
