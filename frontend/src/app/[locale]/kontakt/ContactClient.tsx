"use client";

import { useRef, useState } from "react";
import addressesData from "@/data/addresses-data.json";
import { useTranslations } from "next-intl";
import "./Contact.scss";

const mapTypeLabels = [
	addressesData[0].googleMap.label,
	addressesData[0].mapyCz.label,
];

export default function ContactClient() {
	const t = useTranslations();

	const [filterAddressPlace, setFilterAddressPlace] = useState(
		addressesData[0].place,
	);
	const [filterAddressMap, setFilterAddressMap] = useState(mapTypeLabels[0]);

	const selectedAddress = addressesData.find(
		(address) => address.place === filterAddressPlace,
	);

	const selectedMap =
		filterAddressMap === selectedAddress?.googleMap.label
			? selectedAddress?.googleMap
			: selectedAddress?.mapyCz;

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

	console.log(mapTypeLabels.indexOf(filterAddressMap));

	return (
		<div className="form-map-wrapper">
			<div className="map-wrapper">
				<h2 className="contact__map-title">{t("contacts.map_title")}</h2>
				<div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
					<div className="map-wrapper__header-container">
						{addressesData.map((address, i) => {
							return (
								<button
									key={i}
									onClick={() => setFilterAddressPlace(address.place)}
									className={`${filterAddressPlace === addressesData[i].place ? "map-btn--active" : ""}`}
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
					<div className="map-wrapper__header-container">
						{mapTypeLabels.map((label, i) => (
							<button
								key={i}
								onClick={() => setFilterAddressMap(label)}
								className={filterAddressMap === label ? "map-btn--active" : ""}
							>
								{label}
							</button>
						))}
						<div
							className={`active-map-bg ${
								mapTypeLabels.indexOf(filterAddressMap)
									? "active-map-bg--active"
									: ""
							}`}
						/>
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
						src={selectedMap?.url}
						loading="lazy"
					></iframe>
				</div>
			</div>
		</div>
	);
}
