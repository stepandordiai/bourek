import { getTranslations } from "next-intl/server";
import CustomDivider from "../../components/CustomDivider/CustomDivider";
import Breadcrumbs from "../../components/common/PageTitle/Breadcrumbs";
import Container from "../../components/Container/Container";
import addressesData from "../../data/addresses-data.json";
import ContactClient from "./ContactClient";
import type { Metadata } from "next";
import "./Contact.scss";

// const services = navLinksData.find((link) => link.id === 3)?.nestedLinks;

// const dateNow = dayjs();
// const hoursNow = dateNow.hour();
// const minutesNow = dateNow.minute();

// const formatedDate = dateNow.format("YYYY-MM-DD");
// const formatedHours = hoursNow < 10 ? "0" + hoursNow : hoursNow;
// const formatedMinutes = minutesNow < 10 ? "0" + minutesNow : minutesNow;

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale });
	const baseUrl = "https://www.bourek.cz";

	return {
		title: `${t("contacts_title")} | Bourek`,
		description:
			"Kontaktujte ordinaci MUDr. Josef Bourek v Kolíně nebo Českém Brodě. Objednejte se na rehabilitaci, fyzioterapii či další služby online nebo telefonicky.",
		alternates: {
			canonical: `${baseUrl}/${locale}/kontakt`,
			languages: {
				cs: `${baseUrl}/cs/kontakt`,
				uk: `${baseUrl}/uk/kontakt`,
				en: `${baseUrl}/en/kontakt`,
				"x-default": `${baseUrl}/cs/kontakt`,
			},
		},
	};
}

export default async function Contact() {
	const t = await getTranslations();

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

	return (
		<main>
			<Breadcrumbs title={t("contacts_title")} />
			<Container>
				<div className="contact__wrapper">
					<p style={{ marginBottom: 20 }}>
						Pro konzultaci lékaře využijte zabezpečenou komunikaci přes
						Smartmedix.net, odpoví v pracovní době.
					</p>
					<p style={{ marginBottom: 40 }}>
						Volejte prosím jen v případě technických problémů s užíváním
						platformy Smartmedix.net, kterou využíváme pro objednávání a
						komunikaci s pacienty.
					</p>
					<div className="contact-details-container">
						{addressesData.map((address, i) => {
							return (
								<div
									key={i}
									style={{
										width: "100%",
										background: "var(--blue-clr-1)",
										borderRadius: 10,
										padding: 10,
									}}
								>
									<p className="contact-details__title">{address.place}</p>
									<ul className="contact__list">
										<li>
											{/* TODO: learn this */}
											<a href={`tel:${address.tel.replaceAll(" ", "")}`}>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="24"
													height="24"
													fill="currentColor"
													className="bi bi-telephone-fill"
													viewBox="0 0 16 16"
												>
													<path
														fillRule="evenodd"
														d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
													/>
												</svg>
												<span>{address.tel}</span>
											</a>
										</li>
										<li>
											<a href={address.addressUrl} target="_blank">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="24"
													height="24"
													fill="currentColor"
													className="bi bi-geo-alt-fill"
													viewBox="0 0 16 16"
												>
													<path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
												</svg>
												<span>{address.address}</span>
											</a>
										</li>
									</ul>
								</div>
							);
						})}
					</div>
					<CustomDivider />
					<ContactClient />
				</div>
			</Container>
		</main>
	);
}
