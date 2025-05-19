import { useEffect } from "react";
import i18n from "i18next";
import downArrowIcon from "/icons/down-arrow.png";
import "./LngSelect.scss";

const LanguageSelect = () => {
	useEffect(() => {
		// Function that change language

		const handleChangeLanguage = (lng) => {
			i18n.changeLanguage(lng);
		};

		document.querySelectorAll(".lang-select").forEach((select) => {
			const selectBtn = select.querySelector(".lang-select__btn");
			const selectList = select.querySelector(".lang-select__list");
			const selectOptions = selectList.querySelectorAll(".lang-select__option");

			selectBtn.addEventListener("click", () => {
				selectList.classList.toggle("lang-select__list--visible");
				selectBtn.classList.toggle("lang-select__btn--active");
				document
					.querySelector(".lang-select__btn-icon")
					.classList.toggle("lang-select__btn-icon--active");
			});

			selectOptions.forEach((option) => {
				option.addEventListener("click", (e) => {
					e.stopPropagation();
					handleChangeLanguage(option.dataset.value);
					selectBtn.classList.remove("lang-select__btn--active");
					selectList.classList.remove("lang-select__list--visible");
					document
						.querySelector(".lang-select__btn-icon")
						.classList.remove("lang-select__btn-icon--active");
				});
			});

			document.addEventListener("click", (e) => {
				if (e.target !== selectBtn) {
					selectBtn.classList.remove("lang-select__btn--active");
					selectList.classList.remove("lang-select__list--visible");
					document
						.querySelector(".lang-select__btn-icon")
						.classList.remove("lang-select__btn-icon--active");
				}
			});
		});
	}, []);

	const lngStorage = localStorage.getItem("i18nextLng") || "cs";

	let selectBtnTxt = "CZ";

	switch (lngStorage) {
		case "cs":
			selectBtnTxt = "CZ";
			break;
		case "uk":
			selectBtnTxt = "UA";
			break;
		case "en":
			selectBtnTxt = "EN";
			break;
	}

	const inactiveLngOption = "lang-select__option";
	const activeLngOption = "lang-select__option lang-select__option--active";

	return (
		<div className="lang-select">
			<button className="lang-select__btn">
				<span className="lang-select__btn-value">{selectBtnTxt}</span>
				<span className="lang-select__btn-icon">
					{/* <i className="fa-solid fa-chevron-down"></i> */}
					<img width={20} src={downArrowIcon} alt="" />
				</span>
			</button>
			<ul className="lang-select__list">
				<li
					className={lngStorage === "cs" ? activeLngOption : inactiveLngOption}
					data-value="cs"
				>
					<span>CZ</span>
					<img
						width={20}
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Czech_Republic.svg/383px-Flag_of_the_Czech_Republic.svg.png"
						alt="Flag"
					/>
				</li>
				<li
					className={lngStorage === "uk" ? activeLngOption : inactiveLngOption}
					data-value="uk"
				>
					<span>UA</span>
					<img
						width={20}
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/383px-Flag_of_Ukraine.svg.png"
						alt="Flag"
					/>
				</li>
				<li
					className={lngStorage === "en" ? activeLngOption : inactiveLngOption}
					data-value="en"
				>
					<span>EN</span>
					<img
						width={20}
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Flag_of_the_United_States_%28Pantone%29.svg/383px-Flag_of_the_United_States_%28Pantone%29.svg.png"
						alt="Flag"
					/>
				</li>
			</ul>
		</div>
	);
};

export default LanguageSelect;
