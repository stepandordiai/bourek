import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import PageTitle from "../../components/PageTitle/PageTitle";
import "./ClinicGallery.scss";

const ClinicGallery = () => {
	const { t } = useTranslation();

	return (
		<>
			<Helmet>
				<meta
					name="description"
					content="Prohlédněte si moderní prostory ordinace MUDr. Josefa Bourka v Kolíně a Českém Brodě. Galerie nabízí pohled na vybavení a příjemné prostředí kliniky."
				/>
				<title>{t("clinic_gallery_title")} | Bourek</title>
				<link rel="canonical" href="https://www.bourek.cz/clinic-gallery" />
			</Helmet>
			<main>
				<PageTitle title={t("clinic_gallery_title")} />
				<div className="clinic-gallery__wrapper">
					<p>{t("coming_soon")}</p>
				</div>
			</main>
		</>
	);
};

export default ClinicGallery;
