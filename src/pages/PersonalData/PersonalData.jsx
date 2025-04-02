import { useEffect } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import PageInfo from "../../components/PageInfo/PageInfo";
import { useTranslation } from "react-i18next";
import "./PersonalData.scss";

const PersonalData = () => {
    const { t } = useTranslation();

    useEffect(() => {
        document.title = t("personal_data_title") + " - MUDr. Josef Bourek";
    }, [t]);

    return (
        <>
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
