import BurgerBtn from "../BurgerBtn/BurgerBtn";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import logoImg from "./../../assets/logo/medical-symbol.png";
import downArrowImg from "./../../assets/icons/down-arrow.png";
import "./Header.scss";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

const Header = () => {
    const inactiveLink = "nav__link js-nav__link";
    const activeLink = "nav__link js-nav__link nav__link--active";

    const inactiveLinkOption = "nav__link-option js-nav__link";
    const activeLinkOption =
        "nav__link-option js-nav__link nav__link-option--active";

    useEffect(() => {
        document.querySelectorAll(".js-nav__link").forEach((item, index) => {
            item.addEventListener("click", () => {
                document
                    .querySelector(".burger-13")
                    .classList.remove("burger-13--active");
                document
                    .querySelector(".burger-13__center-line")
                    .classList.remove("burger-13__center-line--active");
                document
                    .querySelector(".burger-menu")
                    .classList.remove("burger-menu--active");
                document
                    .querySelectorAll(".burger-menu__dd-wrapper")
                    .forEach((dropdown) => {
                        dropdown.classList.remove(
                            "burger-menu__dd-wrapper--active"
                        );
                    });
                document
                    .querySelectorAll(".burger-menu__dd-btn")
                    .forEach((dropdownBtn) => {
                        dropdownBtn.classList.remove(
                            "burger-menu__dd-btn--active"
                        );
                    });
            });
        });

        document
            .querySelector(".nav__custom-options")
            .addEventListener("scroll", () => {
                if (
                    document.querySelector(".nav__custom-options").scrollTop > 0
                ) {
                    document
                        .querySelector(".custom-options__down-arrow")
                        .classList.add("custom-options__down-arrow--active");
                } else {
                    document
                        .querySelector(".custom-options__down-arrow")
                        .classList.remove("custom-options__down-arrow--active");
                }
            });
    }, []);

    return (
        <header className="header">
            <NavLink className="header__logo" to="/">
                <img src={logoImg} alt="Logo" />
                <span>Pepa Bourek</span>
            </NavLink>
            <nav className="header__list js-header__list">
                <div>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? activeLink : inactiveLink
                        }
                        to="/"
                    >
                        Úvod
                    </NavLink>
                </div>
                <div className="nav__custom-select">
                    <div className="nav__custom-select-item">
                        <span>O nás</span>
                        <span className="nav__dd-btn-icon">
                            <i className="fa-solid fa-chevron-down"></i>
                        </span>
                    </div>
                    <div className="nav__custom-options">
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? activeLinkOption : inactiveLinkOption
                            }
                            to="/offer"
                        >
                            What we offer
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? activeLinkOption : inactiveLinkOption
                            }
                            to="/our-team"
                        >
                            Our team
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? activeLinkOption : inactiveLinkOption
                            }
                            to="/clinic-gallery"
                        >
                            Clinic gallery
                        </NavLink>
                    </div>
                </div>
                <div className="nav__custom-select">
                    <div className="nav__custom-select-item">
                        <span>Služby</span>
                        <span className="nav__dd-btn-icon">
                            <i className="fa-solid fa-chevron-down"></i>
                        </span>
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
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? activeLinkOption : inactiveLinkOption
                            }
                            to="/laser"
                        >
                            Laser
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? activeLinkOption : inactiveLinkOption
                            }
                            to="/electrotherapy"
                        >
                            Elektroléčba
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? activeLinkOption : inactiveLinkOption
                            }
                            to="/ltv"
                        >
                            Individuální fyzioterapie
                        </NavLink>
                    </div>
                </div>
                <div>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? activeLink : inactiveLink
                        }
                        to="/prices"
                    >
                        Ceník
                    </NavLink>
                </div>
                <div>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? activeLink : inactiveLink
                        }
                        to="/contact"
                    >
                        Kontakty
                    </NavLink>
                </div>
                {/* <div className="nav__btn">
                    <NavLink
                        className="nav__btn-link js-nav__link"
                        to="/appointment"
                    >
                        Rezervovat termín
                    </NavLink>
                </div> */}
            </nav>
            <BurgerBtn />
            <BurgerMenu />
        </header>
    );
};

export default Header;
