import navLinksData from "./../../data/nav-links-data.json";
import dayjs from "dayjs";
import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import CustomDivider from "../../components/CustomDivider/CustomDivider";
import PageTitle from "../../components/PageTitle/PageTitle";
import locationIcon from "/icons/location.png";
import phoneIcon from "/icons/telephone.png";
import mailIcon from "/icons/mail.png";
import "./Contact.scss";

// Kolin
const addressUrl1 = "https://maps.app.goo.gl/qpbWKMAZ28ndXQRa9";
const mapOption1 =
	"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2563.3769121247105!2d15.207949529345697!3d50.02303286368041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470c1567f730be5f%3A0xba05366bb1086eb!2sPepa%20Bourek!5e0!3m2!1scs!2scz!4v1738333836740!5m2!1scs!2scz";

// Cesky Brod
const addressUrl2 = "https://maps.app.goo.gl/Jew8NoioiT1w8vUE8";
const mapOption2 =
	"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37503.0678967374!2d14.860131349999993!3d50.07384145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470c0adbf3a61443%3A0xccfd1bd77ac3cf3a!2zxIxlc2vDvSBCcm9kLCAyODIgMDEgxIxlc2vDvSBCcm9k!5e1!3m2!1sen!2scz!4v1744183535629!5m2!1sen!2scz";

const services = navLinksData.find((link) => link.id === 3)?.nestedLinks;

const dateNow = dayjs();
const hoursNow = dateNow.hour();
const minutesNow = dateNow.minute();

const formatedDate = dateNow.format("YYYY-MM-DD");
const formatedHours = hoursNow < 10 ? "0" + hoursNow : hoursNow;
const formatedMinutes = minutesNow < 10 ? "0" + minutesNow : minutesNow;

const Contact = () => {
	const { t } = useTranslation();

	const [filterMapSrc, setFilterMapSrc] = useState(1);
	const [selectActive, setSelectActive] = useState(false);
	const [selectedOption, setSelectedOption] = useState("");

	const customSelect = useRef(null);

	const handleSelect = (e) => {
		e.preventDefault();
		setSelectActive((prev) => !prev);
	};

	const handleSelectOption = (serviceName) => {
		setSelectedOption(serviceName);
		setSelectActive(false);
	};

	useEffect(() => {
		const handleClickNotOnSelect = (e) => {
			if (customSelect.current && !customSelect.current.contains(e.target)) {
				setSelectActive(false);
			}
		};

		document.addEventListener("click", handleClickNotOnSelect);

		return () => document.removeEventListener("click", handleClickNotOnSelect);
	}, []);

	return (
		<>
			<Helmet>
				<meta
					name="description"
					content="Kontaktujte ordinaci MUDr. Josef Bourek v Kolíně nebo Českém Brodě. Objednejte se na rehabilitaci, fyzioterapii či další služby online nebo telefonicky."
				/>
				<title>{t("contacts_title")} | Bourek</title>
				<link rel="canonical" href="https://www.bourek.cz/contact" />
			</Helmet>
			<main>
				<PageTitle title={t("contacts_title")} />
				<div className="contact__wrapper">
					<div>
						<p className="contact-details__title">Kolín</p>
						<ul
							className={
								filterMapSrc === 1
									? "contact__list contact__list--active"
									: "contact__list"
							}
						>
							<li>
								<a href="tel:+420602273579">
									<img src={phoneIcon} width={25} height={25} alt="" />
									<span>+420 602 273 579</span>
								</a>
							</li>
							<li>
								<a href="mailto:josef@bourek.cz">
									<img src={mailIcon} width={25} height={25} alt="" />
									<span>josef@bourek.cz</span>
								</a>
							</li>
							<li>
								<a href={addressUrl1} target="_blank">
									<img src={locationIcon} width={25} height={25} alt="" />
									<span>Pod Hroby 271 Kolín IV</span>
								</a>
							</li>
						</ul>
					</div>
					<CustomDivider />
					<div>
						<p className="contact-details__title">Český Brod</p>
						<ul
							className={
								filterMapSrc === 2
									? "contact__list contact__list--active"
									: "contact__list"
							}
						>
							<li>
								<a href="tel:+420601369198">
									<img src={phoneIcon} width={25} height={25} alt="" />
									<span>+420 601 369 198</span>
								</a>
							</li>
							<li>
								<a href="mailto:josef@bourek.cz">
									<img src={mailIcon} width={25} height={25} alt="" />
									<span>josef@bourek.cz</span>
								</a>
							</li>
							<li>
								<a href={addressUrl2} target="_blank">
									<img src={locationIcon} width={25} height={25} alt="" />
									<span>Český Brod</span>
								</a>
							</li>
						</ul>
					</div>
					<CustomDivider />
					<div className="form-map-wrapper">
						<div className="map-wrapper">
							<div className="map-wrapper__header">
								<h2 className="contact__map-title">
									{t("contacts.map_title")}
								</h2>
								<div className="map-wrapper__header-container">
									<button onClick={() => setFilterMapSrc(1)}>Kolín</button>
									<button onClick={() => setFilterMapSrc(2)}>Český Brod</button>
									<div
										className={`active-bg ${
											filterMapSrc === 2 ? "active-bg--active" : ""
										}`}
									></div>
								</div>
							</div>
							<iframe
								className="contact__google-map"
								src={filterMapSrc === 1 ? mapOption1 : mapOption2}
								loading="lazy"
							></iframe>
						</div>
						<CustomDivider className=" custom-divider--hide" />
						<div className="form-wrapper">
							<h2 className="contact__form-title">{t("appointment_title")}</h2>
							<form
								className="contact__form"
								action="https://formsubmit.co/josef@bourek.cz"
								method="post"
							>
								<div className="contact-form__inputs">
									<input
										className="first-name"
										type="text"
										name="firstName"
										autoComplete="given-name"
										placeholder={t("contacts.first_name")}
										required
									/>
									<input
										className="last-name"
										type="text"
										name="lastName"
										autoComplete="family-name"
										placeholder={t("contacts.last_name")}
									/>
								</div>
								<div className="contact-form__inputs">
									<input
										className="email"
										type="email"
										name="email"
										autoComplete="email"
										placeholder={t("contacts.email")}
									/>
									<input
										className="phone"
										type="tel"
										name="tel"
										autoComplete="tel"
										placeholder={t("contacts.phone")}
										required
									/>
								</div>
								<div ref={customSelect} className="custom-select">
									<button
										onClick={handleSelect}
										className={`custom-select__btn ${
											selectActive ? "custom-select__btn--active" : ""
										}`}
									>
										{selectedOption === ""
											? t("contacts.select_btn")
											: t(selectedOption)}
									</button>
									<ul
										className={`custom-select__list ${
											selectActive ? "custom-select__list--visible" : ""
										}`}
									>
										<li
											onClick={() => handleSelectOption("")}
											className={`custom-select__option ${
												selectedOption === ""
													? "custom-select__option--active"
													: ""
											}`}
											data-value={t("contacts.not_selected")}
										>
											{t("contacts.select_btn")}
										</li>
										{services.map((service) => {
											return (
												<li
													onClick={() => handleSelectOption(service.name)}
													key={service.id}
													className={`custom-select__option ${
														selectedOption === service.name
															? "custom-select__option--active"
															: ""
													}`}
												>
													{t(service.name)}
												</li>
											);
										})}
									</ul>
									<input
										className="custom-select__input"
										type="text"
										name="Service"
										defaultValue={t(selectedOption)}
									/>
								</div>
								<div className="date-container">
									<label htmlFor="date">{t("contacts.visit_date")}</label>
									<input
										id="date"
										className="date"
										defaultValue={formatedDate}
										type="date"
										name="Date"
									/>
								</div>
								<div className="time-container">
									<label htmlFor="time">{t("contacts.visit_time")}</label>
									<input
										id="time"
										className="time"
										defaultValue={`${formatedHours}:${formatedMinutes}`}
										type="time"
										name="Time"
									/>
								</div>
								<button className="submit-btn" type="submit">
									{t("contacts.form_btn")}
								</button>
							</form>
						</div>
					</div>
				</div>
			</main>
		</>
	);
};

export default Contact;
