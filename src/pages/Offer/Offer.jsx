import { useEffect } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import { useTranslation } from "react-i18next";
import "./Offer.scss";

const Offer = () => {
    const { t } = useTranslation();

    useEffect(() => {
        document.title = t("offer_title");
    }, [t]);

    return (
        <>
            <PageTitle title={t("offer_title")} />
            <div className="offer__wrapper">
                <ul className="offer__list">
                    <li>{t("offer.offer_1")}</li>
                    <li>{t("offer.offer_2")}</li>
                    <li>
                        {t("offer.offer_3")}:
                        <ul>
                            <li>{t("offer.offer_4")}</li>
                            <li>{t("offer.offer_5")}</li>
                            <li>{t("offer.offer_6")}</li>
                        </ul>
                    </li>
                    <li>{t("offer.offer_7")}</li>
                </ul>
            </div>
        </>
    );
};

export default Offer;
