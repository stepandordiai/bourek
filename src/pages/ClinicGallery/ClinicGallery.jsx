import { Helmet } from "react-helmet";
import PageTitle from "../../components/PageTitle/PageTitle";
import { useTranslation } from "react-i18next";
import "./ClinicGallery.scss";

const ClinicGallery = () => {
    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <title>{t("clinic_gallery_title")} - MUDr. Josef Bourek</title>
                <link rel="canonical" href="https://bourek.cz/clinic-gallery" />
            </Helmet>
            <PageTitle title={t("clinic_gallery_title")} />
            <div className="clinic-gallery__wrapper">
                <p>{t("coming_soon")}</p>
            </div>
        </>
    );
};

export default ClinicGallery;
