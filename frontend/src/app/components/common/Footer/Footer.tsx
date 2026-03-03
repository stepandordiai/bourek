"use client";

import { useTranslations } from "next-intl";
import navLinksData from "../../../data/nav-links-data.json";
import Link from "next/link";
import CustomDivider from "../../CustomDivider/CustomDivider";
import addressesData from "../../../data/addresses-data.json";
import React, { useState } from "react";
import EnvelopeIcon from "../../../icons/EnvelopeIcon";
import PinIcon from "../../../icons/PinIcon";
import TelIcon from "../../../icons/TelIcon";
import { usePathname } from "@/i18n/navigation";
import "./Footer.scss";

const aboutUsLinks = navLinksData.find((link) => link.id === 2)?.nestedLinks;

// const services = navLinksData.find((link) => link.id === 3)?.nestedLinks;

const Footer = () => {
	const pathname = usePathname();
	const t = useTranslations();

	const [btnValueCopied, setBtnValueCopied] = useState(false);

	const handleCopy = (value: string) => {
		navigator.clipboard.writeText(value);

		setBtnValueCopied(true);

		setTimeout(() => {
			setBtnValueCopied(false);
		}, 1500);
	};

	return (
		<footer className="footer">
			<Link className="footer__logo" href="/">
				<img
					width={40}
					height={40}
					src="/logo/bourek.png"
					alt="MUDr. Josef Bourek"
				/>
				<span>MUDr. Josef Bourek s.r.o.</span>
			</Link>
			<p className="footer__logo-details">Ordinace rehabilitačních lékařů</p>
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
										<Link
											className={`footer__link ${pathname === link.path ? "footer__link--active" : ""}`}
											href={link.path}
										>
											{t(link.name)}
										</Link>
									</li>
								);
							})}
						<li>
							<Link className="footer__link" href="/#services">
								{t("services_title")}
							</Link>
						</li>
						<li>
							<Link className="footer__link" href="/#testimonials">
								{t("testimonials_title")}
							</Link>
						</li>
					</ul>
				</div>
				<div>
					<p>{t("about_us_title")}</p>
					<ul>
						{aboutUsLinks?.map((link) => {
							return (
								<li key={link.id}>
									<Link
										className={`footer__link ${pathname === `/${link.id}` ? "footer__link--active" : ""}`}
										href={`/${link.id}`}
									>
										{t(link.name)}
									</Link>
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
										<TelIcon size={20} />
										<a href={`tel:${address.tel.replaceAll(" ", "")}`}>
											{address.tel}
										</a>
									</li>
									<li>
										<EnvelopeIcon size={20} />
										<a href={`mailto:${address.email}`}>{address.email}</a>
									</li>
									<li>
										<PinIcon size={20} />
										<a href={address.addressUrl} target="_blank">
											{address.address}
										</a>
									</li>
								</ul>
							</React.Fragment>
						);
					})}
				</div>
				<div>
					<p style={{ marginTop: 10 }}>MUDr. Josef Bourek s.r.o.</p>
					<ul>
						<li>
							<Link
								className={`footer__link ${pathname === "/gdpr" ? "footer__link--active" : ""}`}
								href="/gdpr"
							>
								{t("personal_data_title")}
							</Link>
						</li>
						<li>
							<span style={{ fontWeight: 600 }}>IČO</span>{" "}
							<button
								onClick={() => handleCopy("02478714")}
								style={
									btnValueCopied
										? { cursor: "not-allowed", color: "var(--blue-clr)" }
										: { cursor: "pointer", color: "#000" }
								}
								className="footer__copy-btn"
								disabled={btnValueCopied}
							>
								{btnValueCopied ? "Zkopírováno" : "02478714"}
							</button>
						</li>
					</ul>
				</div>
			</div>
			<CustomDivider />
			<p>
				&copy; {new Date().getFullYear()} MUDr. Josef Bourek s.r.o.{" "}
				{t("footer.all_rights_reserved")}.
			</p>

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
		</footer>
	);
};

export default Footer;
