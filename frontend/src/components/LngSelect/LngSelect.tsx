"use client";

import { useLocale } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "@/i18n/navigation";
import ChevronDownIcon from "@/components/icons/ChevronDownIcon";
import "./LngSelect.scss";

interface Lng {
	locale: string;
	label: string;
	iconSrc: string;
}

const languages: Lng[] = [
	{
		locale: "cs",
		label: "CZ",
		iconSrc: "/icons/cs.svg",
	},
	{
		locale: "uk",
		label: "UA",
		iconSrc: "/icons/uk.svg",
	},
	{
		locale: "en",
		label: "EN",
		iconSrc: "/icons/en.svg",
	},
];

const LngSelect = () => {
	const locale = useLocale();
	const pathname = usePathname();
	const router = useRouter();

	const [lngSelectVisible, setLngSelectVisible] = useState(false);
	const [selectedLng, setSelectedLng] = useState(
		languages.find((lng) => lng.locale === locale),
	);

	const lngSelect = useRef<HTMLDivElement>(null);

	const toggleLngSelect = () => setLngSelectVisible((prev) => !prev);

	// TODO: LEARN THIS
	const handleLngSelectOption = (lng: Lng) => {
		// next-intl сама оновить URL, зберігши поточний шлях
		// Наприклад: /uk/about -> /en/about
		router.replace(pathname, { locale: lng.locale });
		setSelectedLng(lng);
		setLngSelectVisible(false);
	};

	useEffect(() => {
		// TODO: learn this
		const handleClickNotOnLngSelect = (e: MouseEvent) => {
			if (lngSelect.current && !lngSelect.current.contains(e.target as Node)) {
				setLngSelectVisible(false);
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
					lngSelectVisible ? "lng-select__btn--active" : ""
				}`}
				aria-expanded={lngSelectVisible}
				aria-controls="lng-select-list"
			>
				<span className="lng-select__btn-value">{selectedLng?.label}</span>
				<img width={20} height={20} src={selectedLng?.iconSrc} alt="" />
				<span
					className={`lng-select__btn-icon ${
						lngSelectVisible ? "lng-select__btn-icon--active" : ""
					}`}
				>
					<ChevronDownIcon size={20} />
				</span>
			</button>
			<ul
				className={`lng-select__list ${
					lngSelectVisible ? "lng-select__list--visible" : ""
				}`}
				id="lng-select-list"
				aria-hidden={!lngSelectVisible}
			>
				{languages.map((lng) => {
					return (
						<li key={lng.locale}>
							<button
								onClick={() => handleLngSelectOption(lng)}
								className={`lng-select__option ${
									lng === selectedLng ? "lng-select__option--active" : ""
								}`}
							>
								<span>{lng.label}</span>
								<img width={20} height={20} src={lng.iconSrc} alt="" />
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default LngSelect;
