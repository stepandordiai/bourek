import { useTranslation } from "react-i18next";
import { useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import CustomDivider from "../../components/CustomDivider/CustomDivider";
import PageTitle from "../../components/PageTitle/PageTitle";
import Container from "../../components/Container/Container";
import addressesData from "./../../data/addresses-data.json";
import React from "react";
import locationIcon from "/icons/location.png";
import phoneIcon from "/icons/telephone.png";
import mailIcon from "/icons/mail.png";
import addressImg from "/clinic/03-c.jpg";
import "./Contact.scss";

// const services = navLinksData.find((link) => link.id === 3)?.nestedLinks;

// const dateNow = dayjs();
// const hoursNow = dateNow.hour();
// const minutesNow = dateNow.minute();

// const formatedDate = dateNow.format("YYYY-MM-DD");
// const formatedHours = hoursNow < 10 ? "0" + hoursNow : hoursNow;
// const formatedMinutes = minutesNow < 10 ? "0" + minutesNow : minutesNow;

const Contact = () => {
	const { t } = useTranslation();

	const [filterAddressPlace, setFilterAddressPlace] = useState(
		addressesData[0].place
	);
	// const [selectActive, setSelectActive] = useState(false);
	// const [selectedOption, setSelectedOption] = useState("");

	// const customSelect = useRef(null);

	// const handleSelect = (e) => {
	// 	e.preventDefault();
	// 	setSelectActive((prev) => !prev);
	// };

	// const handleSelectOption = (serviceName) => {
	// 	setSelectedOption(serviceName);
	// 	setSelectActive(false);
	// };

	// useEffect(() => {
	// 	const handleClickNotOnSelect = (e) => {
	// 		if (customSelect.current && !customSelect.current.contains(e.target)) {
	// 			setSelectActive(false);
	// 		}
	// 	};

	// 	document.addEventListener("click", handleClickNotOnSelect);

	// 	return () => document.removeEventListener("click", handleClickNotOnSelect);
	// }, []);

	const [isDragging, setIsDragging] = useState(false);
	const wrapperRef = useRef(null);
	const imgRef = useRef(null);

	const handleMouseDown = () => {
		setIsDragging(true);
	};

	const handleMouseUp = () => {
		setIsDragging(false);
	};

	const handleMouseMove = (e) => {
		if (!isDragging) return;
		const rect = wrapperRef.current.getBoundingClientRect();

		const container = imgRef.current;

		// Update container position
		if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
			container.style.left = e.touches[0].clientX - rect.x + "px";
			container.style.top = e.touches[0].clientY - rect.y + "px";
		} else {
			container.style.left = e.clientX - rect.x + "px";
			container.style.top = e.clientY - rect.y + "px";
		}

		container.style.right = "auto";
		container.style.bottom = "auto";
		container.style.transform = "translate(-50%, -50%)";
	};

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
				<Container>
					<div className="contact__wrapper">
						<p style={{ marginBottom: 40 }}>
							Volejte prosím jen v případě technických problémů s užíváním
							platformy Smartmedix.net, kterou využíváme pro objednávání a
							komunikaci s pacienty.
						</p>
						{addressesData.map((address, i) => {
							return (
								<React.Fragment key={i}>
									<div>
										<p className="contact-details__title">{address.place}</p>

										<ul
											className={
												filterAddressPlace === address.place
													? "contact__list contact__list--active"
													: "contact__list"
											}
										>
											<li>
												{/* TODO: LEARN THIS */}
												<a href={`tel:${address.tel.replaceAll(" ", "")}`}>
													<img src={phoneIcon} width={25} height={25} alt="" />
													<span>{address.tel}</span>
												</a>
											</li>
											<li>
												<a href={`mailto:${address.email}`}>
													<img src={mailIcon} width={25} height={25} alt="" />
													<span>{address.email}</span>
												</a>
											</li>
											<li>
												<a href={address.addressUrl} target="_blank">
													<img
														src={locationIcon}
														width={25}
														height={25}
														alt=""
													/>
													<span>{address.address}</span>
												</a>
											</li>
										</ul>
									</div>
									<CustomDivider />
								</React.Fragment>
							);
						})}
						<div className="form-map-wrapper">
							<div className="map-wrapper">
								<div className="map-wrapper__header">
									<h2 className="contact__map-title">
										{t("contacts.map_title")}
									</h2>
									<div className="map-wrapper__header-container">
										{addressesData.map((address, i) => {
											return (
												<button
													key={i}
													onClick={() => setFilterAddressPlace(address.place)}
												>
													{address.place}
												</button>
											);
										})}
										<div
											className={`active-bg ${
												filterAddressPlace === addressesData[1].place
													? "active-bg--active"
													: ""
											}`}
										></div>
									</div>
								</div>
								<div ref={wrapperRef} className="contact__map">
									<div
										ref={imgRef}
										onMouseDown={handleMouseDown}
										onMouseUp={handleMouseUp}
										onMouseLeave={handleMouseUp}
										onMouseMove={(e) => {
											e.preventDefault();
											handleMouseMove(e);
										}}
										onTouchStart={handleMouseDown}
										onTouchMove={handleMouseMove}
										onTouchEnd={handleMouseUp}
										className="contact__map-img-wrapper"
									>
										<img
											className="contact__map-img"
											src={addressImg}
											alt="Bourek map image"
											// TODO: LEARN THIS
											draggable={false}
										/>
									</div>
									<iframe
										className="contact__google-map"
										src={
											addressesData.find(
												(address) => address.place === filterAddressPlace
											).mapUrl
										}
										loading="lazy"
									></iframe>
								</div>
							</div>
							{/* <CustomDivider className="custom-divider--hide" /> */}
							{/* <div className="form-wrapper">
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
						</div> */}
						</div>
					</div>
				</Container>
			</main>
		</>
	);
};

export default Contact;
