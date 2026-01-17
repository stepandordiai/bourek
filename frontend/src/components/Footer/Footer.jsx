import { useTranslation } from "react-i18next";
import navLinksData from "./../../data/nav-links-data.json";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import CustomDivider from "../CustomDivider/CustomDivider";
import addressesData from "./../../data/addresses-data.json";
import React from "react";
import logo from "/logo/bourek.png";
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
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="20"
											height="20"
											fill="currentColor"
											className="bi bi-telephone-fill"
											viewBox="0 0 16 16"
										>
											<path
												fillRule="evenodd"
												d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
											/>
										</svg>
										<a href={`tel:${address.tel.replaceAll(" ", "")}`}>
											{address.tel}
										</a>
									</li>
									<li>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="20"
											height="20"
											fill="currentColor"
											className="bi bi-envelope-fill"
											viewBox="0 0 16 16"
										>
											<path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
										</svg>
										<a href={`mailto:${address.email}`}>{address.email}</a>
									</li>
									<li>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="20"
											height="20"
											fill="currentColor"
											className="bi bi-geo-alt-fill"
											viewBox="0 0 16 16"
										>
											<path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
										</svg>
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
								to="/osobni-udaje"
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
							<span>
								&copy; 2025&ndash;{new Date().getFullYear()} MUDr. Josef Bourek
								s.r.o.
							</span>
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
