import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import PageTitle from "../../components/PageTitle/PageTitle";
import "./Offer.scss";

const Offer = () => {
	const { t } = useTranslation();

	return (
		<>
			<Helmet>
				<meta
					name="description"
					content="Komplexní rehabilitační péče v ordinaci MUDr. Josef Bourek v Kolíně – odborné lékařské služby, fyzioterapie, elektroterapie, lymfodrenáž a další moderní terapie."
				/>
				<title>{t("offer_title")} | Bourek</title>
				<link rel="canonical" href="https://bourek.cz/offer" />
			</Helmet>
			<main className="offer">
				<PageTitle title={t("offer_title")} />
				<div className="offer__grid">
					<div className="offer__grid-card">
						<div></div>
						<p>{t("offer.1")}</p>
					</div>
					<div className="offer__grid-card">
						<div></div>
						<p>{t("offer.2")}</p>
					</div>
					<div className="offer__grid-card">
						<div></div>
						<p>{t("offer.3")}</p>
					</div>
					<div className="offer__grid-card">
						<div></div>
						<p>{t("offer.4")}</p>
					</div>
					<div className="offer__grid-card">
						<div></div>
						<p>{t("offer.5")}</p>
					</div>
					<div className="offer__grid-card">
						<div></div>
						<p>{t("offer.6")}</p>
					</div>
					<div className="offer__grid-card">
						<div></div>
						<p>{t("offer.7")}</p>
					</div>
				</div>
			</main>
		</>
	);
};

export default Offer;
