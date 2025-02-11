import { NavLink } from "react-router-dom";
import CustomHr from "../CustomHr/CustomHr";
import logoImg from "./../../assets/logo/medical-symbol.png";
import locationIcon from "./../../assets/icons/location.png";
import phoneIcon from "./../../assets/icons/telephone.png";
import mailIcon from "./../../assets/icons/mail.png";
import "./Footer.scss";

const Footer = () => {
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
            <CustomHr />
            <div className="footer__nav">
                <div>
                    <p>Navigace</p>
                    <ul>
                        <li>
                            <NavLink to="/">Dům</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about-us">O nás</NavLink>
                        </li>
                        <li>
                            <NavLink to="/prices">Ceník</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Kontakty</NavLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <p>Služby</p>
                    <ul>
                        <li>
                            <NavLink to="/surgery">Ordinace</NavLink>
                        </li>
                        <li>
                            <NavLink to="/starvac">Starvac</NavLink>
                        </li>
                        <li>
                            <NavLink to="/cellulite">Celulitida</NavLink>
                        </li>
                        <li>
                            <NavLink to="/lymphatic">Lymfodrenáž</NavLink>
                        </li>
                        <li>
                            <NavLink to="/lymphatic">Laser</NavLink>
                        </li>
                        <li>
                            <NavLink to="/lymphatic">Elektroléčba</NavLink>
                        </li>
                        <li>
                            <NavLink to="/lymphatic">
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
                            <NavLink to="/personal-data">Personal data</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <CustomHr />
            <div className="footer__footer">
                <div>
                    <p className="copyright">
                        &copy; 2025 Pepa Bourek<span> | </span>
                        <br />
                        Všechna práva vyhrazena
                    </p>
                </div>
                <p className="creator">
                    Designed and developed by{" "}
                    <a
                        href="https://stepandordiai.netlify.app/"
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
