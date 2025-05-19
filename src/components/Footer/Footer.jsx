import { useTranslation } from "react-i18next";
import CustomDivider from "../CustomDivider/CustomDivider";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "/logo/bourek.png";
import locationIcon from "/icons/location.png";
import phoneIcon from "/icons/telephone.png";
import mailIcon from "/icons/mail.png";
import "./Footer.scss";

const Footer = () => {
	const { t } = useTranslation();

	const inactiveFooterLink = "footer__link";
	const activeFooterLink = "footer__link footer__link--active";

	// Kolin
	const addressUrl1 = "https://maps.app.goo.gl/qpbWKMAZ28ndXQRa9";

	// Cesky Brod
	const addressUrl2 = "https://maps.app.goo.gl/Jew8NoioiT1w8vUE8";

	return (
		<footer className="footer">
			<NavLink className="footer__logo" to="/">
				<img src={logo} alt="Logo" />
				<span>MUDr. Josef Bourek</span>
			</NavLink>
			<p className="footer__logo-details">Ordinace rehabilitačního lékaře</p>
			<CustomDivider />
			<div className="footer__nav">
				<div>
					<p>{t("footer.nav_title")}</p>
					<ul>
						<li>
							<NavLink
								className={({ isActive }) =>
									isActive ? activeFooterLink : inactiveFooterLink
								}
								to="/"
							>
								{t("home_title")}
							</NavLink>
						</li>
						<li>
							<NavLink
								className={({ isActive }) =>
									isActive ? activeFooterLink : inactiveFooterLink
								}
								to="/contact"
							>
								{t("contacts_title")}
							</NavLink>
						</li>
						<li>
							<HashLink className={"footer__link"} to="/#services">
								{t("services_title")}
							</HashLink>
						</li>
						<li>
							<HashLink className={"footer__link"} to="/#testimonials">
								{t("testimonials_title")}
							</HashLink>
						</li>
						<li>
							<HashLink className={"footer__link"} to="/#faq">
								{t("faq_title")}
							</HashLink>
						</li>
					</ul>
				</div>
				<div>
					<p>{t("about_us_title")}</p>
					<ul>
						<li>
							<NavLink
								className={({ isActive }) =>
									isActive ? activeFooterLink : inactiveFooterLink
								}
								to="/offer"
							>
								{t("offer_title")}
							</NavLink>
						</li>
						<li>
							<NavLink
								className={({ isActive }) =>
									isActive ? activeFooterLink : inactiveFooterLink
								}
								to="/price-list"
							>
								{t("price_list_title")}
							</NavLink>
						</li>
						<li>
							<NavLink
								className={({ isActive }) =>
									isActive ? activeFooterLink : inactiveFooterLink
								}
								to="/our-team"
							>
								{t("our_team_title")}
							</NavLink>
						</li>
						<li>
							<NavLink
								className={({ isActive }) =>
									isActive ? activeFooterLink : inactiveFooterLink
								}
								to="/clinic-gallery"
							>
								{t("clinic_gallery_title")}
							</NavLink>
						</li>
					</ul>
				</div>
				<div>
					<p>{t("services_title")}</p>
					<ul>
						<li>
							<NavLink
								className={({ isActive }) =>
									isActive ? activeFooterLink : inactiveFooterLink
								}
								to="/surgery"
							>
								{t("service_1")}
							</NavLink>
						</li>
						<li>
							<NavLink
								className={({ isActive }) =>
									isActive ? activeFooterLink : inactiveFooterLink
								}
								to="/starvac"
							>
								{t("service_2")}
							</NavLink>
						</li>
						<li>
							<NavLink
								className={({ isActive }) =>
									isActive ? activeFooterLink : inactiveFooterLink
								}
								to="/cellulite"
							>
								{t("service_3")}
							</NavLink>
						</li>
						<li>
							<NavLink
								className={({ isActive }) =>
									isActive ? activeFooterLink : inactiveFooterLink
								}
								to="/lymphatic"
							>
								{t("service_4")}
							</NavLink>
						</li>
						<li>
							<NavLink
								className={({ isActive }) =>
									isActive ? activeFooterLink : inactiveFooterLink
								}
								to="/laser"
							>
								{t("service_5")}
							</NavLink>
						</li>
						<li>
							<NavLink
								className={({ isActive }) =>
									isActive ? activeFooterLink : inactiveFooterLink
								}
								to="/electrotherapy"
							>
								{t("service_6")}
							</NavLink>
						</li>
						<li>
							<NavLink
								className={({ isActive }) =>
									isActive ? activeFooterLink : inactiveFooterLink
								}
								to="/ltv"
							>
								{t("service_7")}
							</NavLink>
						</li>
					</ul>
				</div>
				<div>
					<p>{t("contacts_title")}</p>
					<p style={{ marginTop: 10 }}>Kolín</p>
					<ul className="footer__contact-list">
						<li>
							<img src={phoneIcon} width={20} alt="Phone" />
							<a href="tel:+420602273579">+420 602 273 579</a>
						</li>
						<li>
							<img src={mailIcon} width={20} alt="E-mail" />
							<a href="mailto:josef@bourek.cz">josef@bourek.cz</a>
						</li>
						<li>
							<img src={locationIcon} width={20} alt="Location" />
							<a href={addressUrl1}>Pod Hroby 271 Kolín IV</a>
						</li>
					</ul>
					<p style={{ marginTop: 10 }}>Český Brod</p>
					<ul className="footer__contact-list">
						<li>
							<img src={phoneIcon} width={20} alt="Phone" />
							<a href="tel:+420601369198">+420 601 369 198</a>
						</li>
						<li>
							<img src={mailIcon} width={20} alt="E-mail" />
							<a href="mailto:josef@bourek.cz">josef@bourek.cz</a>
						</li>
						<li>
							<img src={locationIcon} width={20} alt="Location" />
							<a href={addressUrl2}>Český Brod</a>
						</li>
					</ul>
					<p style={{ marginTop: 10 }}>
						{t("footer.about_title")} MUDr. Josef Bourek s.r.o.
					</p>
					<ul>
						<li>
							<NavLink
								className={({ isActive }) =>
									isActive ? activeFooterLink : inactiveFooterLink
								}
								to="/personal-data"
							>
								{t("personal_data_title")}
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
			<CustomDivider />
			<div className="footer__footer">
				<div>
					<div>
						<p className="copyright">
							<span>&copy; 2025 MUDr. Josef Bourek</span>
							<span> | </span>
							<span>{t("footer.copyright")}</span>
						</p>
					</div>
					<p>
						Site by{" "}
						<a
							className="footer__creator-link"
							href="https://heeeyooo.studio/"
							target="_blank"
						>
							heeeyooo studio
						</a>
					</p>
				</div>
				{/* <div>
					<p>Related sites</p>
					<div className="related-sites-container">
						<a href="https://prozubik.cz/" target="_blank">
							www.prozubik.cz
						</a>
						<a href="https://neresen.cz/" target="_blank">
							www.neresen.cz
						</a>
						<a href="https://fvestavby.cz/" target="_blank">
							www.fvestavby.cz
						</a>
					</div>
				</div> */}
			</div>
		</footer>
	);
};

export default Footer;
