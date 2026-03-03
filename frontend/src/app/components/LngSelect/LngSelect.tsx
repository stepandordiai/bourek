"use client";

import { useLocale } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import "./LngSelect.scss";

interface Lng {
	code: string;
	name: string;
	iconSrc: string;
}

const lngData: Lng[] = [
	{
		code: "cs",
		name: "CZ",
		iconSrc: "/icons/cs.svg",
	},
	{
		code: "uk",
		name: "UA",
		iconSrc: "/icons/uk.svg",
	},
	{
		code: "en",
		name: "EN",
		iconSrc: "/icons/en.svg",
	},
];

const LngSelect = () => {
	const locale = useLocale();
	const pathname = usePathname();
	const router = useRouter();

	const [lngSelectVisible, setLngSelectVisible] = useState(false);
	const [selectedLng, setSelectedLng] = useState(
		lngData.find((lng) => lng.code === locale),
	);

	const lngSelect = useRef<HTMLDivElement>(null);

	const toggleLngSelect = () => setLngSelectVisible((prev) => !prev);

	// TODO: LEARN THIS
	const handleLngSelectOption = (lng: Lng) => {
		const newPathname = pathname.replace(`/${locale}`, `/${lng.code}`);
		router.replace(newPathname);
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
				<span className="lng-select__btn-value">{selectedLng?.name}</span>
				<img width={20} height={20} src={selectedLng?.iconSrc} alt="" />
				<span
					className={`lng-select__btn-icon ${
						lngSelectVisible ? "lng-select__btn-icon--active" : ""
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
					lngSelectVisible ? "lng-select__list--visible" : ""
				}`}
				id="lng-select-list"
				aria-hidden={!lngSelectVisible}
			>
				{lngData.map((lng) => {
					return (
						<li key={lng.code}>
							<button
								key={lng.code}
								onClick={() => handleLngSelectOption(lng)}
								className={`lng-select__option ${
									lng === selectedLng ? "lng-select__option--active" : ""
								}`}
							>
								<span>{lng.name}</span>
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
