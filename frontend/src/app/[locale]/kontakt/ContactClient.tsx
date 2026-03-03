"use client";

import { useRef, useState } from "react";
import addressesData from "../../data/addresses-data.json";
import { useTranslations } from "next-intl";

import "./Contact.scss";

export default function ContactClient() {
	const t = useTranslations();

	const [filterAddressPlace, setFilterAddressPlace] = useState(
		addressesData[0].place,
	);

	const [isDragging, setIsDragging] = useState(false);
	const wrapperRef = useRef<HTMLDivElement>(null);
	const imgRef = useRef<HTMLDivElement>(null);

	const handleMouseDown = () => {
		setIsDragging(true);
	};

	const handleMouseUp = () => {
		setIsDragging(false);
	};

	// TODO: learn this
	const handleMouseMove = (
		e: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>,
	) => {
		if (!isDragging) return;
		const rect = wrapperRef.current?.getBoundingClientRect();

		const container = imgRef.current;

		if (!container || !rect) return;

		// Update container position
		if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
			// TODO: learn this
			const touchEvent = e as React.TouchEvent<HTMLDivElement>;
			container.style.left = touchEvent.touches[0].clientX - rect.x + "px";
			container.style.top = touchEvent.touches[0].clientY - rect.y + "px";
		} else {
			// TODO: learn this
			const mouseEvent = e as React.MouseEvent<HTMLDivElement>;
			container.style.left = mouseEvent.clientX - rect.x + "px";
			container.style.top = mouseEvent.clientY - rect.y + "px";
		}

		container.style.right = "auto";
		container.style.bottom = "auto";
		container.style.transform = "translate(-50%, -50%)";
	};
	return (
		<div className="form-map-wrapper">
			<div className="map-wrapper">
				<div className="map-wrapper__header">
					<h2 className="contact__map-title">{t("contacts.map_title")}</h2>
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
							src="/clinic/03-c.jpg"
							alt="MUDr. Josef Bourek s.r.o. map image"
							// TODO: learn this
							draggable={false}
						/>
					</div>
					<iframe
						className="contact__google-map"
						src={
							addressesData.find(
								(address) => address.place === filterAddressPlace,
							)?.mapUrl || ""
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
	);
}
