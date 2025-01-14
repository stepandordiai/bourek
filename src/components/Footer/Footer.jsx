import { NavLink } from "react-router-dom";
import logoImg from "./../../assets/medical-symbol.png";
import CustomLine from "../CustomLine/CustomLine";
import "./Footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <CustomLine />
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
                    <p>Work Hours</p>
                    <ul>
                        <li>Monday: 7:30 - 15:00</li>
                        <li>Tuesday: 7:30 - 15:00</li>
                        <li>Wednesday: 7:30 - 18:00</li>
                        <li>Thursday: 7:30 - 15:00</li>
                        <li>Friday: 7:30 - 13:00</li>
                        <li>Saturday: 7:30 - 12:00</li>
                        <li>Sunday: Closed</li>
                    </ul>
                </div>
                <div>
                    <p>Navigation</p>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about-us">About us</NavLink>
                        </li>
                        <li>
                            <NavLink to="/services">Services</NavLink>
                        </li>
                        <li>
                            <NavLink to="/prices">Prices</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <p>Services</p>
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
                            <NavLink to="/lymfodrenaz">Lymfodrenaz</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <CustomLine />
            <div className="footer__footer">
                <p className="creator">
                    Made by{" "}
                    <a href="https://stepandordiai.netlify.app/">
                        Stepan Dordiai
                    </a>
                </p>
                <div>
                    <p className="copyright">&copy; 2025 Bourek</p>
                    <p>All rights reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
