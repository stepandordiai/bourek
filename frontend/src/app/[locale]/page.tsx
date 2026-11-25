import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import Container from "@/components/Container/Container";
import Testimonials from "@/components/Testimonials/Testimonials";
import { Link } from "@/i18n/navigation";
import HomeClient from "./HomeClient";
import { BASE_URL } from "@/lib/constants";
import "./Home.scss";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "home.meta" });
	const languages = Object.fromEntries(
		routing.locales.map((l) => [l, `/${l}`]),
	);

	return {
		title: `${t("title")}`,
		description: t("desc"),
		alternates: {
			canonical: `/${locale}`,
			languages: {
				...languages,
				"x-default": `/${routing.defaultLocale}`,
			},
		},
	};
}

export default async function Home({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);
	const t = await getTranslations();

	const jsonLd = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "MedicalOrganization",
				"@id": `${BASE_URL}/#organization`,
				name: "MUDr. Josef Bourek s.r.o.",
				url: `${BASE_URL}/`,
				logo: {
					"@type": "ImageObject",
					url: `${BASE_URL}/logo/bourek.png`,
				},
				image: `${BASE_URL}/logo/bourek.png`,
				email: "josef@bourek.cz",
				medicalSpecialty: "Physiotherapy",
				identifier: {
					"@type": "PropertyValue",
					propertyID: "ICO",
					value: "02478714",
				},
				sameAs: ["https://www.facebook.com/profile.php?id=61575622597789"],
				department: [
					{ "@id": `${BASE_URL}/#clinic-kolin` },
					{ "@id": `${BASE_URL}/#clinic-cesky-brod` },
				],
			},
			{
				"@type": ["Physiotherapy", "MedicalClinic", "LocalBusiness"],
				"@id": `${BASE_URL}/#clinic-kolin`,
				name: "MUDr. Josef Bourek s.r.o. – Kolín",
				parentOrganization: { "@id": `${BASE_URL}/#organization` },
				url: `${BASE_URL}/`,
				image: `${BASE_URL}/logo/bourek.png`,
				telephone: "+420602273579",
				email: "josef@bourek.cz",
				medicalSpecialty: "Physiotherapy",
				currenciesAccepted: "CZK",
				address: {
					"@type": "PostalAddress",
					streetAddress: "Pod Hroby 271, Kolín IV",
					addressLocality: "Kolín",
					postalCode: "280 02",
					addressCountry: "CZ",
				},
				hasMap: "https://maps.app.goo.gl/qpbWKMAZ28ndXQRa9",
				availableLanguage: ["cs", "uk", "en"],
				availableService: [
					{ "@type": "MedicalTherapy", name: "Fyzioterapie" },
					{ "@type": "MedicalTherapy", name: "Elektroléčba" },
					{ "@type": "MedicalTherapy", name: "Lymfodrenáže" },
					{ "@type": "MedicalTherapy", name: "Lékařská akupunktura" },
					{ "@type": "MedicalTherapy", name: "Léčba bolesti" },
				],
			},
			{
				"@type": ["Physiotherapy", "MedicalClinic", "LocalBusiness"],
				"@id": `${BASE_URL}/#clinic-cesky-brod`,
				name: "MUDr. Josef Bourek s.r.o. – Český Brod",
				parentOrganization: { "@id": `${BASE_URL}/#organization` },
				url: `${BASE_URL}/`,
				image: `${BASE_URL}/logo/bourek.png`,
				telephone: "+420601369198",
				email: "josef@bourek.cz",
				medicalSpecialty: "Physiotherapy",
				currenciesAccepted: "CZK",
				address: {
					"@type": "PostalAddress",
					streetAddress: "Žižkova 282",
					addressLocality: "Český Brod",
					postalCode: "282 01",
					addressCountry: "CZ",
				},
				hasMap: "https://maps.app.goo.gl/SuWAbEfPY9TAUzDE7",
				availableLanguage: ["cs", "uk", "en"],
			},
			{
				"@type": "WebSite",
				"@id": `${BASE_URL}/#website`,
				url: `${BASE_URL}/`,
				name: "MUDr. Josef Bourek s.r.o.",
				inLanguage: ["cs", "uk", "en"],
				publisher: { "@id": `${BASE_URL}/#organization` },
			},
		],
	};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<main className="home">
				<Container>
					<section className="home-hero">
						<div className="home__wrapper">
							<div style={{ width: "100%" }}>
								<div className="home__title-container">
									<h1 className="home__heading accent">
										Ordinace rehabilitačních lékařů
										<br />
										Fyzioterapie
										<br />
										Lékařská akupunktura
									</h1>
								</div>
								<div className="home__link-container">
									<Link className="home__link" href="/co-nabizime">
										{t("offer_title")}
									</Link>
									<a className="home__link" href="tel:+420602273579">
										{t("appointment_title")}
									</a>
								</div>
							</div>
							<HomeClient />
						</div>
						<a
							className="home__scroll-mouse-btn"
							href="#testimonials"
							title={t("home.scrollHint")}
						>
							<span className="wheel"></span>
						</a>
					</section>
					<Testimonials />
				</Container>
			</main>
		</>
	);
}
