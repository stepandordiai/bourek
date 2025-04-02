import { useEffect } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import PageInfo from "../../components/PageInfo/PageInfo";
import { useTranslation } from "react-i18next";
import "./Cellulite.scss";

const Cellulite = () => {
    const { t } = useTranslation();

    useEffect(() => {
        document.title = t("service_3") + " - MUDr. Josef Bourek";
    }, [t]);

    return (
        <>
            <PageTitle title={t("service_3")} />
            <PageInfo>
                <strong>{t("cellulite.chapters")}:</strong>
                <ul className="cellulite__chapters-list">
                    <li>
                        <a href="#chapter1">{t("cellulite.chapter_1")}</a>
                    </li>
                    <li>
                        <a href="#chapter2">{t("cellulite.chapter_2")}</a>
                    </li>
                    <li>
                        <a href="#chapter3">{t("cellulite.chapter_3")}</a>
                    </li>
                    <li>
                        <a href="#chapter4">{t("cellulite.chapter_4")}</a>
                    </li>
                    <li>
                        <a href="#chapter5">{t("cellulite.chapter_5")}</a>
                    </li>
                    <li>
                        <a href="#chapter6">{t("cellulite.chapter_6")}</a>
                    </li>
                </ul>
                <div className="chapter" id="chapter1">
                    <a href="#chapter1">{t("cellulite.chapter_1")}</a>
                </div>
                <p>{t("cellulite.chapter_1_info_1")}</p>
                <p>{t("cellulite.chapter_1_info_2")}</p>
                <p>{t("cellulite.chapter_1_info_3")}</p>
                <p>{t("cellulite.chapter_1_info_4")}</p>
                <p>{t("cellulite.chapter_1_info_5")}</p>
                <p>{t("cellulite.chapter_1_info_6")}</p>
                <p>{t("cellulite.chapter_1_info_7")}</p>
                <p>{t("cellulite.chapter_1_info_8")}</p>
                <p>{t("cellulite.chapter_1_info_9")}</p>
                <p>{t("cellulite.chapter_1_info_10")}</p>
                <div className="chapter" id="chapter2">
                    <a href="#chapter2">{t("cellulite.chapter_2")}</a>
                </div>
                <p>{t("cellulite.chapter_2_info_1")}</p>
                <p>{t("cellulite.chapter_2_info_2")}</p>
                <div className="chapter" id="chapter3">
                    <a href="#chapter3">{t("cellulite.chapter_3")}</a>
                </div>
                <p className="semi-tp-text">
                    {t("cellulite.chapter_3_info_1")}
                </p>
                <p>{t("cellulite.chapter_3_secondary_info_1")}</p>
                <p className="semi-tp-text">
                    {t("cellulite.chapter_3_info_2")}
                </p>
                <p>{t("cellulite.chapter_3_secondary_info_2")}</p>
                <p className="semi-tp-text">
                    {t("cellulite.chapter_3_info_3")}
                </p>
                <p>{t("cellulite.chapter_3_secondary_info_3")}</p>
                <p className="semi-tp-text">
                    {t("cellulite.chapter_3_info_4")}
                </p>
                <p>{t("cellulite.chapter_3_secondary_info_4")}</p>
                <div className="chapter" id="chapter4">
                    <a href="#chapter4">{t("cellulite.chapter_4")}</a>
                </div>
                <p>{t("cellulite.chapter_4_info_1")}</p>
                <p>{t("cellulite.chapter_4_info_2")}</p>
                <div className="chapter" id="chapter5">
                    <a href="#chapter5">{t("cellulite.chapter_5")}</a>
                </div>
                <ol className="cellulite__ol-list">
                    <li>{t("cellulite.chapter_5_info_1")}</li>
                    <li>{t("cellulite.chapter_5_info_2")}</li>
                    <li>{t("cellulite.chapter_5_info_3")}</li>
                    <li>{t("cellulite.chapter_5_info_4")}</li>
                    <li>{t("cellulite.chapter_5_info_5")}</li>
                </ol>
                <div className="chapter" id="chapter6">
                    <a href="#chapter6">{t("cellulite.chapter_6")}</a>
                </div>
                <ol className="cellulite__ol-list">
                    <li>{t("cellulite.chapter_6_info_1")}</li>
                    <li>{t("cellulite.chapter_6_info_2")}</li>
                    <li>{t("cellulite.chapter_6_info_3")}</li>
                    <li>{t("cellulite.chapter_6_info_4")}</li>
                    <li>{t("cellulite.chapter_6_info_5")}</li>
                    <li>{t("cellulite.chapter_6_info_6")}</li>
                    <li>{t("cellulite.chapter_6_info_7")}</li>
                </ol>
                <p>{t("cellulite.chapter_6_info_8")}</p>
            </PageInfo>
        </>
    );
};

export default Cellulite;
