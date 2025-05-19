import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import downArrowIcon from "/icons/down-arrow.png";
import facebookIcon from "/icons/facebook.png";
import instagramIcon from "/icons/instagram.png";
import "./BurgerMenu.scss";

/* dd is a shorthand for dropdown */
const BurgerMenu = () => {
	const { t } = useTranslation();

	useEffect(() => {
		document
			.querySelectorAll(".js-burger-menu__dd-btn")
			.forEach((btn, index) => {
				btn.addEventListener("click", () => {
					const dropdown = document.querySelectorAll(
						".burger-menu__dd-wrapper"
					);
					const dropdownBtn = document.querySelectorAll(
						".burger-menu__dd-btn-icon"
					);

					dropdown[index].classList.toggle("burger-menu__dd-wrapper--active");

					dropdownBtn[index].classList.toggle(
						"burger-menu__dd-btn-icon--active"
					);
				});
			});
	}, []);

	const inactiveLink = "burger-menu__nav-link js-nav__link";
	const activeLink =
		"burger-menu__nav-link js-nav__link burger-menu__nav-link--active";

	const inactiveLinkOption = "burger-menu__dd-link js-nav__link";
	const activeLinkOption =
		"burger-menu__dd-link js-nav__link burger-menu__dd-link--active";

	return (
		<div className="burger-menu">
			<ul className="burger-menu__nav">
				<li>
					<NavLink
						className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
						to="/"
					>
						{t("home_title")}
					</NavLink>
				</li>
				<li className="burger-menu__select">
					<div className="burger-menu__select-title js-burger-menu__dd-btn">
						<span>{t("about_us_title")}</span>
						<span className="burger-menu__dd-btn-icon">
							<img width={40} src={downArrowIcon} alt="" />
						</span>
					</div>
					<div className="burger-menu__dd-wrapper">
						<div className="burger-menu__dd">
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
				</li>
				<li className="burger-menu__select">
					<div className="burger-menu__select-title js-burger-menu__dd-btn">
						<span>{t("services_title")}</span>
						<span className="burger-menu__dd-btn-icon">
							<img width={40} src={downArrowIcon} alt="" />
						</span>
					</div>
					<div className="burger-menu__dd-wrapper">
						<div className="burger-menu__dd">
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
				</li>
				<li>
					<NavLink
						className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
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
					<a href="tel:+420607841622">+420 601 369 198</a>
				</div>
				<div className="burger-menu__footer-link-container">
					<a
						className="burger-menu__footer-link"
						title="Instagram"
						href="https://www.facebook.com/profile.php?id=61575622597789&mibextid=wwXIfr&rdid=Fudc2wWAiGqfWI1d&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AWJjQUX1G%2F%3Fmibextid%3DwwXIfr#"
						target="_blank"
					>
						<img src={instagramIcon} alt="Phone" />
					</a>
					<a
						className="burger-menu__footer-link"
						title="Facebook"
						href="https://www.facebook.com/profile.php?id=61575622597789&mibextid=wwXIfr&rdid=Fudc2wWAiGqfWI1d&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AWJjQUX1G%2F%3Fmibextid%3DwwXIfr#"
						target="_blank"
					>
						<img src={facebookIcon} alt="Phone" />
					</a>
				</div>
			</footer>
		</div>
	);
};

export default BurgerMenu;
