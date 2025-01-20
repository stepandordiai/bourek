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
                    <p>Pracovní doba</p>
                    <table className="footer__nav-table">
                        <tbody>
                            <tr>
                                <td>Pondělí:</td>
                                <td>7:00 - 17:00</td>
                            </tr>
                            <tr>
                                <td>Uterý:</td>
                                <td>7:00 - 14:30</td>
                            </tr>
                            <tr>
                                <td>Středa:</td>
                                <td>7:00 - 15:00</td>
                            </tr>
                            <tr>
                                <td>Ctvrtek:</td>
                                <td>7:00 - 14:30</td>
                            </tr>
                            <tr>
                                <td>Pátek:</td>
                                <td>7:00 - 14:00</td>
                            </tr>
                            <tr>
                                <td>Sobota:</td>
                                <td>Closed</td>
                            </tr>
                            <tr>
                                <td>Neděle:</td>
                                <td>Closed</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
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
                                Léčebná tělesná výchova
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <p>Kontakty</p>
                    <ul className="footer__contact-list">
                        <li>
                            <img src={phoneIcon} width={20} alt="Phone" />
                            <a href="tel:+420321727404">+420 321 727 404</a>
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
                                Pod Hroby 271/271 Kolín IV
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
                        Všechna práva vyhrazena.
                    </p>
                </div>
                <p className="creator">
                    Made with 💙 by{" "}
                    <a
                        href="https://stepandordiai.netlify.app/"
                        target="_blank"
                    >
                        heeeyooo
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
