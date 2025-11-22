import { useEffect, useRef, useState } from "react";
import i18n from "i18next";
import "./LngSelect.scss";

const lngData = [
	{
		code: "cs",
		name: "CZ",
		iconSrc:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Czech_Republic.svg/383px-Flag_of_the_Czech_Republic.svg.png",
	},
	{
		code: "uk",
		name: "UA",
		iconSrc:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/383px-Flag_of_Ukraine.svg.png",
	},
	{
		code: "en",
		name: "EN",
		iconSrc:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Flag_of_the_United_States_%28Pantone%29.svg/383px-Flag_of_the_United_States_%28Pantone%29.svg.png",
	},
];

const getLngCode = () => localStorage.getItem("i18nextLng") || "cs";

const LanguageSelect = () => {
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
				<span
					className={`lng-select__btn-icon ${
						lngSelectActive ? "lng-select__btn-icon--active" : ""
					}`}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						fill="#000000"
						class="bi bi-chevron-down"
						viewBox="0 0 16 16"
					>
						<path
							fill-rule="evenodd"
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

export default LanguageSelect;
