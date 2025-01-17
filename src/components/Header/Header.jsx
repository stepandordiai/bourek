import BurgerBtn from "../BurgerBtn/BurgerBtn";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import logoImg from "./../../assets/medical-symbol.png";
import downArrowImg from "./../../assets/icons/down-arrow.png";
import "./Header.scss";

const Header = () => {
    const inactiveLink = "nav__link js-nav__link";
    const activeLink = "nav__link js-nav__link nav__link--active";

    const inactiveLinkOption = "nav__link-option js-nav__link";
    const activeLinkOption =
        "nav__link-option js-nav__link nav__link-option--active";

    useEffect(() => {
        document.querySelectorAll(".js-nav__link").forEach((item) => {
            item.addEventListener("click", () => {
                document
                    .querySelector(".burger-13")
                    .classList.remove("burger-13--active");
                document
                    .querySelector(".burger-13__center-line")
                    .classList.remove("burger-13__center-line--active");
                document
                    .querySelector(".header__list")
                    .classList.remove("header__list--mobile");
            });
        });
    }, []);

    addEventListener("resize", () => {
        document
            .querySelector(".burger-13")
            .classList.remove("burger-13--active");
        document
            .querySelector(".burger-13__center-line")
            .classList.remove("burger-13__center-line--active");
        document
            .querySelector(".header__list")
            .classList.remove("header__list--mobile");
    });

    return (
        <header className="header">
            <NavLink className="header__logo" to="/">
                <img src={logoImg} />
                <span>Bourek</span>
            </NavLink>
            <ul className="header__list js-header__list">
                <li>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? activeLink : inactiveLink
                        }
                        to="/"
                    >
                        Dům
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? activeLink : inactiveLink
                        }
                        to="/about-us"
                    >
                        O nás
                    </NavLink>
                </li>
                <li className="nav__custom-select">
                    <div className="nav__custom-select-item">
                        <span>Oddělení</span>
                        <img
                            src={downArrowImg}
                            className="custom-select__down-arrow"
                        />
                    </div>
                    <div className="nav__custom-options">
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? activeLinkOption : inactiveLinkOption
                            }
                            to="/surgery"
                        >
                            Ordinace
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? activeLinkOption : inactiveLinkOption
                            }
                            to="/starvac"
                        >
                            Starvac
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? activeLinkOption : inactiveLinkOption
                            }
                            to="/cellulite"
                        >
                            Celulitida
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? activeLinkOption : inactiveLinkOption
                            }
                            to="/lymphatic"
                        >
                            Lymfodrenáž
                        </NavLink>
                    </div>
                </li>
                <li>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? activeLink : inactiveLink
                        }
                        to="/prices"
                    >
                        Ceny
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? activeLink : inactiveLink
                        }
                        to="/contact"
                    >
                        Kontakt
                    </NavLink>
                </li>
                <li className="nav__btn">
                    <NavLink
                        className="nav__btn-link js-nav__link"
                        to="/contact"
                    >
                        Domluvit si schůzku
                    </NavLink>
                </li>
            </ul>
            <BurgerBtn />
        </header>
    );
};

export default Header;
