import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import navLinksData from "./../../data/nav-links-data.json";
import React from "react";
import LngSelect from "../LngSelect/LngSelect";
import addressesData from "./../../data/addresses-data.json";
import logo from "/logo/bourek.png";
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
			if (e.code === "Escape") {
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
					<img
						src={logo}
						width={40}
						height={40}
						alt="MUDr. Josef Bourek logo"
					/>
					<span>MUDr. Josef Bourek</span>
				</NavLink>
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
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="20"
													height="20"
													fill="currentColor"
													className="bi bi-chevron-down"
													viewBox="0 0 16 16"
												>
													<path
														fillRule="evenodd"
														d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
													/>
												</svg>
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
					{/* <NavLink className="header__nav-link" to="/online-appointment">
						{t("appointment_title")}
					</NavLink> */}
					<a className="header__nav-link" href="tel:+420602273579">
						{t("appointment_title")}
					</a>
				</nav>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						columnGap: 20,
					}}
				>
					<LngSelect />
					{/* menu-btn */}
					<button
						onClick={toggleBurgerBtn}
						className="burger__container"
						// TODO: LEARN THIS
						aria-label={
							isMenuOpen ? t("header.closeMenu") : t("header.openMenu")
						}
					>
						<span>menu</span>
						<span
							className={`burger-btn ${isMenuOpen ? "burger-btn--active" : ""}`}
						>
							<span
								className={`burger-btn__center-line ${
									isMenuOpen ? "burger-btn__center-line--active" : ""
								}`}
							></span>
						</span>
					</button>
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
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="40"
														height="40"
														fill="currentColor"
														className="bi bi-chevron-down"
														viewBox="0 0 16 16"
													>
														<path
															fillRule="evenodd"
															d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
														/>
													</svg>
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
							{addressesData.map((address, i) => {
								return (
									<React.Fragment key={i}>
										<p style={{ color: "var(--blue-clr)" }}>{address.place}</p>
										<a href={`tel:${address.tel.replaceAll(" ", "")}`}>
											{address.tel}
										</a>
									</React.Fragment>
								);
							})}
						</div>
						<a
							className="burger-menu__footer-link"
							title="Facebook"
							href="https://www.facebook.com/profile.php?id=61575622597789"
							target="_blank"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								fill="currentColor"
								className="bi bi-facebook"
								viewBox="0 0 16 16"
							>
								<path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
							</svg>
						</a>
					</footer>
				</div>
			</div>
		</header>
	);
};

export default Header;
