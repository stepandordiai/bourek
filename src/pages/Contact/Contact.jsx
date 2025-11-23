import { useTranslation } from "react-i18next";
import { useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import CustomDivider from "../../components/CustomDivider/CustomDivider";
import PageTitle from "../../components/PageTitle/PageTitle";
import Container from "../../components/Container/Container";
import addressesData from "./../../data/addresses-data.json";
import React from "react";
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
											className={`contact__list ${
												filterAddressPlace === address.place
													? "contact__list--active"
													: ""
											}`}
										>
											<li>
												{/* TODO: LEARN THIS */}
												<a href={`tel:${address.tel.replaceAll(" ", "")}`}>
													{/* <img src={phoneIcon} width={25} height={25} alt="" /> */}
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="24"
														height="24"
														fill="currentColor"
														class="bi bi-telephone-fill"
														viewBox="0 0 16 16"
													>
														<path
															fill-rule="evenodd"
															d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
														/>
													</svg>
													<span>{address.tel}</span>
												</a>
											</li>
											<li>
												<a href={`mailto:${address.email}`}>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="24"
														height="24"
														fill="currentColor"
														class="bi bi-envelope-fill"
														viewBox="0 0 16 16"
													>
														<path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
													</svg>
													<span>{address.email}</span>
												</a>
											</li>
											<li>
												<a href={address.addressUrl} target="_blank">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="24"
														height="24"
														fill="currentColor"
														class="bi bi-geo-alt-fill"
														viewBox="0 0 16 16"
													>
														<path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
													</svg>
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
