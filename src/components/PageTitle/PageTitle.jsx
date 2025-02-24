import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./PageTitle.scss";

const PageTitle = ({ title }) => {
    const { t } = useTranslation();

    return (
        <div className="page-title">
            <h2 className="page-title__title">{title}</h2>
            <div className="page-title__links">
                <NavLink className="page-title__link" to="/">
                    {t("home_title")}
                </NavLink>
                <span className="page-title__link--inactive"> | </span>
                <span className="page-title__link--inactive">{title}</span>
            </div>
        </div>
    );
};

export default PageTitle;
