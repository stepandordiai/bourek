import { useEffect } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import PageInfo from "../../components/PageInfo/PageInfo";
import { useTranslation } from "react-i18next";
import "./Laser.scss";

const Laser = () => {
    const { t } = useTranslation();

    useEffect(() => {
        document.title = t("service_5");
    }, [t]);

    return (
        <>
            <PageTitle title={t("service_5")} />
            <PageInfo>
                <p>{t("laser.info_1")}</p>
            </PageInfo>
        </>
    );
};

export default Laser;
