import { useTranslation } from "react-i18next";
import BurgerBtn from "../BurgerBtn/BurgerBtn";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import LngSelect from "../LngSelect/LngSelect";
import logo from "/logo/bourek.png";
import downArrowIcon from "/icons/down-arrow.png";
import "./Header.scss";

const Header = () => {
	const { t } = useTranslation();

	useEffect(() => {
		document.querySelectorAll(".js-nav__link").forEach((link) => {
			link.addEventListener("click", () => {
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
					.forEach((wrapper) => {
						wrapper.classList.remove("burger-menu__dd-wrapper--active");
					});
				document
					.querySelectorAll(".burger-menu__dd-btn-icon")
					.forEach((btn) => {
						btn.classList.remove("burger-menu__dd-btn-icon--active");
					});
			});
		});
	}, []);

	const inactiveLink = "nav__link js-nav__link";
	const activeLink = "nav__link js-nav__link nav__link--active";

	const inactiveLinkOption = "nav__link-option js-nav__link";
	const activeLinkOption =
		"nav__link-option js-nav__link nav__link-option--active";

	return (
		<header className="header">
			<div className="header-wrapper">
				<NavLink className="header__logo" to="/">
					<img src={logo} width={40} height={40} alt="MUDr. Josef Bourek" />
					<span>MUDr. Josef Bourek</span>
				</NavLink>
				<LngSelect />
				<nav className="header__list">
					<div>
						<NavLink
							className={({ isActive }) =>
								isActive ? activeLink : inactiveLink
							}
							to="/"
						>
							{t("home_title")}
						</NavLink>
					</div>
					<div className="nav__custom-select">
						<div className="nav__custom-select-item">
							<span>{t("about_us_title")}</span>
							<span className="nav__dd-btn-icon">
								<img width={20} height={20} src={downArrowIcon} alt="" />
							</span>
						</div>
						<div className="nav__custom-options">
							<NavLink
								className={({ isActive }) =>
									isActive ? activeLinkOption : inactiveLinkOption
								}
								to="/offer"
							>
								{t("offer_title")}
							</NavLink>
							<NavLink
								className={({ isActive }) =>
									isActive ? activeLinkOption : inactiveLinkOption
								}
								to="/price-list"
							>
								{t("price_list_title")}
							</NavLink>
							<NavLink
								className={({ isActive }) =>
									isActive ? activeLinkOption : inactiveLinkOption
								}
								to="/our-team"
							>
								{t("our_team_title")}
							</NavLink>
							<NavLink
								className={({ isActive }) =>
									isActive ? activeLinkOption : inactiveLinkOption
								}
								to="/clinic-gallery"
							>
								{t("clinic_gallery_title")}
							</NavLink>
						</div>
					</div>
					<div className="nav__custom-select">
						<div className="nav__custom-select-item">
							<span>{t("services_title")}</span>
							<span className="nav__dd-btn-icon">
								<img width={20} height={20} src={downArrowIcon} alt="" />
							</span>
						</div>
						<div className="nav__custom-options">
							<NavLink
								className={({ isActive }) =>
									isActive ? activeLinkOption : inactiveLinkOption
								}
								to="/surgery"
							>
								{t("service_1")}
							</NavLink>
							<NavLink
								className={({ isActive }) =>
									isActive ? activeLinkOption : inactiveLinkOption
								}
								to="/starvac"
							>
								{t("service_2")}
							</NavLink>
							<NavLink
								className={({ isActive }) =>
									isActive ? activeLinkOption : inactiveLinkOption
								}
								to="/cellulite"
							>
								{t("service_3")}
							</NavLink>
							<NavLink
								className={({ isActive }) =>
									isActive ? activeLinkOption : inactiveLinkOption
								}
								to="/lymphatic"
							>
								{t("service_4")}
							</NavLink>
							<NavLink
								className={({ isActive }) =>
									isActive ? activeLinkOption : inactiveLinkOption
								}
								to="/laser"
							>
								{t("service_5")}
							</NavLink>
							<NavLink
								className={({ isActive }) =>
									isActive ? activeLinkOption : inactiveLinkOption
								}
								to="/electrotherapy"
							>
								{t("service_6")}
							</NavLink>
							<NavLink
								className={({ isActive }) =>
									isActive ? activeLinkOption : inactiveLinkOption
								}
								to="/ltv"
							>
								{t("service_7")}
							</NavLink>
						</div>
					</div>
					<div>
						<NavLink
							className={({ isActive }) =>
								isActive ? activeLink : inactiveLink
							}
							to="/contact"
						>
							{t("contacts_title")}
						</NavLink>
					</div>
				</nav>
				<BurgerBtn />
				<BurgerMenu />
			</div>
		</header>
	);
};

export default Header;
