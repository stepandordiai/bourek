import { useEffect, useRef, useState } from "react";
import i18n from "i18next";
import csIcon from "/icons/cs.svg";
import ukIcon from "/icons/uk.svg";
import enIcon from "/icons/en.svg";
import "./LngSelect.scss";

const lngData = [
	{
		code: "cs",
		name: "CZ",
		iconSrc: csIcon,
	},
	{
		code: "uk",
		name: "UA",
		iconSrc: ukIcon,
	},
	{
		code: "en",
		name: "EN",
		iconSrc: enIcon,
	},
];

const getLngCode = () => localStorage.getItem("i18nextLng") || "cs";

const LngSelect = () => {
	const [lngSelectActive, setLngSelectActive] = useState(false);
	const [selectedLng, setSelectedLng] = useState(
		lngData.find((lng) => lng.code === getLngCode())
	);

	const lngSelect = useRef(null);

	const toggleLngSelect = () => setLngSelectActive((prev) => !prev);

	const handleLngSelectOption = (lng) => {
		i18n.changeLanguage(lng.code);
		setLngSelectActive(false);
		setSelectedLng(lng);
	};

	useEffect(() => {
		const handleClickNotOnLngSelect = (e) => {
			if (lngSelect.current && !lngSelect.current.contains(e.target)) {
				setLngSelectActive(false);
			}
		};

		document.addEventListener("click", handleClickNotOnLngSelect);

		return () =>
			document.removeEventListener("click", handleClickNotOnLngSelect);
	}, []);

	return (
		<div ref={lngSelect} className="lng-select">
			<button
				onClick={toggleLngSelect}
				className={`lng-select__btn ${
					lngSelectActive ? "lng-select__btn--active" : ""
				}`}
			>
				<span className="lng-select__btn-value">{selectedLng.name}</span>
				<img width={20} height={20} src={selectedLng.iconSrc} alt="" />
				<span
					className={`lng-select__btn-icon ${
						lngSelectActive ? "lng-select__btn-icon--active" : ""
					}`}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						fill="currentColor"
						className="bi bi-chevron-down"
						viewBox="0 0 16 16"
					>
						<path
							fillRule="evenodd"
							d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
						/>
					</svg>
				</span>
			</button>
			<ul
				className={`lng-select__list ${
					lngSelectActive ? "lng-select__list--visible" : ""
				}`}
			>
				{lngData.map((lng) => {
					return (
						<li
							key={lng.code}
							onClick={() => handleLngSelectOption(lng)}
							className={`lng-select__option ${
								lng === selectedLng ? "lng-select__option--active" : ""
							}`}
						>
							<span>{lng.name}</span>
							<img width={20} height={20} src={lng.iconSrc} alt="" />
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default LngSelect;
