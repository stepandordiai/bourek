import { NavLink } from "react-router-dom";
import CustomDivider from "../CustomDivider/CustomDivider";
import logoImg from "./../../assets/logo/medical-symbol.png";
import locationIcon from "./../../assets/icons/location.png";
import phoneIcon from "./../../assets/icons/telephone.png";
import mailIcon from "./../../assets/icons/mail.png";
import "./Footer.scss";

const Footer = () => {
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
                    <p>Navigace</p>
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
                                Úvod
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
                                Ceník
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
                                Kontakty
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <p>O nás</p>
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
                                Co nabízíme
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
                                Náš tým
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
                                Galerie kliniky
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <p>Služby</p>
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
                                Ordinace
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
                                Starvac
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
                                Celulitida
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
                                Lymfodrenáž
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
                                Laser
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
                                Elektroléčba
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
                                Individuální fyzioterapie
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <p>Kontakty</p>
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
                    <p style={{ marginTop: 10 }}>O Pepa Bourek</p>
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
                                Personal data
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
                        <span>Všechna práva vyhrazena</span>
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
