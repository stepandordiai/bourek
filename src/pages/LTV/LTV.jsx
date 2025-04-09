import { Helmet } from "react-helmet";
import PageTitle from "../../components/PageTitle/PageTitle";
import PageInfo from "../../components/PageInfo/PageInfo";
import { useTranslation } from "react-i18next";
import "./LTV.scss";

const LTV = () => {
    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <title>{t("service_7")} - MUDr. Josef Bourek</title>
                <link rel="canonical" href="https://bourek.cz/ltv" />
            </Helmet>
            <PageTitle title={t("service_7")} />
            <PageInfo>
                <strong>{t("ltv.info_1")}</strong>
                <p>{t("ltv.info_2")}</p>
            </PageInfo>
        </>
    );
};

export default LTV;
