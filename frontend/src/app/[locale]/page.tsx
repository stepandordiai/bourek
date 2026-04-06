import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import Container from "@/components/Container/Container";
import Testimonials from "@/components/Testimonials/Testimonials";
import { Link } from "@/i18n/navigation";
import HomeClient from "./HomeClient";
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

export default async function Home() {
	const t = await getTranslations();

	return (
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
	);
}
