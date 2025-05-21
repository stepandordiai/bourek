import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import CustomDivider from "../../components/CustomDivider/CustomDivider";
import PageTitle from "../../components/PageTitle/PageTitle";
import locationIcon from "/icons/location.png";
import phoneIcon from "/icons/telephone.png";
import mailIcon from "/icons/mail.png";
import "./Contact.scss";

const Contact = () => {
	const { t } = useTranslation();

	useEffect(() => {
		// Listener for multiple custom selectors

		document.querySelectorAll(".custom-select").forEach((select) => {
			const selectBtn = select.querySelector(".custom-select__btn");
			const selectList = select.querySelector(".custom-select__list");
			const selectOptions = selectList.querySelectorAll(
				".custom-select__option"
			);
			const selectInput = document.querySelector(".custom-select__input");

			selectBtn.addEventListener("click", (e) => {
				// Prevent from submitting a form

				e.preventDefault();
				selectList.classList.toggle("custom-select__list--visible");
				selectBtn.classList.add("custom-select__btn--active");
			});

			selectOptions.forEach((option) => {
				option.addEventListener("click", (e) => {
					// TODO:

					e.stopPropagation();
					selectBtn.textContent = option.textContent;
					selectBtn.focus();
					selectInput.value = option.dataset.value;
					selectList.classList.remove("custom-select__list--visible");
				});
			});

			document.addEventListener("click", (e) => {
				if (e.target !== selectBtn) {
					selectBtn.classList.remove("custom-select__btn--active");
					selectList.classList.remove("custom-select__list--visible");
				}
			});
		});
	}, []);

	// Kolin
	const addressUrl1 = "https://maps.app.goo.gl/qpbWKMAZ28ndXQRa9";
	const mapOption1 =
		"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2563.3769121247105!2d15.207949529345697!3d50.02303286368041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470c1567f730be5f%3A0xba05366bb1086eb!2sPepa%20Bourek!5e0!3m2!1scs!2scz!4v1738333836740!5m2!1scs!2scz";

	// Cesky Brod
	const addressUrl2 = "https://maps.app.goo.gl/Jew8NoioiT1w8vUE8";
	const mapOption2 =
		"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37503.0678967374!2d14.860131349999993!3d50.07384145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470c0adbf3a61443%3A0xccfd1bd77ac3cf3a!2zxIxlc2vDvSBCcm9kLCAyODIgMDEgxIxlc2vDvSBCcm9k!5e1!3m2!1sen!2scz!4v1744183535629!5m2!1sen!2scz";

	const [filterMapSrc, setFilterMapSrc] = useState("option1");

	const toggleMapSrc = (option) => {
		setFilterMapSrc(option);
	};

	useEffect(() => {
		if (filterMapSrc === "option2") {
			document.querySelector(".active-bg").classList.add("active-bg--active");
		} else {
			document
				.querySelector(".active-bg")
				.classList.remove("active-bg--active");
		}
	}, [filterMapSrc]);

	const dateNow = dayjs();
	const formatedDate = dateNow.format("YYYY-MM-DD");
	const hoursNow = dateNow.hour();
	const formatedHours = hoursNow < 10 ? "0" + hoursNow : hoursNow;
	const minutesNow = dateNow.minute();
	const formatedMinutes = minutesNow < 10 ? "0" + minutesNow : minutesNow;

	return (
		<>
			<Helmet>
				<title>{t("contacts_title")} | MUDr. Josef Bourek</title>
				<link rel="canonical" href="https://bourek.cz/contact" />
			</Helmet>
			<PageTitle title={t("contacts_title")} />
			<div className="contact__wrapper">
				<div>
					<p className="contact-details__title">Kolín</p>
					<ul
						className={
							filterMapSrc === "option1"
								? "contact__list contact__list--active"
								: "contact__list"
						}
					>
						<li>
							<a href="tel:+420602273579">
								<img src={phoneIcon} width={30} alt="Phone" />
								<span>+420 602 273 579</span>
							</a>
						</li>
						<li>
							<a href="mailto:josef@bourek.cz">
								<img src={mailIcon} width={30} alt="E-mail" />
								<span>josef@bourek.cz</span>
							</a>
						</li>
						<li>
							<a href={addressUrl1} target="_blank">
								<img src={locationIcon} width={30} alt="Location" />
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
							filterMapSrc === "option2"
								? "contact__list contact__list--active"
								: "contact__list"
						}
					>
						<li>
							<a href="tel:+420601369198">
								<img src={phoneIcon} width={30} alt="Phone" />
								<span>+420 601 369 198</span>
							</a>
						</li>
						<li>
							<a href="mailto:josef@bourek.cz">
								<img src={mailIcon} width={30} alt="E-mail" />
								<span>josef@bourek.cz</span>
							</a>
						</li>
						<li>
							<a href={addressUrl2} target="_blank">
								<img src={locationIcon} width={30} alt="Location" />
								<span>Český Brod</span>
							</a>
						</li>
					</ul>
				</div>
				<CustomDivider />
				<div className="form-map-wrapper">
					<div className="map-wrapper">
						<div className="map-wrapper__header">
							<h2 className="contact__map-title">{t("contacts.map_title")}</h2>
							<div className="map-wrapper__header-container">
								<button onClick={() => toggleMapSrc("option1")}>Kolín</button>
								<button onClick={() => toggleMapSrc("option2")}>
									Český Brod
								</button>
								<div className="active-bg"></div>
							</div>
						</div>
						<iframe
							className="contact__google-map"
							src={filterMapSrc === "option1" ? mapOption1 : mapOption2}
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
							<div className="custom-select">
								<button className="custom-select__btn">
									{t("contacts.select_btn")}
								</button>
								<ul className="custom-select__list">
									<li
										className="custom-select__option"
										data-value={t("contacts.not_selected")}
									>
										{t("contacts.select_btn")}
									</li>
									<li
										className="custom-select__option"
										data-value={t("service_1")}
									>
										{t("service_1")}
									</li>
									<li
										className="custom-select__option"
										data-value={t("service_2")}
									>
										{t("service_2")}
									</li>
									<li
										className="custom-select__option"
										data-value={t("service_3")}
									>
										{t("service_3")}
									</li>
									<li
										className="custom-select__option"
										data-value={t("service_4")}
									>
										{t("service_4")}
									</li>
									<li
										className="custom-select__option"
										data-value={t("service_5")}
									>
										{t("service_5")}
									</li>
									<li
										className="custom-select__option"
										data-value={t("service_6")}
									>
										{t("service_6")}
									</li>
									<li
										className="custom-select__option"
										data-value={t("service_7")}
									>
										{t("service_7")}
									</li>
								</ul>
								<input
									className="custom-select__input"
									type="text"
									name="Service"
									defaultValue=""
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
		</>
	);
};

export default Contact;
