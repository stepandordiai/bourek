import { useEffect } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import { useTranslation } from "react-i18next";
import "./ClinicGallery.scss";

const ClinicGallery = () => {
    const { t } = useTranslation();

    useEffect(() => {
        document.title = t("clinic_gallery_title");
    }, [t]);

    return (
        <>
            <PageTitle title={t("clinic_gallery_title")} />
            <div className="clinic-gallery__wrapper">
                <p>{t("coming_soon")}</p>
            </div>
        </>
    );
};

export default ClinicGallery;
