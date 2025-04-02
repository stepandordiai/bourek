import { useEffect } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import PageInfo from "../../components/PageInfo/PageInfo";
import { useTranslation } from "react-i18next";
import "./Electrotherapy.scss";

const Electrotherapy = () => {
    const { t } = useTranslation();

    useEffect(() => {
        document.title = t("service_6") + " - MUDr. Josef Bourek";
    }, [t]);

    return (
        <>
            <PageTitle title={t("service_6")} />
            <PageInfo>
                <p>{t("electrotherapy.info_1")}</p>
            </PageInfo>
        </>
    );
};

export default Electrotherapy;
