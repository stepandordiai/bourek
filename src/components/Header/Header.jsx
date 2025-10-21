import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import navLinksData from "./../../data/nav-links-data.json";
import React from "react";
import LngSelect from "../LngSelect/LngSelect";
import facebookIcon from "/icons/facebook.png";
import instagramIcon from "/icons/instagram.png";
import logo from "/logo/bourek.png";
import downArrowIcon from "/icons/down-arrow.png";
import "./Header.scss";

const Header = () => {
	const { t } = useTranslation();

	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const [menuDropdown, setMenuDropdown] = useState(
		new Array(navLinksData.length).fill(false)
	);

	const toggleBurgerBtn = () => {
		setIsMenuOpen((prev) => !prev);
		setMenuDropdown((prev) => prev.map(() => false));
	};

	const toggleMenuDropdown = (index) => {
		setMenuDropdown((prev) => {
			const updated = [...prev];
			updated[index] = !updated[index];
			return updated;
		});
	};

	const closeMenu = () => {
		setIsMenuOpen(false);
		setMenuDropdown((prev) => prev.map(() => false));
	};

	// Close menu on Esc
	useEffect(() => {
		const closeMenuOnEsc = (e) => {
			if (e.key === "Escape") {
				closeMenu();
			}
		};

		document.addEventListener("keydown", closeMenuOnEsc);

		return () => document.removeEventListener("keydown", closeMenuOnEsc);
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
					{navLinksData.map((link) => {
						return (
							<React.Fragment key={link.id}>
								{!link.nestedLinks ? (
									<div>
										<NavLink
											className={({ isActive }) =>
												`nav__link ${isActive ? "nav__link--active" : ""}`
											}
											to={link.path}
										>
											{t(link.name)}
										</NavLink>
									</div>
								) : (
									<div className="nav__custom-select">
										<div className="nav__custom-select-item">
											<span>{t(link.name)}</span>
											<span className="nav__dd-btn-icon">
												<img
													width={20}
													height={20}
													src={downArrowIcon}
													alt=""
												/>
											</span>
										</div>
										<div className="nav__custom-options">
											{link.nestedLinks.map((nestedLink) => {
												return (
													<NavLink
														key={nestedLink.id}
														className={({ isActive }) =>
															`nav__link-option ${
																isActive ? "nav__link-option--active" : ""
															}`
														}
														to={`/${nestedLink.id}`}
													>
														{t(nestedLink.name)}
													</NavLink>
												);
											})}
										</div>
									</div>
								)}
							</React.Fragment>
						);
					})}
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
						{navLinksData.map((link, index) => {
							return (
								<React.Fragment key={link.id}>
									{!link.nestedLinks ? (
										<li>
											<NavLink
												onClick={closeMenu}
												className={({ isActive }) =>
													`burger-menu__nav-link ${
														isActive ? "burger-menu__nav-link--active" : ""
													}`
												}
												to={link.path}
											>
												{t(link.name)}
											</NavLink>
										</li>
									) : (
										<li className="burger-menu__select">
											<div
												onClick={() => toggleMenuDropdown(index)}
												className="burger-menu__select-title"
											>
												<span>{t(link.name)}</span>
												<span
													className={`burger-menu__dd-btn-icon ${
														menuDropdown[index]
															? "burger-menu__dd-btn-icon--active"
															: ""
													}`}
												>
													<img
														width={40}
														height={40}
														src={downArrowIcon}
														alt=""
													/>
												</span>
											</div>
											<div
												className={`burger-menu__dd-wrapper ${
													menuDropdown[index]
														? "burger-menu__dd-wrapper--active"
														: ""
												}`}
											>
												<div className="burger-menu__dd">
													{link.nestedLinks.map((nestedLink) => {
														return (
															<NavLink
																key={nestedLink.id}
																onClick={closeMenu}
																className={({ isActive }) =>
																	`burger-menu__dd-link ${
																		isActive
																			? "burger-menu__dd-link--active"
																			: ""
																	}`
																}
																to={`/${nestedLink.id}`}
															>
																{t(nestedLink.name)}
															</NavLink>
														);
													})}
												</div>
											</div>
										</li>
									)}
								</React.Fragment>
							);
						})}
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
