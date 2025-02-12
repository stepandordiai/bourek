import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import "./BurgerMenu.scss";

const BurgerMenu = () => {
    const inactiveLink = "burger-menu__nav-link js-nav__link";
    const activeLink =
        "burger-menu__nav-link js-nav__link burger-menu__nav-link--active";

    const inactiveLinkOption = "burger-menu__dd-link js-nav__link";
    const activeLinkOption =
        "burger-menu__dd-link js-nav__link burger-menu__dd-link--active";

    useEffect(() => {
        document
            .querySelectorAll(".js-burger-menu__dd-btn")
            .forEach((btn, index) => {
                btn.addEventListener("click", () => {
                    const dropdown = document.querySelectorAll(
                        ".burger-menu__dd-wrapper"
                    );
                    const dropdownBtn = document.querySelectorAll(
                        ".burger-menu__dd-btn"
                    );

                    dropdown[index].classList.toggle(
                        "burger-menu__dd-wrapper--active"
                    );

                    dropdownBtn[index].classList.toggle(
                        "burger-menu__dd-btn--active"
                    );
                });
            });
    }, []);

    return (
        <div className="burger-menu">
            <ul className="burger-menu__nav">
                <li>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? activeLink : inactiveLink
                        }
                        to="/"
                    >
                        Úvod
                    </NavLink>
                </li>
                <li className="burger-menu__select">
                    <div className="burger-menu__select-title js-burger-menu__dd-btn">
                        <span>O nás</span>
                        {/* TODO: dd is a shorthand for dropdown */}
                        <span className="burger-menu__dd-btn ">
                            <i className="fa-solid fa-chevron-down"></i>
                        </span>
                    </div>
                    <div className="burger-menu__dd-wrapper">
                        <div className="burger-menu__dd">
                            <NavLink
                                className={({ isActive }) =>
                                    isActive
                                        ? activeLinkOption
                                        : inactiveLinkOption
                                }
                                to="/offer"
                            >
                                What we offer
                            </NavLink>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive
                                        ? activeLinkOption
                                        : inactiveLinkOption
                                }
                                to="/our-team"
                            >
                                Our team
                            </NavLink>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive
                                        ? activeLinkOption
                                        : inactiveLinkOption
                                }
                                to="/clinic-gallery"
                            >
                                Clinic gallery
                            </NavLink>
                        </div>
                    </div>
                </li>
                <li className="burger-menu__select">
                    <div className="burger-menu__select-title js-burger-menu__dd-btn">
                        <span>Služby</span>
                        {/* TODO: dd is a shorthand for dropdown */}
                        <span className="burger-menu__dd-btn ">
                            <i className="fa-solid fa-chevron-down"></i>
                        </span>
                    </div>
                    <div className="burger-menu__dd-wrapper">
                        <div className="burger-menu__dd">
                            <NavLink
                                className={({ isActive }) =>
                                    isActive
                                        ? activeLinkOption
                                        : inactiveLinkOption
                                }
                                to="/surgery"
                            >
                                Ordinace
                            </NavLink>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive
                                        ? activeLinkOption
                                        : inactiveLinkOption
                                }
                                to="/starvac"
                            >
                                Starvac
                            </NavLink>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive
                                        ? activeLinkOption
                                        : inactiveLinkOption
                                }
                                to="/cellulite"
                            >
                                Celulitida
                            </NavLink>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive
                                        ? activeLinkOption
                                        : inactiveLinkOption
                                }
                                to="/lymphatic"
                            >
                                Lymfodrenáž
                            </NavLink>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive
                                        ? activeLinkOption
                                        : inactiveLinkOption
                                }
                                to="/laser"
                            >
                                Laser
                            </NavLink>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive
                                        ? activeLinkOption
                                        : inactiveLinkOption
                                }
                                to="/electrotherapy"
                            >
                                Elektroléčba
                            </NavLink>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive
                                        ? activeLinkOption
                                        : inactiveLinkOption
                                }
                                to="/ltv"
                            >
                                Individuální fyzioterapie
                            </NavLink>
                        </div>
                    </div>
                </li>
                <li>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? activeLink : inactiveLink
                        }
                        to="/prices"
                    >
                        Ceník
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? activeLink : inactiveLink
                        }
                        to="/contact"
                    >
                        Kontakty
                    </NavLink>
                </li>
            </ul>
            <div className="burger-menu__contact">
                <a href="tel:+420602273579">+420 602 273 579</a>
                <a href="tel:+420607841622">+420 607 841 622</a>
            </div>
        </div>
    );
};

export default BurgerMenu;
