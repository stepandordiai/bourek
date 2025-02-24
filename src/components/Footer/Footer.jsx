import { NavLink } from "react-router-dom";
import CustomDivider from "../CustomDivider/CustomDivider";
import { useTranslation } from "react-i18next";
import logoImg from "./../../assets/logo/pepa-bourek-logo.png";
import locationIcon from "./../../assets/icons/location.png";
import phoneIcon from "./../../assets/icons/telephone.png";
import mailIcon from "./../../assets/icons/mail.png";
import "./Footer.scss";

const Footer = () => {
    const { t } = useTranslation();

    const inactiveFooterLink = "footer__link";
    const activeFooterLink = "footer__link footer__link--active";

    return (
        <footer className="footer">
            <div className="footer__header">
                <NavLink className="footer__header-logo" to="/">
                    <img src={logoImg} alt="Logo" />
                    <span>Pepa Bourek</span>
                </NavLink>
                <ul className="footer__header-socials-list">
                    <li>
                        <a href="">Facebook</a>
                    </li>
                    <li>
                        <a href="">Instagram</a>
                    </li>
                </ul>
            </div>
            <CustomDivider />
            <div className="footer__nav">
                <div>
                    <p>{t("footer.nav_title")}</p>
                    <ul>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive
                                        ? activeFooterLink
                                        : inactiveFooterLink
                                }
                                to="/"
                            >
                                {t("home_title")}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive
                                        ? activeFooterLink
                                        : inactiveFooterLink
                                }
                                to="/price-list"
                            >
                                {t("price_list_title")}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive
                                        ? activeFooterLink
                                        : inactiveFooterLink
                                }
                                to="/contact"
                            >
                                {t("contacts_title")}
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <p>{t("about_us_title")}</p>
                    <ul>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive
                                        ? activeFooterLink
                                        : inactiveFooterLink
                                }
                                to="/offer"
                            >
                                {t("offer_title")}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive
                                        ? activeFooterLink
                                        : inactiveFooterLink
                                }
                                to="/our-team"
                            >
                                {t("our_team_title")}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive
                                        ? activeFooterLink
                                        : inactiveFooterLink
                                }
                                to="/smile-gallery"
                            >
                                {t("clinic_gallery_title")}
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <p>{t("services_title")}</p>
                    <ul>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive
                                        ? activeFooterLink
                                        : inactiveFooterLink
                                }
                                to="/surgery"
                            >
                                {t("service_1")}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive
                                        ? activeFooterLink
                                        : inactiveFooterLink
                                }
                                to="/starvac"
                            >
                                {t("service_2")}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive
                                        ? activeFooterLink
                                        : inactiveFooterLink
                                }
                                to="/cellulite"
                            >
                                {t("service_3")}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive
                                        ? activeFooterLink
                                        : inactiveFooterLink
                                }
                                to="/lymphatic"
                            >
                                {t("service_4")}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive
                                        ? activeFooterLink
                                        : inactiveFooterLink
                                }
                                to="/laser"
                            >
                                {t("service_5")}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive
                                        ? activeFooterLink
                                        : inactiveFooterLink
                                }
                                to="/electrotherapy"
                            >
                                {t("service_6")}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive
                                        ? activeFooterLink
                                        : inactiveFooterLink
                                }
                                to="/ltv"
                            >
                                {t("service_7")}
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <p>{t("contacts_title")}</p>
                    <ul className="footer__contact-list">
                        <li>
                            <img src={phoneIcon} width={20} alt="Phone" />
                            <a href="tel:+420602273579">+420 602 273 579</a>
                        </li>
                        <li>
                            <img src={mailIcon} width={20} alt="E-mail" />
                            <a href="mailto:josef@bourek.cz">
                                pepabourek@gmail.com
                            </a>
                        </li>
                        <li>
                            <img src={locationIcon} width={20} alt="Location" />
                            <a href="https://maps.app.goo.gl/zyvc7wwr1atb3N3m8">
                                Pod Hroby 271 Kolín IV
                            </a>
                        </li>
                    </ul>
                    <p style={{ marginTop: 10 }}>
                        {t("footer.about_title")} Pepa Bourek
                    </p>
                    <ul>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive
                                        ? activeFooterLink
                                        : inactiveFooterLink
                                }
                                to="/personal-data"
                            >
                                {t("personal_data_title")}
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <CustomDivider />
            <div className="footer__footer">
                <div>
                    <p className="copyright">
                        <span>&copy; 2025 Pepa Bourek</span>
                        <span> | </span>
                        <span>{t("footer.copyright")}</span>
                    </p>
                </div>
                <p className="creator">
                    Designed and developed by{" "}
                    <a
                        href="https://heeeyooo-studio.netlify.app/"
                        target="_blank"
                    >
                        heeeyooo.studio
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
