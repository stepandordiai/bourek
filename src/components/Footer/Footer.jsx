import { useTranslation } from "react-i18next";
import navLinksData from "./../../data/nav-links-data.json";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import CustomDivider from "../CustomDivider/CustomDivider";
import addressesData from "./../../data/addresses-data.json";
import React from "react";
import logo from "/logo/bourek.png";
import locationIcon from "/icons/location.png";
import phoneIcon from "/icons/telephone.png";
import mailIcon from "/icons/mail.png";
import "./Footer.scss";

const aboutUsLinks = navLinksData.find((link) => link.id === 2)?.nestedLinks;

const services = navLinksData.find((link) => link.id === 3)?.nestedLinks;

const Footer = () => {
	const { t } = useTranslation();

	return (
		<footer className="footer">
			<NavLink className="footer__logo" to="/">
				<img width={40} height={40} src={logo} alt="MUDr. Josef Bourek" />
				<span>MUDr. Josef Bourek</span>
			</NavLink>
			<p className="footer__logo-details">Ordinace rehabilitačního lékaře</p>
			<CustomDivider />
			<div className="footer__nav">
				<div>
					<p>{t("footer.nav_title")}</p>
					<ul>
						{navLinksData
							.filter((link) => !link.nestedLinks)
							.map((link) => {
								return (
									<li key={link.id}>
										<NavLink
											className={({ isActive }) =>
												`footer__link ${isActive ? "footer__link--active" : ""}`
											}
											to={link.path}
										>
											{t(link.name)}
										</NavLink>
									</li>
								);
							})}
						<li>
							<HashLink className="footer__link" to="/#services" smooth>
								{t("services_title")}
							</HashLink>
						</li>
						<li>
							<HashLink className="footer__link" to="/#testimonials" smooth>
								{t("testimonials_title")}
							</HashLink>
						</li>
						<li>
							<HashLink className="footer__link" to="/#faq" smooth>
								{t("faq_title")}
							</HashLink>
						</li>
					</ul>
				</div>
				<div>
					<p>{t("about_us_title")}</p>
					<ul>
						{aboutUsLinks.map((link) => {
							return (
								<li key={link.id}>
									<NavLink
										className={({ isActive }) =>
											`footer__link ${isActive ? "footer__link--active" : ""}`
										}
										to={`/${link.id}`}
									>
										{t(link.name)}
									</NavLink>
								</li>
							);
						})}
					</ul>
				</div>
				<div>
					<p>{t("services_title")}</p>
					<ul>
						{services.map((service) => {
							return (
								<li key={service.id}>
									<NavLink
										className={({ isActive }) =>
											`footer__link ${isActive ? "footer__link--active" : ""}`
										}
										to={`/${service.id}`}
									>
										{t(service.name)}
									</NavLink>
								</li>
							);
						})}
					</ul>
				</div>
				<div>
					<p>{t("contacts_title")}</p>
					{addressesData.map((address, i) => {
						return (
							<React.Fragment key={i}>
								<p style={{ marginTop: 10 }}>{address.place}</p>
								<ul className="footer__contact-list">
									<li>
										<img src={phoneIcon} width={20} height={20} alt="" />
										<a href={`tel:${address.tel.replaceAll(" ", "")}`}>
											{address.tel}
										</a>
									</li>
									<li>
										<img src={mailIcon} width={20} height={20} alt="" />
										<a href={`mailto:${address.email}`}>{address.email}</a>
									</li>
									<li>
										<img src={locationIcon} width={20} height={20} alt="" />
										<a href={address.addressUrl} target="_blank">
											{address.address}
										</a>
									</li>
								</ul>
							</React.Fragment>
						);
					})}
					<p style={{ marginTop: 10 }}>
						{t("footer.about_title")} MUDr. Josef Bourek s.r.o.
					</p>
					<ul>
						<li>
							<NavLink
								className={({ isActive }) =>
									`footer__link ${isActive ? "footer__link--active" : ""}`
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
							<span>&copy; 2025 MUDr. Josef Bourek s.r.o.</span>
							<span> | </span>
							<span>{t("footer.all_rights_reserved")}</span>
						</p>
					</div>
					<p>
						Website created by{" "}
						<a
							className="footer__creator-link"
							href="https://www.heeeyooo.studio/"
							target="_blank"
						>
							heeeyooo studio
						</a>
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
