import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import LngSelect from "../LngSelect/LngSelect";
import facebookIcon from "/icons/facebook.png";
import instagramIcon from "/icons/instagram.png";
import logo from "/logo/bourek.png";
import downArrowIcon from "/icons/down-arrow.png";
import "./Header.scss";

const Header = () => {
	const { t } = useTranslation();

	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [firstMenuDropdown, setFirstMenuDropdown] = useState(false);
	const [secondMenuDropdown, setSecondMenuDropdown] = useState(false);

	const toggleBurgerBtn = () => {
		setIsMenuOpen((prev) => !prev);
		setFirstMenuDropdown((prev) => (prev ? false : prev));
		setSecondMenuDropdown((prev) => (prev ? false : prev));
	};

	const toggleFirstMenuDropdown = () => {
		setFirstMenuDropdown((prev) => !prev);
	};

	const toggleSecondMenuDropdown = () => {
		setSecondMenuDropdown((prev) => !prev);
	};

	const closeMenu = () => {
		setIsMenuOpen(false);
		setFirstMenuDropdown((prev) => (prev ? false : prev));
		setSecondMenuDropdown((prev) => (prev ? false : prev));
	};

	// Close menu on Esc
	useEffect(() => {
		const closeMenuOnEsc = (e) => {
			if (e.key === "Escape") {
				closeMenu();
			}
		};

		document.addEventListener("keydown", closeMenuOnEsc);

		return () => document.removeEventListener("keydown", closeMenu);
	}, []);

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
								`nav__link ${isActive ? "nav__link--active" : ""}`
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
									`nav__link-option ${
										isActive ? "nav__link-option--active" : ""
									}`
								}
								to="/offer"
							>
								{t("offer_title")}
							</NavLink>
							<NavLink
								className={({ isActive }) =>
									`nav__link-option ${
										isActive ? "nav__link-option--active" : ""
									}`
								}
								to="/price-list"
							>
								{t("price_list_title")}
							</NavLink>
							<NavLink
								className={({ isActive }) =>
									`nav__link-option ${
										isActive ? "nav__link-option--active" : ""
									}`
								}
								to="/our-team"
							>
								{t("our_team_title")}
							</NavLink>
							<NavLink
								className={({ isActive }) =>
									`nav__link-option ${
										isActive ? "nav__link-option--active" : ""
									}`
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
									`nav__link-option ${
										isActive ? "nav__link-option--active" : ""
									}`
								}
								to="/surgery"
							>
								{t("service_1")}
							</NavLink>
							<NavLink
								className={({ isActive }) =>
									`nav__link-option ${
										isActive ? "nav__link-option--active" : ""
									}`
								}
								to="/starvac"
							>
								{t("service_2")}
							</NavLink>
							<NavLink
								className={({ isActive }) =>
									`nav__link-option ${
										isActive ? "nav__link-option--active" : ""
									}`
								}
								to="/cellulite"
							>
								{t("service_3")}
							</NavLink>
							<NavLink
								className={({ isActive }) =>
									`nav__link-option ${
										isActive ? "nav__link-option--active" : ""
									}`
								}
								to="/lymphatic"
							>
								{t("service_4")}
							</NavLink>
							<NavLink
								className={({ isActive }) =>
									`nav__link-option ${
										isActive ? "nav__link-option--active" : ""
									}`
								}
								to="/laser"
							>
								{t("service_5")}
							</NavLink>
							<NavLink
								className={({ isActive }) =>
									`nav__link-option ${
										isActive ? "nav__link-option--active" : ""
									}`
								}
								to="/electrotherapy"
							>
								{t("service_6")}
							</NavLink>
							<NavLink
								className={({ isActive }) =>
									`nav__link-option ${
										isActive ? "nav__link-option--active" : ""
									}`
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
								`nav__link ${isActive ? "nav__link--active" : ""}`
							}
							to="/contact"
						>
							{t("contacts_title")}
						</NavLink>
					</div>
				</nav>
				{/* burger-btn */}
				<div onClick={toggleBurgerBtn} className="burger__container">
					<p>menu</p>
					<div
						className={`burger-btn ${isMenuOpen ? "burger-btn--active" : ""}`}
					>
						<span
							className={`burger-btn__center-line ${
								isMenuOpen ? "burger-btn__center-line--active" : ""
							}`}
						></span>
					</div>
				</div>
				{/* menu */}
				<div
					className={`burger-menu ${isMenuOpen ? "burger-menu--active" : ""}`}
				>
					<ul className="burger-menu__nav">
						<li>
							<NavLink
								onClick={closeMenu}
								className={({ isActive }) =>
									`burger-menu__nav-link ${
										isActive ? "burger-menu__nav-link--active" : ""
									}`
								}
								to="/"
							>
								{t("home_title")}
							</NavLink>
						</li>
						<li className="burger-menu__select">
							<div
								onClick={toggleFirstMenuDropdown}
								className="burger-menu__select-title"
							>
								<span>{t("about_us_title")}</span>
								<span
									className={`burger-menu__dd-btn-icon ${
										firstMenuDropdown ? "burger-menu__dd-btn-icon--active" : ""
									}`}
								>
									<img width={40} height={40} src={downArrowIcon} alt="" />
								</span>
							</div>
							<div
								className={`burger-menu__dd-wrapper ${
									firstMenuDropdown ? "burger-menu__dd-wrapper--active" : ""
								}`}
							>
								<div className="burger-menu__dd">
									<NavLink
										onClick={closeMenu}
										className={({ isActive }) =>
											`burger-menu__dd-link ${
												isActive ? "burger-menu__dd-link--active" : ""
											}`
										}
										to="/offer"
									>
										{t("offer_title")}
									</NavLink>
									<NavLink
										onClick={closeMenu}
										className={({ isActive }) =>
											`burger-menu__dd-link ${
												isActive ? "burger-menu__dd-link--active" : ""
											}`
										}
										to="/price-list"
									>
										{t("price_list_title")}
									</NavLink>
									<NavLink
										onClick={closeMenu}
										className={({ isActive }) =>
											`burger-menu__dd-link ${
												isActive ? "burger-menu__dd-link--active" : ""
											}`
										}
										to="/our-team"
									>
										{t("our_team_title")}
									</NavLink>
									<NavLink
										onClick={closeMenu}
										className={({ isActive }) =>
											`burger-menu__dd-link ${
												isActive ? "burger-menu__dd-link--active" : ""
											}`
										}
										to="/clinic-gallery"
									>
										{t("clinic_gallery_title")}
									</NavLink>
								</div>
							</div>
						</li>
						<li className="burger-menu__select">
							<div
								onClick={toggleSecondMenuDropdown}
								className="burger-menu__select-title"
							>
								<span>{t("services_title")}</span>
								<span
									className={`burger-menu__dd-btn-icon ${
										secondMenuDropdown ? "burger-menu__dd-btn-icon--active" : ""
									}`}
								>
									<img width={40} height={40} src={downArrowIcon} alt="" />
								</span>
							</div>
							<div
								className={`burger-menu__dd-wrapper ${
									secondMenuDropdown ? "burger-menu__dd-wrapper--active" : ""
								}`}
							>
								<div className="burger-menu__dd">
									<NavLink
										onClick={closeMenu}
										className={({ isActive }) =>
											`burger-menu__dd-link ${
												isActive ? "burger-menu__dd-link--active" : ""
											}`
										}
										to="/surgery"
									>
										{t("service_1")}
									</NavLink>
									<NavLink
										onClick={closeMenu}
										className={({ isActive }) =>
											`burger-menu__dd-link ${
												isActive ? "burger-menu__dd-link--active" : ""
											}`
										}
										to="/starvac"
									>
										{t("service_2")}
									</NavLink>
									<NavLink
										onClick={closeMenu}
										className={({ isActive }) =>
											`burger-menu__dd-link ${
												isActive ? "burger-menu__dd-link--active" : ""
											}`
										}
										to="/cellulite"
									>
										{t("service_3")}
									</NavLink>
									<NavLink
										onClick={closeMenu}
										className={({ isActive }) =>
											`burger-menu__dd-link ${
												isActive ? "burger-menu__dd-link--active" : ""
											}`
										}
										to="/lymphatic"
									>
										{t("service_4")}
									</NavLink>
									<NavLink
										onClick={closeMenu}
										className={({ isActive }) =>
											`burger-menu__dd-link ${
												isActive ? "burger-menu__dd-link--active" : ""
											}`
										}
										to="/laser"
									>
										{t("service_5")}
									</NavLink>
									<NavLink
										onClick={closeMenu}
										className={({ isActive }) =>
											`burger-menu__dd-link ${
												isActive ? "burger-menu__dd-link--active" : ""
											}`
										}
										to="/electrotherapy"
									>
										{t("service_6")}
									</NavLink>
									<NavLink
										onClick={closeMenu}
										className={({ isActive }) =>
											`burger-menu__dd-link ${
												isActive ? "burger-menu__dd-link--active" : ""
											}`
										}
										to="/ltv"
									>
										{t("service_7")}
									</NavLink>
								</div>
							</div>
						</li>
						<li>
							<NavLink
								onClick={closeMenu}
								className={({ isActive }) =>
									`burger-menu__nav-link ${
										isActive ? "burger-menu__nav-link--active" : ""
									}`
								}
								to="/contact"
							>
								{t("contacts_title")}
							</NavLink>
						</li>
					</ul>
					<footer className="burger-menu__footer">
						<div className="burger-menu__contact">
							<p style={{ color: "var(--blue-clr)" }}>Kolín</p>
							<a href="tel:+420602273579">+420 602 273 579</a>
							<p style={{ color: "var(--blue-clr)" }}>Český Brod</p>
							<a href="tel:+420601369198">+420 601 369 198</a>
						</div>
						<div className="burger-menu__footer-link-container">
							<a
								className="burger-menu__footer-link"
								title="Instagram"
								href="https://www.facebook.com/profile.php?id=61575622597789"
								target="_blank"
							>
								<img width={20} height={20} src={instagramIcon} alt="" />
							</a>
							<a
								className="burger-menu__footer-link"
								title="Facebook"
								href="https://www.facebook.com/profile.php?id=61575622597789"
								target="_blank"
							>
								<img width={20} height={20} src={facebookIcon} alt="" />
							</a>
						</div>
					</footer>
				</div>
			</div>
		</header>
	);
};

export default Header;
