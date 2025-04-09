import { Helmet } from "react-helmet";
import PageTitle from "../../components/PageTitle/PageTitle";
import { useTranslation } from "react-i18next";
import "./PriceList.scss";

const PriceList = () => {
    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <title>{t("price_list_title")} - MUDr. Josef Bourek</title>
                <link rel="canonical" href="https://bourek.cz/price-list" />
            </Helmet>
            <PageTitle title={t("price_list_title")} />
            <div className="price-list__wrapper">
                <table className="prices__table">
                    <tbody>
                        <tr>
                            <td>{t("price_list.price_list_1")}</td>
                            <td>1 aplikace</td>
                            <td>80 Kč</td>
                        </tr>
                        <tr>
                            <td>
                                {t("price_list.price_list_2")}
                                <br />({t("price_list.without_recommendation")})
                            </td>
                            <td></td>
                            <td>60 Kč</td>
                        </tr>
                        <tr>
                            <td>Starvac | {t("price_list.price_list_3")}</td>
                            <td>15 {t("price_list.min")}</td>
                            <td>200 Kč</td>
                        </tr>
                        <tr>
                            <td>
                                <abbr title={t("price_list.price_list_4")}>
                                    LTV
                                </abbr>
                            </td>
                            <td>
                                30 {t("price_list.min")}
                                <br />
                                60 {t("price_list.min")}
                            </td>
                            <td>
                                300 Kč
                                <br />
                                450 Kč
                            </td>
                        </tr>
                        <tr>
                            <td>{t("price_list.price_list_5")}</td>
                            <td>
                                30 {t("price_list.min")}
                                <br />
                                45 {t("price_list.min")}
                                <br />
                                60 {t("price_list.min")}
                            </td>
                            <td>
                                200 Kč
                                <br />
                                250 Kč
                                <br />
                                300 Kč
                            </td>
                        </tr>
                        <tr>
                            <td>10 {t("price_list.procedures")}</td>
                            <td>45 {t("price_list.min")}</td>
                            <td>2000 Kč</td>
                        </tr>
                        <tr>
                            <td>10 {t("price_list.procedures")}</td>
                            <td>60 {t("price_list.min")}</td>
                            <td>2400 Kč</td>
                        </tr>
                        <tr>
                            <td>{t("price_list.price_list_6")}</td>
                            <td>1 {t("price_list.cm")}</td>
                            <td>3 Kč</td>
                        </tr>
                        <tr>
                            <td>{t("price_list.price_list_7")}</td>
                            <td>1 ks</td>
                            <td>30 Kč</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default PriceList;
