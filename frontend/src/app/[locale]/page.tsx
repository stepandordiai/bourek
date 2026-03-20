import { getTranslations } from "next-intl/server";
import Container from "../components/Container/Container";
import Testimonials from "../components/Testimonials/Testimonials";
import { Link } from "@/i18n/navigation";
import type { Metadata } from "next";
import "./Home.scss";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale });

	const locales = ["cs", "uk", "en"];
	const languages = Object.fromEntries(locales.map((l) => [l, `/${l}`]));

	return {
		title: `Bourek | ${t("homeMetaTitle")}`,
		description:
			"Ordinace MUDr. Josef Bourek – odborná rehabilitační péče v Kolíně. Fyzioterapie, elektroléčba, lymfodrenáže a moderní terapie pro úlevu od bolesti.",
		alternates: {
			canonical: `/${locale}`,
			languages: {
				...languages,
				"x-default": `/cs`,
			},
		},
	};
}

export default async function Home() {
	const t = await getTranslations();

	return (
		<main className="home">
			<Container>
				<section className="home-hero">
					<div className="home__wrapper">
						<div>
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
						<div>
							<img
								className="home__img"
								src="https://ld-wp73.template-help.com/wordpress/prod_29195/v1/wp-content/uploads/2020/05/Rectangle-64.png"
								alt="MUDr. Josef Bourek s.r.o."
							/>
						</div>
					</div>
					<Link className="home__scroll-mouse-btn" href="/#testimonials">
						<div className="wheel"></div>
					</Link>
				</section>
				<Testimonials />
			</Container>
		</main>
	);
}
