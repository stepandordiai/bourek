import { NavLink } from "react-router-dom";
import logoImg from "./../../assets/medical-symbol.png";
import CustomLine from "../CustomLine/CustomLine";
import locationIcon from "./../../assets/icons/location.png";
import phoneIcon from "./../../assets/icons/telephone.png";
import mailIcon from "./../../assets/icons/mail.png";
import "./Footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__header">
                <NavLink className="footer__header-logo" to="/">
                    <img src={logoImg} alt="" />
                    <span>Bourek</span>
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
            <CustomLine />
            <div className="footer__nav">
                <div>
                    <p>Pracovní doba</p>
                    <table className="footer__nav-table">
                        <tbody>
                            <tr>
                                <td>Pondělí:</td>
                                <td>7:30 - 15:00</td>
                            </tr>
                            <tr>
                                <td>Uterý:</td>
                                <td>7:30 - 15:00</td>
                            </tr>
                            <tr>
                                <td>Středa:</td>
                                <td>7:30 - 18:00</td>
                            </tr>
                            <tr>
                                <td>Ctvrtek:</td>
                                <td>7:30 - 15:00</td>
                            </tr>
                            <tr>
                                <td>Pátek:</td>
                                <td>7:30 - 13:00</td>
                            </tr>
                            <tr>
                                <td>Sobota:</td>
                                <td>7:30 - 12:00</td>
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
                            <NavLink to="/prices">Ceny</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Kontakt</NavLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <p>Oddělení</p>
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
                    </ul>
                </div>
                <div>
                    <p>Kontakt</p>
                    <ul className="footer__contact-list">
                        <li>
                            <img src={phoneIcon} width={20} alt="" />
                            <a href="tel:+420321727404">+420 321 727 404</a>
                        </li>
                        <li>
                            <img src={mailIcon} width={20} alt="" />
                            <a href="mailto:josef@bourek.cz">josef@bourek.cz</a>
                        </li>
                        <li>
                            <img src={locationIcon} width={20} alt="" />
                            <a href="https://maps.app.goo.gl/zyvc7wwr1atb3N3m8">
                                Kolín 4 Pod Hroby 271
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <CustomLine />
            <div className="footer__footer">
                <div>
                    <p className="copyright">
                        &copy; 2025 Bourek | Všechna práva vyhrazena.
                    </p>
                </div>
                <p className="creator">
                    made with ❤ by{" "}
                    <a href="https://stepandordiai.netlify.app/">
                        heeeyooo.studio
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
